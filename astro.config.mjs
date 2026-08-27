// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Déploiement GitHub Pages : DEPLOY_TARGET=gh → site servi sous /nepten/
const isGithubPages = process.env.DEPLOY_TARGET === 'gh';

export default defineConfig({
  site: isGithubPages ? 'https://guillaume-cozic.github.io' : 'https://www.nepten.fr',
  base: isGithubPages ? '/nepten' : '/',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    // ancien slug du site d'origine
    '/expertise-1': '/projets',
  },
});
