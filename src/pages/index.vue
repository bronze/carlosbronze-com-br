<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-home class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Carlos Bronze
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">a brief personal page built with <a href="https://github.com/antfu/vitesse"><carbon-campsite class="inline-block " />Vitesse</a> </em>
    </p>

    <div class="py-4" />

  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
