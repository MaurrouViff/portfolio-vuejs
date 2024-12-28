<template>
  <Navbar/>
  <div class="flex-grow">
  <router-view></router-view>
  </div>
  <Pied/>
</template>

<script setup>

import Navbar from "@/components/Navbar.vue";
import Pied from "@/components/Pied.vue";
</script>


