<template>
  <Header />
    <router-view></router-view>




</template>

<script>
import Header from "./components/header.vue";


export default {
  components: {
    Header
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
.gradient-policy {
  font-size: 30px;
  letter-spacing: -0.72px;
  line-height: 1.3;
  background: linear-gradient(45deg, #316aa4 33%, #7B6BB6 50%, #CE6CC9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  text-align: center;
}
.link-button {
  color: #fff;
  padding: 20px 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  opacity: 0.8;
}
.link-button:hover {
  opacity: 1;
}
li {
  list-style-type: none;
}
.navbar {
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-right: 50px;
}
.hr-gradient {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
</style>
