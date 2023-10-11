import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import compress from "astro-compress";
import compressor from "astro-compressor";
import critters from "astro-critters";
import criticalCss from "astro-critical-css";
import swup from "@swup/astro";



// https://astro.build/config
export default defineConfig({
  site: "https://www.carlosbronze.com.br/",
  integrations: [tailwind({
    // Example: Disable injecting a basic `base.css` import on every page.
    // Useful if you need to define and/or import your own custom `base.css`.
    applyBaseStyles: true
  }), mdx(), sitemap(), prefetch(), compress({
    CSS: false,
    HTML: false,
    Image: false,
    JavaScript: false,
    SVG: true
  }), compressor()]
});

// {penthouse: {forceInclude: [/^\:root.*/], }}
// critters({
//   Critters: {
//     preload: 'body',
//     includeSelectors: [/\:root/, /^\:root.*/, /[:]\s*root.*/, /\:root\s*\{([^}]*)\}/, /\:root\[data-theme~=['"][^'"]*['"]\]/, /\:root/, '.banner', ':root', ':root[data-theme~=\'dark\',]', '@font-face']
//   }
// })
