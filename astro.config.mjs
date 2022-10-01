import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import WindiCSS from 'vite-plugin-windicss';
import compress from "astro-compress";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCSS()],
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [sitemap(), compress(), critters()],
  site: 'https://www.carlosbronze.com.br/'
});