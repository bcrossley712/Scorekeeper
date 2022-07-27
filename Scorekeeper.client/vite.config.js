import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    registerType: 'autoUpdate',
    includeAssets: ['/public/img/icons/favicon-32x32.png', '/public/img/apple-touch-icon.png', '/public/img/safari-pinned-tab.svg'],
    manifest: {
      name: 'Scorekeeper',
      short_name: 'Scorekeeper',
      description: 'Card game scorekeeper',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/public/img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: '/public/img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    }
  })],
  build: {
    outDir: '../Scorekeeper/client',
    sourcemap: false
  },
  server: {
    port: 8080
  }
})
