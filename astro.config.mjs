import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://www.carlosbronze.com.br/",
  integrations: [tailwind(), mdx(), sitemap(), prefetch(), critters({Critters: {preload: 'body', includeSelectors: [/\:root/, /^\:root.*/, /[:]\s*root.*/, /\:root\s*\{([^}]*)\}/, /\:root\[data-theme~=['"][^'"]*['"]\]/, /\:root/, '.banner', ':root', ':root[data-theme~=\'dark\']'], }}), compress()]
});
