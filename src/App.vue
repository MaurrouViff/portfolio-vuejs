<template>
  <Navbar/>
  <div class="flex-grow">
  <router-view></router-view>
  </div>

</template>

<script setup>

import Navbar from "@/components/Navbar.vue";
</script>


