<template>
  <div>
    <section class="presentation-section">
      <div class="gradient-policy">Bonjour, je me nomme</div>
      <div class="gradient-policy" id="font-size">AUBRIET Aurélien</div>
      <p>Je suis un jeune étudiant dans le secteur du développement informatique,</p>
      <p>Je connais divers langages comme PHP ou JavaScript,</p>
      <p>Ainsi que certains framework comme <a href="https://symfony.com/" class="link-to-page">Symfony</a> et <a href="https://vuejs.org/" class="link-to-page">VueJs</a></p>

    </section>
    <hr>
  </div>
</template>
<style scoped>
.presentation-section {
  min-height: 30vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  flex-direction: column;
}
.gradient-policy {
  font-size: 34px;
  letter-spacing: -0.72px;
  line-height: 1.3;
  background: linear-gradient(45deg, #316aa4 33%, #7B6BB6 50%, #CE6CC9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: 600;
  text-align: center;
}
span {
  color: red;
  font-size: 38px;
}
#font-size {
  font-size: 48px;
}

hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
p {
  color: black;
  font-size: 22px;
}
.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>
<script setup>
</script>