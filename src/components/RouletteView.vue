<template>
  <div id="corps">
    <div class="gradient-policy">Ce projet permet de sélectionner un élève dans une classe,</div><br />
    <div class="gradient-policy">et permet de mettre une note et de marquer son passage.</div>
    <hr />
    <img src="../assets/images-projects/subimages-project/roulette-vuejs/roulette_vuejs_screen_1.png" alt="Première image du projet roulette vuejs" class="photo">
    <hr />
    <img src="../assets/images-projects/subimages-project/roulette-vuejs/roulette_vuejs_screen_2.png" alt="Deuxième image du projet roulette vuejs" class="photo">
    <hr />
    <img src="../assets/images-projects/subimages-project/roulette-vuejs/roulette_vuejs_screen_3.png" alt="Troisième image du projet roulette vuejs" class="photo">
    <hr />
    <section>
      <div class="gradient-policy font-size">Compétences validées via ce projet :</div>
      <a href="../assets/fichier/compétences-projet-roulette.pdf" download="compétences-projet-roulette.pdf" class="link-to-page">Télécharger les compétences</a>
    </section>
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
.photo {
  width: 40%;
  height: 40%;
}
hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
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
.photo {
  width: 40%;
  height: 40%;
}
.font-size {
  font-size: 24px;
}

.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>