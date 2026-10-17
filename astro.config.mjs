import tailwindcss from '@tailwindcss/vite'
// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import react from '@astrojs/react'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  // Canonical URLs, Open Graph and the sitemap are built from this.
  site: 'https://www.carlosbronze.com',

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: 'Geist',
        cssVariable: '--font-geist',
        weights: [400, 500, 600, 700],
        subsets: ['latin'],
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Geist Mono',
        cssVariable: '--font-geist-mono',
        weights: [400, 500, 600, 700],
        subsets: ['latin'],
      },
      {
        provider: fontProviders.fontsource(),
        name: 'Newsreader',
        cssVariable: '--font-newsreader',
        weights: [400, 500],
        styles: ['normal', 'italic'],
        subsets: ['latin'],
      },
    ],
  },

  integrations: [
    react(),
    mdx(),
    sitemap({
      // The home explorations are trials, not pages to index.
      filter: page => !page.includes('/home-exploration-'),
      // Vercel serves pages without the trailing slash (cleanUrls).
      serialize: item => ({ ...item, url: item.url.replace(/(?<=.)\/$/, '') }),
    }),
  ],
})
