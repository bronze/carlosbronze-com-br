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
  Alpine.data('darkmode', () => ({
    // Define darkmode
    dark:
      localStorage.theme==='dark'||
      (!('theme' in localStorage)&&
        window.matchMedia('(prefers-color-scheme: dark)').matches)||
      document.documentElement.getAttribute('data-theme')==='dark',

    init() {
      // This code will be executed before Alpine
      // initializes the rest of the component.
      // this.theme=this.dark==true? 'dark':'light'
      // this.$watch(this.theme, () => {this.dark==true? 'dark':'light'})
    },

    // Toggle function
    toggleTheme() {
      // https://stackoverflow.com/questions/65942968/storing-and-retrieving-a-theme-in-javascript-from-a-data-attribute
      var targetTheme=document.documentElement.getAttribute('data-theme')==='dark'? 'light':'dark';
      // console.log(targetTheme);
      // https://stackoverflow.com/questions/62913465/how-to-stop-the-window-scrolling-to-the-top-of-the-page-on-my-navbar-toggle
      event.preventDefault();
      if (event.ctrlKey||event.shiftKey) {
        // localStorage.clear();
        localStorage.removeItem('theme');
        sessionStorage.removeItem('konami');
        document.body.classList.remove('konami')
        document.getElementById('duck_cape').classList.add('hidden')
        console.log('localStorage theme cleared');
      }
      else {
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.theme=targetTheme
        // if (window.localStorage.theme!='dark') {
        // if (targetTheme=='dark') {
        //   // document.documentElement.classList.add('dark')
        //   document.documentElement.setAttribute('data-theme', 'dark')
        //   localStorage.theme='dark'
        // } else {
        //   // document.documentElement.classList.remove('dark')
        //   document.documentElement.setAttribute('data-theme', 'light')
        //   window.localStorage.theme='light'
        // }
      }
      this.dark=!this.dark
      this.theme=this.dark==true? 'dark':'light'
      console.log('storage: '+window.localStorage.theme+' | dark: '+this.dark);
    },

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
});

// debug: hideOnClick: false, trigger: 'click',
Alpine.start();
