// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');

// https://astro.build/config
export default defineConfig({
  // Real domain by default. The GitHub Pages preview build sets SITE_URL + BASE_PATH (see .github/workflows/pages.yml).
  site: process.env.SITE_URL || 'https://thinkaudiovisual.co.za',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false }, // hide Astro's developer bar in local preview (never shown on the live site)
  // Old 2017 site URLs → new pages. On Apache/cPanel the real 301s come from public/.htaccess;
  // these entries are the fallback for hosts without .htaccess.
  redirects: {
    '/about.html': `${BASE}/about/`,
    '/services.html': `${BASE}/services/`,
    '/contacts.html': `${BASE}/contact/`,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
