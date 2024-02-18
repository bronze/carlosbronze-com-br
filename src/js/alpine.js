// console.log("Alpine Loaded")

import Alpine from 'alpinejs';
import persist from '@alpinejs/persist';
import tippy from 'tippy.js';
import {createPopper} from '@popperjs/core';
import 'tippy.js/dist/tippy.css'; // optional for styling


window.Alpine=Alpine;

Alpine.plugin(persist);

document.addEventListener('alpine:init', () => {
  // Alpine.data('banner', function () {
  //   return {
  //     show: this.$persist(false),
  //     dismissed: this.$persist(false),
  //     dismiss() {
  //       this.show=false;
  //       this.dismissed=true;
  //     },

  //     init() {
  //       if (!this.dismissed) {
  //         setTimeout(() => {
  //           this.show=true;
  //         }, 1500);
  //       }
  //     },
  //   };
  // });
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
        // localStorage.clear();
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
  // Alpine.magic('tooltip', el => message => {
  //   let instance=tippy(el, {theme: 'tomato', content: message, trigger: 'manual'})

  //   instance.show()

  //   setTimeout(() => {
  //     instance.hide()

  //     setTimeout(() => instance.destroy(), 150)
  //   }, 2000)
  // })

  // Directive: x-tooltip
  // Alpine.directive('tooltip', (el, {expression}) => {
  //   tippy(el, {theme: 'tomato', content: expression})
  // })
  Alpine.data('quotes', () => ({
    quotes: [],
    randomQuote: {quote: '', author: ''},
    fetchQuotes() {
      fetch('quotes.json')
        .then(response => response.json())
        .then(data => {
          this.quotes=data;
          this.getRandomQuote();
        });
    },
    getRandomQuote() {
      const randomIndex=Math.floor(Math.random()*this.quotes.length);
      this.randomQuote=this.quotes[randomIndex];
    }
  }))
});

// debug: hideOnClick: false, trigger: 'click',
Alpine.start();
