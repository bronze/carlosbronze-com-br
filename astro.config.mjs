import {defineConfig} from 'astro/config';
import UnoCSS from 'unocss/astro';
import compress from "astro-compress";
import critters from "astro-critters";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  integrations: [UnoCSS(), sitemap(), compress(), critters()],
  site: 'https://www.carlosbronze.com.br/'
});
