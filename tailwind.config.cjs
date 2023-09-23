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
          muted: "rgb(var(--color-text-muted) / <alpha-value>)",
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
      // typography: ({theme}) => {
      //   return {
      //     DEFAULT: {
      //       css: {
      //         '--tw-prose-headings': 'var(--color-text-default)', // opacity
      //         '--tw-prose-body': 'var(--color-text-default)',
      //         '--tw-prose-links': 'var(--color-text-default)',// opacity
      //         a: {
      //           // change anchor color and on hover
      //           // color: '#03989E',
      //           // color: 'rgb(var(--color-primary) / 1)',
      //           // https://stackoverflow.com/questions/72831003/tailwind-custom-theme-color-opacity-not-being-applied
      //           // https://tailwindcss.com/blog/tailwindcss-v3-1#easier-css-variable-color-configuration
      //           // color: withOpacity('--color-accent'),
      //           '&:hover': { // could be any. It's like extending css selector
      //             // color: '#03989E',
      //             color: 'rgb(var(--color-primary) / 1)',
      //             // 'color': 'var(--color-primary)',
      //             // color: withOpacity('--color-primary'),
      //             // fill: withOpacity('--color-primary'),
      //           },
      //         },
      //       }
      //     },
      //   }
      // },
      // fontSize: {
      //   '2xl': ['1.5rem', {
      //     lineHeight: '2rem',
      //     letterSpacing: '-0.01em',
      //     fontWeight: '500',
      //   }],
      //   '3xl': ['1.875rem', {
      //     lineHeight: '2.25rem',
      //     letterSpacing: '-0.02em',
      //     fontWeight: '700',
      //   }],
      // },
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
    require('tailwindcss-fluid-type')({
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: 'f', // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        'xs': [-2, 1.6],
        'sm': [-1, 1.6],
        'base': [0, 1.6],
        'lg': [1, 1.6],
        'xl': [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
        '12xl': [12, 1],
      },
    }),
  ],
  variants: {
    fluidType: ['responsive']
  }
};
