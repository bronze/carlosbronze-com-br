import {defineConfig} from 'astro/config';
import {loadEnv} from "vite";
import UnoCSS from 'unocss/astro';
import sitemap from '@astrojs/sitemap';
import critters from "astro-critters";
import compress from "astro-compress";

const env=loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  // site: env.SITE_URL,
  site: 'https://www.carlosbronze.com.br/',
  integrations: [UnoCSS(), sitemap(), critters({ critters: { preload: 'body' } }), compress()],
});
