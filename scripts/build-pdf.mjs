// Génère les PDF téléchargeables du livret (français et malagasy) à partir du
// site déjà construit dans dist/. Chrome headless imprime la page /livret avec
// sa feuille de style d'impression, exactement comme « Enregistrer en PDF ».
//
// Sans Chrome disponible, le script prévient et s'arrête sans faire échouer le
// build : le bouton « Imprimer » du livret reste utilisable.
import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { existsSync, readFileSync, statSync, writeFileSync, mkdtempSync, rmSync } from 'node:fs';
import { join, extname } from 'node:path';
import { tmpdir } from 'node:os';

const DIST = new URL('../dist/', import.meta.url).pathname;
const BASE = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const LANGS = ['fr', 'mg'];
export const pdfName = (lang) => `fiara-permis-livret-${lang}.pdf`;

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);

const chromePath = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!chromePath) {
  console.warn('[livret-pdf] Chrome introuvable : PDF non générés (définis CHROME_PATH pour les activer).');
  process.exit(0);
}
if (!existsSync(join(DIST, 'livret', 'index.html'))) {
  console.warn('[livret-pdf] dist/livret introuvable : lance d’abord « astro build ».');
  process.exit(0);
}

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
};

// Petit serveur statique qui reproduit le chemin de base du déploiement.
const server = createServer((req, res) => {
  const url = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (!url.startsWith(BASE)) return res.writeHead(404).end();
  let file = join(DIST, url.slice(BASE.length));
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const origin = `http://127.0.0.1:${server.address().port}`;

const profile = mkdtempSync(join(tmpdir(), 'fiara-pdf-'));
const chrome = spawn(
  chromePath,
  ['--headless=new', '--disable-gpu', '--no-sandbox', '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'],
  { stdio: ['ignore', 'ignore', 'pipe'] },
);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const step = (label) => process.env.DEBUG_PDF && console.log(`[livret-pdf] ${label}`);
step(`Chrome : ${chromePath}, site : ${origin}${BASE}`);

try {
  // Chrome annonce son port DevTools sur stderr.
  const wsBrowser = await new Promise((resolve, reject) => {
    let buf = '';
    chrome.stderr.on('data', (d) => {
      buf += d;
      const m = buf.match(/DevTools listening on (ws:\/\/\S+)/);
      if (m) resolve(m[1]);
    });
    chrome.on('exit', () => reject(new Error('Chrome s’est arrêté au démarrage')));
    setTimeout(() => reject(new Error('Chrome ne répond pas')), 20000);
  });
  step(`DevTools : ${wsBrowser}`);
  const port = new URL(wsBrowser).port;
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');

  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0;
  const pending = new Map();
  ws.addEventListener('message', (e) => {
    const msg = JSON.parse(e.data);
    if (pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
    }
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const i = ++id;
      pending.set(i, { resolve, reject });
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  // Chaque attente côté page est bornée : une image ou une police qui ne
  // répond pas ne doit pas bloquer le build.
  const evaluate = (expression, ms = 15000) =>
    send('Runtime.evaluate', {
      expression: `Promise.race([Promise.resolve(${expression}), new Promise((r) => setTimeout(r, ${ms}))])`,
      awaitPromise: true,
      returnByValue: true,
    });

  const livret = `${origin}${BASE}livret/`;
  step('page ouverte');
  for (const lang of LANGS) {
    step(`${lang} : préparation`);
    // Langue choisie et aucune catégorie filtrée : le PDF contient tout le cours.
    await send('Page.navigate', { url: livret });
    await sleep(500);
    const set = await send('Runtime.evaluate', {
      expression: `localStorage.setItem('fiara-lang', '${lang}'); localStorage.setItem('fiara-cats', '[]'); localStorage.getItem('fiara-lang')`,
      returnByValue: true,
    });
    if (set.result?.value !== lang) throw new Error(`Impossible de choisir la langue ${lang}`);
    await send('Page.navigate', { url: livret });
    await sleep(1500);
    await evaluate(
      `Promise.all([document.fonts.ready, ...[...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))])`,
    );
    // Les images des panneaux sont en lazy-loading : on les charge toutes avant d'imprimer.
    await evaluate(
      `Promise.all([...document.images].map((i) => { i.loading = 'eager'; return i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }); }))`,
    );
    await sleep(500);
    step(`${lang} : impression`);
    const { data } = await send('Page.printToPDF', {
      printBackground: true,
      preferCSSPageSize: true,
      paperWidth: 8.27,
      paperHeight: 11.69,
    });
    const out = join(DIST, 'livret', pdfName(lang));
    writeFileSync(out, Buffer.from(data, 'base64'));
    console.log(`[livret-pdf] ${out.replace(DIST, 'dist/')} (${Math.round(statSync(out).size / 1024)} Ko)`);
  }
  ws.close();
} finally {
  chrome.kill();
  server.close();
  rmSync(profile, { recursive: true, force: true });
}
