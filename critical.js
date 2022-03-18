const critical = require('critical');
critical.generate({
  inline: true,
  base: 'dist/',
  src: 'index.html',
  width: 1300,
  height: 900,
});