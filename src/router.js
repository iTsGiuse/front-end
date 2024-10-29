import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";

import Home from './pages/Home.vue';
import Eventi from './pages/Eventi.vue';
import Classifica from './pages/Classifica.vue';
import ChiSiamo from './pages/ChiSiamo.vue';
import NewsDettaglio from './pages/NewsDettaglio.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            name: 'home',
            component: Home
        },
        {
            path: '/news/:newsTitle',
            name: 'news',
            component: NewsDettaglio
        },
        {
            path: '/eventi', 
            name: 'eventi',
            component: Eventi
        },
        {
            path: '/classifica', 
            name: 'classifica',
            component: Classifica
        },
        {
            path: '/chi-siamo', 
            name: 'chi-siamo',
            component: ChiSiamo
        },
        {
            path: '/:catchAll(.*)', 
            redirect: '/' 
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return new Promise((resolve) => {
                nextTick(() => {
                    resolve(savedPosition);
                });
            });
        } else {
            return { left: 0, top: 0 };
        }
    }
});

export { router };