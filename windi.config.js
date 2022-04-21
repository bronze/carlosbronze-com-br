import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  attributify: true,
  darkMode: class, // or 'media' or 'class'
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {},
  },
  extract: {
    include: ['./src/**/*.{vue,html,jsx,tsx,astro}'],
    exclude: ['node_modules', '.git'],
  },
  plugins: [],
});
