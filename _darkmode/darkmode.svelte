<script lang="ts">
  // https://stackoverflow.com/questions/73341205/why-does-the-icon-in-this-astro-svelte-component-flicker-on-refresh
  import { onMount } from "svelte";
  let theme = localStorage.getItem('theme') ?? 'light';
  let flag = false;
  onMount(()=>{
    flag = true
  })
  $: if (flag) {
    if ( theme === 'dark') {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }

  const handleClick = () => {
    theme = (theme === "light" ? "dark" : "light");
  };
</script>

<button on:click={handleClick}>{theme === "dark" ? "🌕" : "🌑"}</button>
