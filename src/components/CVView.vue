<template>
<div id="corps">
  <div class="gradient-policy font-size">Mes différentes fiches : </div>
  <hr />
  <section>
    <div class="gradient-policy">Mon CV :</div>
    <img src="../assets/cv/AUBRIET-Aurélien-2024-CV-1.png" alt="Image de mon CV" class="cv">
  </section>
  <hr />
</div>
</template>

<style scoped>
#corps {
  text-align: center;
  justify-content: center;
  justify-items: center;
}
section {
  min-height: 120vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  margin-top: -8px;
  flex-direction: column;
}
.cv {
  width: 50%;
  height: 50%;
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
hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
.font-size {
  font-size: 48px;
}
</style>
<script setup>
</script>