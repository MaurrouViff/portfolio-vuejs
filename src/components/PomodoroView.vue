<template>
  <div id="corps">
    <div class="gradient-policy">Ce projet permet d'utiliser un chronomètre</div>
    <section class="main-section">
      <img src="../assets/images-projects/Image-pomodoro.png" alt="Image du pomodoro" class="photo">
    </section>
  </div>
</template>
<style scoped>
#corps {
  text-align: center;
  justify-content: center;
  justify-items: center;
}
.main-section {
  min-height: 60vh;
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

.photo {
  width: 40%;
  height: 40%;
}

hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
</style>
<script setup>
</script>