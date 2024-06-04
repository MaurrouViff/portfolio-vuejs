<template>
  <div id="corps">
    <div class="gradient-policy">Ce projet permet de tirer au hasard des élèves</div><br />
    <div class="gradient-policy">De mettre des notes, de mettre absent</div><br />
    <div class="gradient-policy">Et de supprimer et ajouter des élèves et des classes</div>
    <div class="gradient-policy">Voici le lien github : </div><a href="https://github.com/MaurrouViff/Projet-Roulette" class="link-to-page">Cliquez ici</a>
    <hr />
    <img src="../assets/images-projects/subimages-project/roulette-php/premiere-roulette-php.png" alt="Première photo de roulette php" class="photo">
    <hr />
    <img src="../assets/images-projects/subimages-project/roulette-php/seconde-roulette-php.png.png" alt="Deuxième photo de roulette php" class="photo">
    <hr />
    <section>
    <div class="gradient-policy font-size">Compétences validées via ce projet :</div>
      <a href="/competences-projet-roulette.pdf" class="link-to-page">Télécharger les compétences</a>
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
