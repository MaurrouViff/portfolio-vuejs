<template>
  <div>
    <section class="presentation-section">
      <div class="gradient-policy">Bonjour, je me nomme</div>
      <div class="gradient-policy" id="font-size">AUBRIET Aurélien</div>
      <div class="gradient-policy font-size">Je suis un jeune étudiant dans le secteur du développement informatique,</div>
      <div class="gradient-policy font-size">Je connais divers langages comme :</div>
      <p>
        <a href="https://www.php.net/"><img src="../assets/images/new-php-logo.svg" alt="Image de php" class="link-to-page"></a>
        <a href="https://www.javascript.com/"><img src="../assets/images/Javascript.png" alt="Image de JavaScript" class="link-to-page"></a>
      </p>
      <div class="gradient-policy font-size">Ainsi que certains framework comme :</div>
      <p>
        <a href="https://symfony.com/"><img src="../assets/images/symfony_black_03.svg" alt="Image de symfony" class="link-to-page"></a>
        <a href="https://vuejs.org/"><img src="../assets/images/Vuejs.png" alt="Image de vuejs" class="link-to-page"></a>
      </p>
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

.font-size {
  font-size: 22px;
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
  width: 255px;
  height: 255px;
}
</style>
<script setup>
</script>