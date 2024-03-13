<template>
  <div id="corps">
    <div class="gradient-policy">Ce projet permet de gérer les compétences des collaborateurs,</div><br />
    <div class="gradient-policy">Et de voir ses compétences, et en attribuer.</div>
    <hr class="hr-gradient">
    <section class="main-section">
      <span>Espace de connexion</span>
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_login.png" alt="Image de connexion" class="photo">
    </section>
    <hr class="hr-gradient">
    <section class="second-section">
      <span>Espace collaborateur</span>
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_collabo_1.png" alt="Première image de l'espace collabo" class="photo">
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_collabo_2.png" alt="Deuxième image de l'espace collabo" class="photo">
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_collabo_3.png" alt="Troisième image de l'espace collabo" class="photo">
    </section>
    <hr class="hr-gradient">
    <section class="third-section">
      <span>Espace RH</span>
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_rh_1.png" alt="Première image de l'espace RH" class="photo">
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_rh_2.png" alt="Deuxième image de l'espace RH" class="photo">
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_rh_3.png" alt="Troisième image de l'espace RH" class="photo">
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_rh_4.png" alt="Quatième image de l'espace RH" class="photo">
      <img src="../assets/images-projects/subimages-project/competences/competence_screen_rh_5.png" alt="Cinquième image de l'espace RH" class="photo">
    </section>
    <hr class="hr-gradient">
    <section class="third-section">
      <div class="gradient-policy font-size">Compétences validées via ce projet :</div>
      <a href="../assets/fichier/compétences-projet-competences.pdf" download="compétences-projet-competences.pdf" class="link-to-page">Télécharger les compétences</a>
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
  margin-top: -8px;
  flex-direction: column;
}
.second-section, .third-section {
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
  margin-bottom: 50px;
}

.hr-gradient {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}

span {
  color: red;
  font-size: 26px;
  margin-bottom: 20px;
}
</style>
<script setup>
</script>