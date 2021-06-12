<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  meta: [
    { property: 'og:title', content: 'Carlos Bronze' },
    { property: 'og:image', content: '' },
    { name: 'description', content: 'Carlos Bronze\'s Website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: '@carlosbronze' },
  ],
})
</script>
