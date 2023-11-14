// router.js

import { createRouter, createWebHistory } from 'vue-router';

// Importez les composants que vous souhaitez utiliser dans vos routes
import Accueil from './components/Accueil.vue';

// Définissez vos routes
const routes = [
    { path: '/', component: Accueil }
];

// Créez une instance du routeur
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
