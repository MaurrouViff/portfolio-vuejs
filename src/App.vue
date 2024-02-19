<template>
  <HautDePage />
  <div class="container">
    <router-view></router-view>
  </div>
  <Pied />
</template>

<script>
import HautDePage from "./components/header.vue";
import Pied from "./components/Pied.vue";

export default {
  components: {
    HautDePage,
    Pied
  }
};
</script>

<style>

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.container {
  flex-grow: 1;
}
</style>
