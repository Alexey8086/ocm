import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '#app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '#pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '#assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '#api': fileURLToPath(new URL('./src/api', import.meta.url)),
      '#shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
    }
  },
  server: {
    port: 8000,
  },
})
