const critical = require('critical');

critical.generate({
  inline: true,
  base: 'dist/',
  src: 'index.html',
  target: 'index.html',
  width: 1300,
  height: 900,
  // Extract inlined styles from referenced stylesheets
  extract: true,

  // ignore CSS rules
  ignore: {
    rule: [/html/, /body/],
  },
});