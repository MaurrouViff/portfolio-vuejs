<template>
  <div id="corps">
    <div class="gradient-policy">Ce projet permet de visiter des restaurants,</div><br />
    <div class="gradient-policy">De mettre des notes, des commentaires,</div><br />
    <div class="gradient-policy">Et de modifier son profil.</div>
    <div class="gradient-policy">Voici le lien github : </div>
    <a href="https://github.com/MaurrouViff/score_resto" class="link-to-page">Cliquez ici</a>
    <hr />
    <section class="main-section">
      <img src="../assets/images-projects/subimages-project/score-resto/Image-1.png" alt="Première image du projet score resto" class="photo">
      <img src="../assets/images-projects/subimages-project/score-resto/Image-2.png" alt="Deuxième image du projet score resto" class="photo">
      <img src="../assets/images-projects/subimages-project/score-resto/Image-3.png" alt="Troisième image du projet score resto" class="photo">
      <img src="../assets/images-projects/subimages-project/score-resto/Image-4.png" alt="Quatrième image du projet score resto" class="photo">
    </section>
    <hr />
    <section class="section">
      <div class="gradient-policy font-size">Compétences validées via ce projet :</div>
      <a href="/competences-score-resto.pdf" class="link-to-page">Télécharger les compétences</a>
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

.section {
  min-height: 30vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  flex-direction: column;
}

.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>
