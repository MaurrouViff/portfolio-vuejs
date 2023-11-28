import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Importez vos composants
import Accueil from './components/pages/Accueil.vue';
import About from './components/pages/About.vue';

const routes = [
    { path: '/', component: Accueil },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

// Utilisez le routeur dans votre application
app.use(router);

// Montez l'application sur l'élément avec l'ID 'app'
app.mount('#app');
