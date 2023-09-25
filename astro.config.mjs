import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import critters from "astro-critters";
import compress from "astro-compress";

import criticalCss from "astro-critical-css";

// https://astro.build/config
export default defineConfig({
  site: "https://www.carlosbronze.com.br/",
  integrations: [tailwind(), mdx(), sitemap(), prefetch(), criticalCss({
    penthouse: {
      forceInclude: [/^\:root.*/],
    }
  }), compress({CSS: false, HTML: true, Image: false, JavaScript: false, SVG: false})]
});


// critters({
//   Critters: {
//     preload: 'body',
//     includeSelectors: [/\:root/, /^\:root.*/, /[:]\s*root.*/, /\:root\s*\{([^}]*)\}/, /\:root\[data-theme~=['"][^'"]*['"]\]/, /\:root/, '.banner', ':root', ':root[data-theme~=\'dark\',]', '@font-face']
//   }
// })
