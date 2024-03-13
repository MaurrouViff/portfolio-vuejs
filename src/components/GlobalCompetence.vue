<template>
  <div id="corps">
    <div class="gradient-policy">Mes compétences global : </div>
    <a href="../assets/fichier/competences-global.pdf" download="competences-global.pdf" class="link-to-page">Télécharger les compétences</a>
  </div>
</template>
<style scoped>
#corps {
  text-align: center;
  justify-content: center;
  justify-items: center;
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

.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>