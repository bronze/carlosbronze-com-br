import './alpine.js'
export function toggleTheme() {
  {
    this.$store.app.isDark=!this.$store.app.isDark;
  }
};
