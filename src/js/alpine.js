// console.log("Alpine Loaded")

import Alpine from 'alpinejs';
// import persist from '@alpinejs/persist';
import tippy from 'tippy.js';
import {createPopper} from '@popperjs/core';
import 'tippy.js/dist/tippy.css'; // optional for styling


window.Alpine=Alpine;

// Alpine.plugin(persist);

document.addEventListener('alpine:init', () => {
  Alpine.data('windowLayout', () => ({
    // https://www.henriksommerfeld.se/alpinejs-benefits-and-limitations/
    keyboardNavigation: false,
  }))
  Alpine.store('darkMode', {
    init() {
      this.on=localStorage.theme==='dark'||
        (!('theme' in localStorage)&&
          window.matchMedia('(prefers-color-scheme: dark)').matches)||
        document.documentElement.getAttribute('data-theme')==='dark'
      document.documentElement.setAttribute('data-theme', this.on? 'dark':'light')
      this.dark=this.on? true:false
      this.theme=this.on? 'dark':'light'
    },
    toggle() {
      event.preventDefault();
      if (event.ctrlKey||event.shiftKey) {
        localStorage.clear();
        localStorage.removeItem('theme');
        sessionStorage.removeItem('konami');
        sessionStorage.removeItem('visited');
        document.body.classList.remove('konami')
        // document.getElementById('duck_cape').classList.add('hidden')
        console.log('localStorage theme cleared');
        return
      }
      this.on=!this.on
      // https://stackoverflow.com/questions/65942968/storing-and-retrieving-a-theme-in-javascript-from-a-data-attribute
      var targetTheme=this.on? 'dark':'light';
      // console.log(targetTheme);
      // https://stackoverflow.com/questions/62913465/how-to-stop-the-window-scrolling-to-the-top-of-the-page-on-my-navbar-toggle
      document.documentElement.setAttribute('data-theme', targetTheme)
      localStorage.theme=targetTheme
      this.dark=!this.dark
      this.theme=this.on? 'dark':'light'
      // console.log('storage: '+window.localStorage.theme+' | dark: '+this.dark);
    }
  })
  Alpine.bind('PlausibleAnalytics', () => ({
    'data-domain': 'carlosbronze.com.br',
    'event-theme': Alpine.store('darkMode').on? 'Dark':'Light',
    src: '/js/analytics.js',
  }))
  Alpine.bind('isDev', () => ({
    'data-domain': 'carlosbronze.dev',
    'event-theme': Alpine.store('darkMode').on? 'Dark':'Light',
    src: '/js/analytics.js',
  }))
});

// debug: hideOnClick: false, trigger: 'click',
Alpine.start();
