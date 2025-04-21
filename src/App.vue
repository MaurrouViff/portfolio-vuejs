<template>
  <div>
    <HautDePage/>
    <div class="grow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>

import HautDePage from "@/components/HautDePage.vue";
</script>