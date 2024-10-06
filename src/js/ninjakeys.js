// Function to set the theme and persist in localStorage
function setTheme(theme) {
  localStorage.setItem('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// Initialize ninja-keys menu
function initializeNinjaMenu() {
  const ninja=document.querySelector('ninja-keys');

  const menuData=[
    {
      id: 'Home',
      title: 'Home',
      handler: () => {
        window.location.href='/'; // Redireciona para a URL raiz
      },
    },
    {
      id: 'Toggle Theme',
      title: 'Toggle Dark Mode',
      hotkey: 'ctrl+D',
      handler: () => {
        Alpine.store('darkMode').toggle() // Chama o store do Alpine diretamente
        return {keepOpen: true};
      },
    },
    {
      id: 'Theme',
      title: 'Change theme...',
      children: ['Light Theme', 'Dark Theme', 'System Theme'],
      handler: () => {
        ninja.open({parent: 'Theme'});
        return {keepOpen: true};
      },
    },
    {
      id: 'Light Theme',
      title: 'Change theme to Light',
      parent: 'Theme',
      handler: () => {
        setTheme('light');
        return {keepOpen: true};
      },
    },
    {
      id: 'Dark Theme',
      title: 'Change theme to Dark',
      parent: 'Theme',
      handler: () => {
        setTheme('dark');
        return {keepOpen: true};
      },
    },
  ];

  // Save the menu data in localStorage so it persists between page reloads
  localStorage.setItem('ninjaMenuData', JSON.stringify(menuData));
  ninja.data=menuData;
}
initializeNinjaMenu();
// On page load, retrieve the menu data and apply it
document.addEventListener('astro:before-swap', ev => {

  // Load persisted theme
  const savedTheme=localStorage.getItem('theme')||'light';
  setTheme(savedTheme);

  // Initialize the ninja-keys menu
  initializeNinjaMenu();
})
document.addEventListener('astro:after-swap', ev => {
  // Load persisted theme
  const savedTheme=localStorage.getItem('theme')||'light';
  setTheme(savedTheme);

  // Initialize the ninja-keys menu
  initializeNinjaMenu();
})
document.addEventListener('astro:page-load', ev => {
  // Load persisted theme
  const savedTheme=localStorage.getItem('theme')||'light';
  setTheme(savedTheme);

  // Initialize the ninja-keys menu
  initializeNinjaMenu();
})
