// @ts-check
import { defineConfig } from 'astro/config';
import sitemapPlugin from  '@astrojs/sitemap' ; 
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kb-tkalhijrah.sch.id',

  integrations: [
    tailwind(),
    sitemapPlugin()
  ],
});