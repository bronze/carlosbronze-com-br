const postcssPresetEnv=require('postcss-preset-env');


// postcss.config.js
module.exports={
  plugins: {
    'postcssPresetEnv': {},
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  }
}
