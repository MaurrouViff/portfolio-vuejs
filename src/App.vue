<template>
  <div>
    <h1>My Vue.js App</h1>

    <!-- Utilisation de <router-link> pour naviguer entre les pages -->
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>

    <!-- Utilisation de <router-view> pour afficher les composants de la page correspondante -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  // Le composant App.vue peut rester vide s'il n'y a rien de spécifique à ajouter ici.
};
</script>

<style scoped>
/* Ajoutez des styles spécifiques au composant App.vue si nécessaire */
</style>
