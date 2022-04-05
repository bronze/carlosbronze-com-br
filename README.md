npm i -D astro critical sass tailwindcss @11ty/eleventy-img astro-icon autoprefixer postcss-preset-env
https://hangindev.com/blog/avoid-flash-of-default-theme-an-implementation-of-dark-mode-in-react-app

// wrapped as IIFE to use private variables and functions
(function () {
function setTheme(newTheme) {
document.body.className = newTheme; // "dark" or "light"
window.**theme = newTheme;
window.**onThemeChange(newTheme);
}
// this will be overwritten in our React component
window.**onThemeChange = function () {};
// this will be triggered by our React component
window.**setPreferredTheme = function (newTheme) {
setTheme(newTheme);
try {
localStorage.setItem("theme", JSON.stringify(window.**theme));
} catch (err) {}
};
// detect system theme and monitor for changes
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
darkQuery.addListener(function (event) {
window.**setPreferredTheme(event.matches ? "dark" : "light");
});
let preferredTheme;
// try to get saved theme
try {
preferredTheme = JSON.parse(localStorage.getItem("theme"));
} catch (err) {}
// initialize preferredTheme
setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"));
})();
