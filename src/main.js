import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Liste des composants
import Accueil from './components/pages/Accueil.vue';
import About from './components/pages/About.vue';
import Outils from './components/pages/Outils.vue';
import Projects from './components/pages/Projects.vue';
import Contact from './components/pages/Contact.vue';

const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/about', component: About },
    { path: '/outils', component: Outils },
    { path: '/projets', component: Projects },
    { path: '/contact', component: Contact},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
