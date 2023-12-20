<template>
  <div>
    <div class="gradient-policy">
      <h2>Bienvenue ! Je me nomme</h2>
      <h3>AUBRIET Aurélien</h3>
    </div>
    <Cards />

  </div>
</template>

<script>
import Cards from "../Cards.vue";


export default {
  components: {
    Cards
  }
};
</script>

<style>
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

</style>
