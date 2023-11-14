import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importez votre configuration de routeur

import './assets/main.css';

const app = createApp(App);

// Utilisez le routeur dans votre application
app.use(router);

// Montez l'application sur l'élément avec l'ID 'app'
app.mount('#app');
