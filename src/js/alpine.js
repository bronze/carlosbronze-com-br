// console.log("Alpine Loaded")

import Alpine from 'alpinejs';
// import persist from '@alpinejs/persist';
import focus from '@alpinejs/focus'

import tippy from 'tippy.js';
import {createPopper} from '@popperjs/core';
import 'tippy.js/dist/tippy.css'; // optional for styling

import {navigate} from 'astro:transitions/client';
Alpine.plugin(focus)


window.Alpine=Alpine;

// Alpine.plugin(persist);


document.addEventListener('alpine:init', () => {
  Alpine.data('windowLayout', () => ({
    // https://www.henriksommerfeld.se/alpinejs-benefits-and-limitations/
    keyboardNavigation: false,
    init() {
      // Enable keyboard navigation
      this.enableKeyboardNavigation();
    },


    enableKeyboardNavigation() {
      document.addEventListener('keydown', (event) => {
        const activeElement=document.activeElement;
        const isInputField=activeElement.tagName==='INPUT'||activeElement.tagName==='TEXTAREA'||activeElement.tagName==='SELECT'||activeElement.isContentEditable;

        // Só executa o trigger se não estiver em um campo de formulário
        if (!isInputField) {
          // Check if the key pressed is a number from 1 to 9
          if (event.key>='1'&&event.key<='9') {
            const link=document.querySelector(`[data-key='${event.key}']`);
            if (link&&link.href!==window.location.href) {
              let href=link.href;
              navigate(href);
            }
          }

          // Check if 'D' or 'Ctrl+D' is pressed for dark mode toggle
          if (event.key.toLowerCase()==='d') {
            $store.darkMode.toggle();
          }

          if (event.ctrlKey&&event.key.toLowerCase()==='d') {
            $store.darkMode.toggle();
          }
        }
      });
    }


  }));

  Alpine.store('darkMode', {
    on: false,
    init() {
      // Determine the initial theme preference
      const localTheme=localStorage.getItem('theme');
      const systemPrefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;
      const documentTheme=document.documentElement.getAttribute('data-theme')==='dark';

      this.on=localTheme==='dark'||(!localTheme&&(systemPrefersDark||documentTheme));

      // Set the initial theme
      this.updateTheme();
    },
    toggle() {
      event.preventDefault();
      if (event.shiftKey) {
        localStorage.clear();
        localStorage.removeItem('theme');
        sessionStorage.removeItem('konami');
        sessionStorage.removeItem('visited');
        document.body.classList.remove('konami');
        // document.getElementById('duck_cape').classList.add('hidden')
        console.log('localStorage theme cleared');
        return;
      }

      // Toggle the theme
      this.on=!this.on;
      // https://stackoverflow.com/questions/65942968/storing-and-retrieving-a-theme-in-javascript-from-a-data-attribute
      this.updateTheme();
    },
    updateTheme() {
      const targetTheme=this.on? 'dark':'light';
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
      this.theme=targetTheme;
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
