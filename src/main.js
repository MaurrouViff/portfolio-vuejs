import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/output.css';

// Liste des composants
import Accueil from './pages/Accueil.vue';
import Contact from "@/pages/Contact.vue";
import About from "@/pages/About.vue";




// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/contact', component: Contact },
    { path: '/a-propos', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
