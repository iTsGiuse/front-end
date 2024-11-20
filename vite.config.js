import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';


export default defineConfig({
  base: '/front-end/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      injectManifest: true,
      manifest: {
        name: 'Dracarys',
        short_name: 'Dracarys',
        start_url: '/da',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4DBA87',
        icons: [
          {
            src: 'src/assets/images/Logo/Logo-192x192.png',
            sizes: '192x192',
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: 'src/assets/images/Logo/Logo-512x512.png',
            sizes: '512x512',
            type: "image/png",
            purpose: "maskable"
          }
        ],
      },
    }),
  ],
})
