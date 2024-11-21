import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/front-end/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        "name": "Dracarys",
        "short_name": "Dracarys",
        "start_url": "/front-end/",
        "display": "standalone",
        "background_color": "#ffffff",
        "lang": "en",
        "scope": "/front-end/",
        "theme_color": "#4DBA87",
        "id": "/front-end/",
        "icons": [
                  {
                    "src": "/front-end/assets/images/Logo/web-app-manifest-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any"
                  },
                  {
                    "src": "/front-end/assets/images/Logo//web-app-manifest-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                  }
                ],
      "screenshots": [
                  {
                    "src": "/front-end/assets/images/Logo/screen1.png",
                    "sizes": "1080x1920",
                    "type": "image/png",
                    "form_factor": "wide"
                  },
                ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.(?:png|jpg|jpeg|svg|gif|css|js)$/, // Regole per le risorse
            handler: 'CacheFirst', // Strategie di caching
            options: {
              cacheName: 'images-and-assets',
              expiration: {
                maxEntries: 50, // Numero massimo di file nella cache
                maxAgeSeconds: 30 * 24 * 60 * 60, // Scadenza di 30 giorni
              },
            },
          },
        ],
      },
    }),
  ],
});
