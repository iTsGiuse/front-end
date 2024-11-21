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
                    "src": "/front-end/assets/images/pwa/Logo-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any"
                  },
                  {
                    "src": "/front-end/assets/images/pwa/Logo-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "maskable"
                  }
                ],
      "screenshots": [
                      {
                        "src": "/front-end/assets/images/pwa/Screen-desktop.png",
                        "sizes": "1280x720",
                        "type": "image/png",
                        "form_factor": "wide"
                      },
                      {
                        "src": "/front-end/assets/images/pwa/Screen-mobile.png",
                        "sizes": "720x1280",
                        "type": "image/png",
                        "form_factor": "narrow"
                      }
                    ]
                  },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*\.(?:png|jpg|jpeg|svg|gif|css|js)$/, 
            handler: 'CacheFirst', 
            options: {
              cacheName: 'images-and-assets',
              expiration: {
                maxEntries: 50, 
                maxAgeSeconds: 30 * 24 * 60 * 60, 
              },
            },
          },
        ],
      },
    }),
  ],
});
