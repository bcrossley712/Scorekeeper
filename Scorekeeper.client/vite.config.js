import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' })],
  build: {
    outDir: '../Scorekeeper/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
