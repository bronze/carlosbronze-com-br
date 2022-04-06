import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
    },
  }), sitemap()],
  site: 'https://www.carlosbronze.com.br/',
});