import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import WindiCSS from 'vite-plugin-windicss'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCSS()],
    ssr: {
      external: ["svgo"],
    },
  },
  integrations: [sitemap()],
  site: 'https://www.carlosbronze.com.br/',
});