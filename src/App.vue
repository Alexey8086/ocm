<template>
  <the-loader :isLoading="isLoading" />

  <RouterView />
</template>

<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useCharactersStore } from '#app/stores/CharactersStore'
import { TheLoader } from '#shared/ui'

const charactersStore = useCharactersStore()
const isLoading = computed(() => charactersStore.isLoading)

</script>

<style scoped>
</style>