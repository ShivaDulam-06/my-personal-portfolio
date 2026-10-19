// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shivadulam.is-a.dev',
  integrations: [
    sitemap({
      filter: (page) => {
        const url = new URL(page);
        const pathname =
          url.pathname === '/' ? '/' : url.pathname.replace(/\/+$/, '');
        const allowed = new Set(['/', '/about', '/projects', '/skills', '/resume', '/contact']);
        return allowed.has(pathname);
      },
      serialize: (item) => {
        if (!item.url) return item;
        const url = new URL(item.url);
        if (url.pathname !== '/') {
          url.pathname = url.pathname.replace(/\/+$/, '');
        }
        item.url = url.href;
        return item;
      },
    }),
  ],
});
