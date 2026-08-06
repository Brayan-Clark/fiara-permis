// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

// Set by the GitHub Pages workflow at build time so the site works both at
// the domain root (local dev, custom domain) and under a project subpath
// (https://user.github.io/repo-name/).
const base = process.env.BASE_PATH || '/';
const site = process.env.SITE_URL || 'https://fiara-permis.mg';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    alpinejs(),
    sitemap(),
    AstroPWA({
      base,
      scope: base,
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['favicon.svg', 'og-image.svg', 'icons/apple-touch-icon.png'],
      manifest: {
        id: base,
        name: 'Fiara Permis — Code de la route Madagascar',
        short_name: 'Fiara Permis',
        description:
          "Cours, cartes de quiz et exercices pour préparer le code de la route à Madagascar (permis A, A', B et plus), utilisable hors connexion.",
        lang: 'fr',
        start_url: base,
        scope: base,
        display: 'standalone',
        background_color: '#f3e7cf',
        theme_color: '#c1440e',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{html,css,js,svg,png,woff,woff2}'],
        navigateFallback: `${base}offline/`,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
            },
          },
        ],
      },
    }),
  ],
});
