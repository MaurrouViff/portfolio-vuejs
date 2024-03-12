import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

// Liste des composants
import Accueil from './components/pages/Accueil.vue';
import Outils from './components/pages/Outils.vue';
import Projects from './components/pages/Projects.vue';
import Contact from './components/pages/Contact.vue';
import Cv from './components/pages/CV.vue';
import Competences from './components/pages/Competences.vue';
import Roulette from './components/pages/Roulette.vue';
import ScoreResto from './components/pages/ScoreResto.vue';
import RoulettePhp from "./components/pages/RoulettePhp.vue";
import SalonNuances from "./components/pages/SalonNuances.vue";

// Liste des routes
const routes = [
    { path: '/', component: Accueil },
    { path: '/accueil', component: Accueil },
    { path: '/outils', component: Outils },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact},
    { path: '/cv', component: Cv },
    { path: '/competences', component: Competences },
    { path: '/roulette', component: Roulette },
    { path: '/scoreresto', component: ScoreResto },
    { path: '/roulette-php', component: RoulettePhp },
    { path: '/nuances', component: SalonNuances }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);


app.use(router);


app.mount('#app');
