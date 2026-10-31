/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import './index.css';
import MainPage from "./views/MainPage.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import PublicBestiaries from "./views/PublicBestiaries.vue";
import BestiaryPage from "./views/BestiaryPage.vue";

console.log(
  '👋 This message is being logged by the renderer process, included via Vite',
)

const routes = [
    { path: '/', component: MainPage },
    { path: '/public-bestiaries', component: PublicBestiaries },
    { path: '/public-bestiaries/:id', component: BestiaryPage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app');