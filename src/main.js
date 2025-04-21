import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './assets/css/output.css';

// Liste des composants
import Accueil from './pages/Accueil.vue';



// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
