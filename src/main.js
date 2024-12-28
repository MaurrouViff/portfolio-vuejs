import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Liste des composants
import Accueil from './pages/Accueil.vue';
import Contact from "@/pages/Contact.vue";
import Outils from "@/pages/Outils.vue";


// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/contact', component: Contact },
    { path: '/outils', component: Outils },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
