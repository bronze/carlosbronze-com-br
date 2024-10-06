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
  Alpine.data('CommandPalette', () => ({

    // Customize Command Palette
    open: false,
    resetOnOpen: true,
    closeOnSelection: true,

    // Add your custom functionality or navigation when an option is selected
    optionSelected() {
      // console.log(this.highlightedOption);
    },

    // Available options (id and label are required)
    options: [
      {
        id: 1,
        label: 'New file',
        command: 'new-file',
        icon: '',
        shortcut: 'N',
      },
      {
        id: 2,
        label: 'New folder',
        command: 'new-folder',
        icon: '',
        shortcut: 'F',
      },
      {
        id: 3,
        label: 'New project',
        command: 'new-project',
        icon: '',
        shortcut: 'P',
      },
      {
        id: 4,
        label: 'Archive project',
        command: 'archive-project',
        icon: '',
        shortcut: 'A',
      },
      {
        id: 5,
        label: 'Format code',
        command: 'format-code',
        icon: '',
        shortcut: 'Y',
      },
    ],

    // Helper variables
    modifierKey: '',
    filterTerm: '',
    filterResults: [],
    highlightedOption: null,
    highlightedIndex: -1,
    enableMouseHighlighting: true,

    // Initialization
    init() {
      if (this.open) {
        this.openCommandPalette();
      }

      // Initialize filter results array
      this.filterResults=this.options;

      // Set the modifier key based on platform
      this.modifierKey=/mac/i.test(navigator.userAgentData? navigator.userAgentData.platform:navigator.platform)? '⌘':'Ctrl';
    },

    // Open Command Palette
    openCommandPalette() {
      if (this.resetOnOpen) {
        this.filterTerm='';
        this.highlightedOption=null;
        this.highlightedIndex=-1;
        this.filterResults=this.options;
      }

      this.open=true;

      $nextTick(() => {
        // Focus filter input
        $focus.focus($refs.elFilter);
      });
    },

    // Close Command Palette
    closeCommandPalette() {
      this.open=false;

      $nextTick(() => {
        // Focus toggle button
        $focus.focus($refs.elToggleButton);
      });
    },

    // Enable mouse interaction
    enableMouseInteraction() {
      this.enableMouseHighlighting=true;
    },

    // Filter functionality
    filter() {
      if (this.filterTerm==='') {
        this.filterResults=this.options;
      } else {
        this.filterResults=this.options.filter((option) => {
          return option.label.toLowerCase().includes(this.filterTerm.toLowerCase());
        });
      }

      // Refresh highlighted array index (the results have been updated)
      if (this.filterResults.length>0&&this.highlightedOption) {
        this.highlightedIndex=this.filterResults.findIndex((option) => {
          return option.id===this.highlightedOption.id;
        });
      }
    },

    // Set an option as highlighted
    setHighlighted(id, mode) {
      if (id===null) {
        this.highlightedOption=null;
        this.highlightedIndex=-1;
      } else if (this.highlightedOption?.id!=id&&(mode==='keyboard'||(mode==='mouse'&&this.enableMouseHighlighting))) {
        this.highlightedOption=this.options.find(options => options.id===id)||null;

        // Set highlighted index of filter results
        if (mode==='mouse'&&this.enableMouseHighlighting) {
          this.highlightedIndex=this.filterResults.findIndex((option) => {
            return option.id===id;
          });
        } else {
          // We are in keyboard mode, disable mouse navigation
          this.enableMouseHighlighting=false;

          // Scroll listbox to make the highlighted element visible
          $refs.elListbox.querySelector('li[data-id=\''+id+'\']').scrollIntoView({block: 'nearest'});
        }
      }
    },

    // Check if the given id is the highlighted one
    isHighlighted(id) {
      return id===this.highlightedOption?.id||false;
    },

    // Navigate results functionality
    navigateResults(mode) {
      if (this.filterResults.length>0) {
        const maxIndex=this.filterResults.length-1;

        if (mode==='first') {
          this.highlightedIndex=0;
        } else if (mode==='last') {
          this.highlightedIndex=maxIndex;
        } else if (mode==='previous') {
          if (this.highlightedIndex>0&&this.highlightedIndex<=maxIndex) {
            this.highlightedIndex--;
          } else if (this.highlightedIndex===-1) {
            this.highlightedIndex=0;
          }
        } else if (mode==='next') {
          if (this.highlightedIndex>=0&&this.highlightedIndex<maxIndex) {
            this.highlightedIndex++;
          } else if (this.highlightedIndex===-1) {
            this.highlightedIndex=0;
          }
        }

        if (!this.filterResults[this.highlightedIndex]?.id) {
          this.highlightedIndex=0;
        }

        this.setHighlighted(this.filterResults[this.highlightedIndex].id, 'keyboard');
      }
    },

    // On option selected
    onOptionSelected() {
      if (this.highlightedOption!=null) {
        this.optionSelected();

        if (this.closeOnSelection) {
          this.closeCommandPalette();
        }
      }
    },
  }));
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
        const isInputField=activeElement.tagName==='INPUT'||
          activeElement.tagName==='TEXTAREA'||
          activeElement.tagName==='SELECT'||
          activeElement.isContentEditable;

        // Disable keyboard interaction if the user is in an input field
        if (isInputField) {
          return;
        }

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
          Alpine.store.darkMode.toggle();
        }
        if (event.ctrlKey&&event.key.toLowerCase()==='d') {
          Alpine.store.darkMode.toggle();
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
