import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { createMetaManager } from 'vue-meta';

// Register the service worker if available
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/front-end/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrato:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registrazione fallita:', error);
      });
  });
}


createApp(App)
  .use(router)
  .use(createMetaManager()) 
  .mount('#app');
