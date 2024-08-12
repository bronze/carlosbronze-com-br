import './alpine.js'
export function toggleTheme() {
  {
    this.$store.app.isDark=!this.$store.app.isDark;
  }
};

import KonamiCode from '~/js/konamicode.js'
// In your script file
KonamiCode.init(undefined, 3000) // Reset after 3 seconds of inactivity


if (window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log('User prefers dark mode');
} else {
  console.log('User does not prefer dark mode');
}
