# Fiara Permis 🌴

Application web installable et utilisable hors connexion pour réviser le code de la route à Madagascar (permis A, A', B et plus) : cours en 6 modules, cartes de quiz, examen blanc chronométré, glossaire, et exercices pratiques (reconnaissance de panneaux, cas de priorité vrai/faux).

Construit avec **Astro** (SSG, zéro JS par défaut, excellent pour le SEO et la performance), **Tailwind CSS v4** pour le style, **Alpine.js** pour les interactions, et **@vite-pwa/astro** (Workbox) pour le mode hors-ligne.

## Contenu et sources

Le contenu des 6 modules (`src/content/cours/*.md`) s'appuie sur la **loi n°2017-002 portant Code de la Route à Madagascar** et sur des sources publiques complémentaires (Fiarakodia, Studio Sifaka). Chaque module cite ses sources en bas de page, et la page `/sources` les regroupe toutes. Les montants (frais, amendes) et le seuil de réussite de l'examen blanc sont indicatifs — à revérifier auprès du CIM ou de l'auto-école avant toute démarche officielle.

## Démarrer en local

```sh
npm install
npm run dev       # http://localhost:4321
```

```sh
npm run build     # génère le site statique dans dist/
npm run preview   # prévisualise le build de production (nécessaire pour tester le service worker)
npm run astro check   # vérification TypeScript
```

Le service worker n'est généré qu'au `build` (pas en `dev`) — pour tester le mode hors-ligne en local, fais `npm run build && npm run preview`, ouvre le site, laisse-le se charger une fois en ligne, puis repasse en mode avion et recharge.

## Structure

```
src/
├── content/cours/       # Les 6 modules du cours (Markdown + frontmatter)
├── content.config.ts    # Schéma de la collection "cours"
├── data/                # panneaux.ts, quiz.ts, scenarios.ts, glossary.ts — données structurées
├── components/          # Nav, Footer, ModuleCard, SignGrid, RavinalaProgress, PkMarker…
├── utils/url.ts         # withBase() — préfixe les liens avec le base path (GitHub Pages)
├── layouts/Layout.astro # SEO (meta, OG, JSON-LD), polices, stores Alpine globaux, PWA
└── pages/
    ├── index.astro
    ├── cours/[slug].astro
    ├── quiz/[slug].astro          (cartes + quiz noté)
    ├── examen.astro                (examen blanc chronométré, 20 questions mélangées)
    ├── glossaire.astro
    ├── offline.astro               (page affichée hors-ligne pour une URL non mise en cache)
    └── exercices/{panneaux,priorites}.astro
```

**Ajouter un module de cours** : crée un fichier dans `src/content/cours/`, avec le frontmatter `title`, `pk`, `summary`, `accent`, `order`, `sources`. Il apparaît automatiquement dans `/cours`, la homepage, et peut recevoir son propre paquet de quiz (repris aussi dans l'examen blanc) en ajoutant une entrée dans `src/data/quiz.ts` avec le même `slug`.

**Progression** : stockée en `localStorage` côté client (pas de backend), via le store Alpine `fiaraProgress()` défini dans `src/layouts/Layout.astro`.

**Liens internes** : toujours utiliser `withBase('/chemin')` (voir `src/utils/url.ts`) plutôt que `href="/chemin"` en dur — le site peut être servi depuis un sous-chemin (GitHub Pages) et les liens statiques casseraient sinon.

## PWA — installable et hors connexion

Configuré dans `astro.config.mjs` (intégration `@vite-pwa/astro`) :
- Toutes les pages, icônes et polices sont précachées au premier chargement → navigation 100% fonctionnelle sans connexion ensuite.
- Manifest avec icônes `any` et `maskable` (générées dans `public/icons/` à partir du motif ravinala).
- Bouton "Installer" qui apparaît dans la nav dès que le navigateur le permet (Android/desktop Chrome, Edge…). Sur iOS, l'installation se fait via Safari → Partager → "Sur l'écran d'accueil" (pas de prompt automatique, limitation d'Apple).
- Page `/offline` affichée si une URL non mise en cache est visitée hors connexion.

Pour régénérer les icônes après un changement de design, adapte et relance un script `sharp` similaire à celui utilisé pour produire `public/icons/*.png` (192, 512, 512 maskable, apple-touch-icon 180).

## Déploiement sur GitHub Pages

Un workflow est prêt dans `.github/workflows/deploy.yml` :

1. Pousse ce projet sur un dépôt GitHub.
2. Dans **Settings → Pages**, mets la source sur **GitHub Actions**.
3. Pousse sur `main` (ou lance le workflow manuellement depuis l'onglet Actions) — le site se construit et se déploie automatiquement.

Le workflow calcule tout seul le `base` et l'URL du site à partir du nom du dépôt :
- Dépôt `username.github.io` → site à la racine (`https://username.github.io/`).
- Tout autre nom de dépôt (ex. `fiara-permis`) → site servi sous `/fiara-permis/`, et tous les liens/icônes/manifest s'adaptent automatiquement grâce à `withBase()`.

Aucune configuration manuelle n'est nécessaire dans `astro.config.mjs` pour ça — les variables `BASE_PATH` et `SITE_URL` sont injectées par le workflow au moment du build.

### Déployer ailleurs (Vercel, Netlify, Cloudflare Pages)

Le site est 100% statique (`output: "static"`), il se déploie sans changement sur n'importe quel hébergeur de fichiers statiques :

```sh
npm run build
# → déployer le contenu de dist/
```

Ces plateformes servent le site à la racine du domaine, donc laisse `BASE_PATH` non défini (il vaut `/` par défaut) et règle simplement `site` dans `astro.config.mjs` (ou la variable `SITE_URL`) sur ton domaine final.

### Avant de mettre en ligne, quelle que soit la plateforme
1. Remplace `public/og-image.svg` par un vrai visuel (idéalement un PNG 1200×630) — certains réseaux sociaux n'affichent pas bien les SVG en `og:image`.
2. Vérifie les montants, procédures et le seuil de réussite de l'examen blanc — ce sont les données les plus susceptibles de changer.

## Accessibilité et performance

- Navigation clavier complète, focus visible, `prefers-reduced-motion` respecté.
- Contraste texte/fond vérifié sur la palette (latérite, ravinala, bleu signal, route, sisal).
- Build statique ~700 Ko au total (site + service worker), un seul petit bundle JS (Alpine.js) — pas de framework lourd.
