import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import { targetBlank } from './src/plugins/targetBlank';

// https://astro.build/config
export default defineConfig({
  site: 'https://tiagoromero.me',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    rehypePlugins: [[targetBlank, { domain: 'tiagoromero.me' }]],
  },
});