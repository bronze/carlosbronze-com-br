// jampack.config.js

module.exports={
  image: {
    compress: true,
  },
  css: {
    inline_critical_css: true,
    critters: {
      preload: "body",
      allowRules: [/^\:root*/, /[:]\s*root/],
    },
  },
  misc: {
    // prefetch_links: 'in-viewport',
  },
};
