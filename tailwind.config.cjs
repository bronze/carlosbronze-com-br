/** @type {import('tailwindcss').Config} */
const defaultTheme=require("tailwindcss/defaultTheme");
module.exports={
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        accent: "rgb(var(--color-accent) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        default: "rgb(var(--color-default) / <alpha-value>)",
        text: {
          light: "rgb(var(--color-text-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-text-default) / <alpha-value>)",
          dark: "rgb(var(--color-text-dark) / <alpha-value>)",
        },
        background: {
          DEFAULT: "rgb(var(--color-background-default) / <alpha-value>)",
          muted: "rgb(var(--color-background-muted) / <alpha-value>)",
          accent: "rgb(var(--color-background-accent) / <alpha-value>)",
          light: "rgb(var(--color-background-light) / <alpha-value>)",
          dark: "rgb(var(--color-background-dark) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        info: "rgb(var(--color-info) / <alpha-value>)",
        warn: "rgb(var(--color-warn) / <alpha-value>)",
        error: "rgb(var(--color-error) / <alpha-value>)",
        transparent: "transparent",
        current: "currentColor",
      },
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-nord'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
