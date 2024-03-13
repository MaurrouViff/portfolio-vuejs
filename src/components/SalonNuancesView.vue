<template>
  <div id="corps">
    <div class="gradient-policy">Site vitrine du salon de coiffure "Salon Nuances"</div><br />
    <div class="gradient-policy">Lien : </div><br />
    <a href="https://salon-nuances.vercel.app/#/" class="blue-btn">Cliquez ici</a>
    <hr />
    <section>
      <div class="gradient-policy font-size">Compétences validées via ce projet :</div>
      <a href="../assets/fichier/compétences-salon-nuances.pdf" download="compétences-salon-nuances.pdf" class="link-to-page">Télécharger les compétences</a>
    </section>
  </div>
</template>

<style scoped>
#corps {
  text-align: center;
  justify-content: center;
  justify-items: center;
}
.blue-btn {
  padding: 15px 40px;
  background: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  color: #fff;
  text-align: center;
  border-radius: 2px;
  opacity: 0.8;
  transition: all 0.3s ease 0s;
  text-decoration: none;
  margin-top: 10px;
}
.blue-btn:hover {
  opacity: 1;
}
.gradient-policy {
  font-size: 24px;
  letter-spacing: -0.72px;
  line-height: 1.3;
  background: linear-gradient(45deg, #316aa4 33%, #7B6BB6 50%, #CE6CC9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-weight: 600;
  text-align: center;
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
hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  margin-top: 50px;
}

.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>
