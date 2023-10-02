const postcssPresetEnv=require('postcss-preset-env');


// postcss.config.js
module.exports={
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    'postcssPresetEnv': {},
    autoprefixer: {},
  }
}
