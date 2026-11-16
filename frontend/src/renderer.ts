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
import MyBestiares from "./views/MyBestiares.vue";
import BestiaryPage from "./views/BestiaryPage.vue";
import MonsterPage from "./views/MonsterPage.vue";

const routes = [
    { path: '/', component: MainPage },
    { path: '/my-bestiaries', component: MyBestiares },
    { path: '/my-bestiaries/:bestiaryId', component: BestiaryPage },
    { path: '/my-bestiaries/:bestiaryId/:monsterId', component: MonsterPage },
]

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app');