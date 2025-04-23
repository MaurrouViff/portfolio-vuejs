<script setup>
import { ref } from 'vue'

const menuOuvert = ref(false)

const toggleMenu = () => {
  menuOuvert.value = !menuOuvert.value
}
</script>

<template>
  <div>
    <header>
      <nav class="flex items-center justify-between min-h-[60px] px-4">
        <!-- Logo ou Titre -->
        <div class="text-xl font-bold">Portfolio</div>

        <!-- Bouton burger -->
        <button @click="toggleMenu" class="lg:hidden focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Menu navigation Desktop -->
        <ul class="hidden lg:flex items-center gap-4">
          <li><router-link to="/accueil" class="nav-link">Accueil</router-link></li>
          <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
          <li><router-link to="/programmation" class="nav-link">Langages</router-link></li>
          <li><router-link to="/outils" class="nav-link">Outils</router-link></li>
          <li><router-link to="/a-propos" class="nav-link">À propos</router-link></li>
        </ul>
      </nav>

      <!-- Menu mobile -->
      <ul v-if="menuOuvert" class="flex flex-col items-start gap-2 p-4 lg:hidden bg-white shadow-md">
        <li><router-link to="/accueil" class="nav-link w-full">Accueil</router-link></li>
        <li><router-link to="/contact" class="nav-link w-full">Contact</router-link></li>
        <li><router-link to="/langages" class="nav-link w-full">Langages</router-link></li>
        <li><router-link to="/outils" class="nav-link w-full">Outils</router-link></li>
        <li><router-link to="/a-propos" class="nav-link w-full">À propos</router-link></li>
      </ul>
      <hr class="border-0 bg-black h-2.5">
    </header>
  </div>
</template>

<style scoped>
.nav-link {
  @apply rounded outline-2 outline-offset-0 outline-black px-4 py-2 hover:bg-black hover:text-white transition duration-300;
}
</style>
