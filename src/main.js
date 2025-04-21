import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/output.css';

// Liste des composants
import Accueil from './pages/Accueil.vue';
import Contact from "@/pages/Contact.vue";
import Langages from "@/pages/Langages.vue";
import Outils from "@/pages/Outils.vue";
import About from "@/pages/About.vue";



// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/contact', component: Contact },
    { path: '/langages', component: Langages },
    { path: '/outils', component: Outils },
    { path: '/a-propos', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
