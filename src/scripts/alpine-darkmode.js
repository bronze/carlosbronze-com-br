// Alpine data
document.addEventListener("alpine:init", () => {
  Alpine.data("darkmode", () => ({
    // Define darkmode
    dark: localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),

    // Toggle function
    toggleTheme() {
      if (window.localStorage.theme != "dark") {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundColor = "";
        window.localStorage.theme = null;
      }
      this.dark = !this.dark;
      // console.log('storage: ' + window.localStorage.theme + ' | dark: ' + this.dark);
    },

    // Get values on init
    init() {
      if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark"; // Force a dark value on first login without preset localstorage to avoid bugs on checkbox checked
        this.dark = true;
        // console.log('init storage: ' + window.localStorage.theme + ' | dark: ' + this.dark);
      } else {
        document.documentElement.classList.remove("dark");
        this.dark = false;
        // console.log('init storage: ' + window.localStorage.theme + ' | dark: ' + this.dark);
      }
      // console.log('storage: ' + window.localStorage.theme + ' | dark: ' + this.dark);
    },
  }));
});