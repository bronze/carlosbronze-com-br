// jampack.config.js

module.exports={
  image: {
    compress: true,
  },
  css: {
    inline_critical_css: false,
    critters: {
      preload: "body",
      includeSelectors: [/^\:root*/, /[:]\s*root/],
    },
  },
};
