<template>
  <HautDePage />
    <router-view></router-view>




</template>

<script>
import HautDePage from "./components/header.vue";


export default {
  components: {
    HautDePage
  }
};
</script>

<style>

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  background-color: black;
}


li {
  list-style-type: none;
}

.hr-gradient {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
</style>
