// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.nepten.fr',
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    // ancien slug du site d'origine
    '/expertise-1': '/projets',
  },
});
