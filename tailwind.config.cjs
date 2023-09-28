/** @type {import('tailwindcss').Config} */
const defaultTheme=require("tailwindcss/defaultTheme");
const svgToDataUri=require('mini-svg-data-uri')
const {default: flattenColorPalette}=require('tailwindcss/lib/util/flattenColorPalette')

module.exports={
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      // https://youtu.be/1HREvonfqhY?si=7laULp0iDXKHMczk&t=46
      colors: {
        default: "rgb(var(--color-default) / <alpha-value>)",
        inverted: "rgb(var(--color-inverted) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        primary: {
          lighter: "rgb(var(--color-primary-lighter) / <alpha-value>)",
          light: "rgb(var(--color-primary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-primary-default) / <alpha-value>)",
          dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
          darker: "rgb(var(--color-primary-darker) / <alpha-value>)",
        },
        secondary: {
          lighter: "rgb(var(--color-secondary-lighter) / <alpha-value>)",
          light: "rgb(var(--color-secondary-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-secondary-default) / <alpha-value>)",
          dark: "rgb(var(--color-secondary-dark) / <alpha-value>)",
          darker: "rgb(var(--color-secondary-darker) / <alpha-value>)",
        },
        text: {
          lighter: "rgb(var(--color-text-lighter) / <alpha-value>)",
          light: "rgb(var(--color-text-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-text-default) / <alpha-value>)",
          dark: "rgb(var(--color-text-dark) / <alpha-value>)",
          darker: "rgb(var(--color-text-darker) / <alpha-value>)",
        },
        background: {
          lighter: "rgb(var(--color-background-lighter) / <alpha-value>)",
          light: "rgb(var(--color-background-light) / <alpha-value>)",
          DEFAULT: "rgb(var(--color-background-default) / <alpha-value>)",
          dark: "rgb(var(--color-background-dark) / <alpha-value>)",
          darker: "rgb(var(--color-background-darker) / <alpha-value>)",
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
      fontSize: {
        xs: ['0.75rem', {lineHeight: '1rem'}],
        sm: ['0.875rem', {lineHeight: '1.25rem'}],
        base: ['1rem', {lineHeight: '1.5rem'}],
        lg: ['1.125rem', {lineHeight: '1.75rem'}],
        xl: ['1.25rem', {lineHeight: '1.75rem'}],
        '2xl': ['1.5rem', {lineHeight: '2rem'}],
        '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
        '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
        '5xl': ['3rem', {lineHeight: '1'}],
        '6xl': ['3.75rem', {lineHeight: '1'}],
        '7xl': ['4.5rem', {lineHeight: '1'}],
        '8xl': ['6rem', {lineHeight: '1'}],
        '9xl': ['8rem', {lineHeight: '1'}],
      },
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        mono: ["Fira Code VF", ...defaultTheme.fontFamily.mono],
        source: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        'nunito': ["Nunito Variable", ...defaultTheme.fontFamily.sans],
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
        fontSizeMin: 1, // 1.125rem === 18px
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
        'xs': [-2, 1.5],
        'sm': [-1, 1.5],
        'base': [0, 1.5],
        'lg': [1, 1.5],
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
    function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'bg-grid': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
      )

      matchUtilities(
        {
          highlight: (value) => ({boxShadow: `inset 0 1px 0 0 ${value}`}),
        },
        {values: flattenColorPalette(theme('backgroundColor')), type: 'color'}
      )
    },
  ],
  variants: {
    fluidType: ['responsive']
  }
};
