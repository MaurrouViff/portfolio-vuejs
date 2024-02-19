<template>
  <div>
  <section class="main-section">
    <div class="features">
      <div class="feature">
        <div class="feature-title"><img alt="image d'étudiant" class="image-icon" src="../assets/images-icon/student-icon.png">Étudiant</div>
        <div class="feature-text">Je suis actuellement étudiant en BTS Sio spécialité SLAM !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img alt="image de développeur" class="image-icon" src="../assets/images-icon/developer-icon.png">Développeur</div>
        <div class="feature-text">J'apprends certains langages de programmation. Mon rêve est de devenir développeur !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/images-icon/tools-icon.png" alt="Image d'outils" class="image-icon">Mes projects</div>
        <div class="feature-text">J'ai fait de nombreux projets, n'hésitez pas à y regarder !</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/images-icon/contact-icon.png" alt="Image de téléphone" class="image-icon">Contact</div>
        <div class="feature-text">N'hésitez pas à me contacter pour avoir des renseignements !</div>
      </div>
    </div>
  </section>
  </div>
</template>
<style scoped>
.features {
  max-width: 1300px;
  display: flex;
}
.features .feature {
  flex: 1 1 340px;
  color: black;
  padding: 25px 30px 35px 58px;
  margin: 0 8px 0 0;
  opacity: 0.9;
  transition: background-color 0.3s, color 0.3s;
  border: 2px solid;
}
.features .feature:hover {
  opacity: 1;
  background-color: black;
  color: white;
}
.features .feature .feature-title {
  font-size: 24px;
  line-height: 1.6;
  letter-spacing: -0.38px;
  margin: 0 0 0 -35px;
  padding: 0 0 20px 35px;
  font-weight: 300;
}
.features .feature .feature-text {
  font-size: 16px;
  letter-spacing: -0.29px;
  line-height: 1.7;
}
.features .feature:hover .image-icon {
  filter: brightness(0) invert(1);
}
.image-icon {
  width: 45px;
  height: 45px;
  padding-right: 20px;
  transition: filter 0.3s;
}
.main-section {
  min-height: 60vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
}
</style>