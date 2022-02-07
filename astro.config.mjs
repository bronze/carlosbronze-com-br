// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  // Enable the Preact renderer to support Preact JSX components.
  renderers: [],
  // files in `public/` will be blindly copied to `public/`
  public: 'public',
  // `dist/` is where the built website will be output to
  dist: 'dist',
  buildOptions: {
    sitemap: true,
    site: 'https://www.carlosbronze.com.br/',
  },
  vite: {
    ssr: {
      external: ["svgo", "@11ty/eleventy-img"],
    },
  },
});
