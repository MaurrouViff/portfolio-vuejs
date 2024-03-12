<template>
  <div id="corps">
    <div class="gradient-policy">Ce projet permet de tirer au hasard des élèves</div><br />
    <div class="gradient-policy">De mettre des notes, de mettre absent</div><br />
    <div class="gradient-policy">Et de supprimer et ajouter des élèves et des classes</div>
    <hr />
    <section>

    </section>
  </div>
</template>
<style scoped>
#corps {
  text-align: center;
  justify-items: center;
  justify-content: center;
}
section {
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


</style>
<script setup>
</script>