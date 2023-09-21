import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import critters from "astro-critters";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.carlosbronze.com.br/",
  integrations: [tailwind(), alpinejs(), mdx(), sitemap(), critters()]
});
