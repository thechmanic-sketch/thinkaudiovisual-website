// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://thinkaudiovisual.co.za',
  trailingSlash: 'always',
  devToolbar: { enabled: false }, // hide Astro's developer bar in local preview (never shown on the live site)
  // Old 2017 site URLs → new pages. On Apache/cPanel the real 301s come from public/.htaccess;
  // these entries are the fallback for hosts without .htaccess.
  redirects: {
    '/about.html': '/about/',
    '/services.html': '/services/',
    '/contacts.html': '/contact/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [sitemap()],
});
