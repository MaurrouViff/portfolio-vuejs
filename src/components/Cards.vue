<template>
  <section class="main-section">
    <div class="features">
      <div class="feature">
        <div class="feature-title"><img alt="image d'étudiant" class="image-icon" src="../assets/images-icon/student-icon.png">Étudiant</div>
        <div class="feature-text">Je suis actuellement étudiant en BTS Sio spécialité SLAM.</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img alt="image de développeur" class="image-icon" src="../assets/images-icon/developer-icon.png">Développeur</div>
        <div class="feature-text">J'apprends certains langages de programmation. Mon rêve est de devenir développeur.</div>
      </div>
      <div class="feature">
        <div class="feature-title"><img src="../assets/images-icon/tools-icon.png" alt="Image d'outils" class="image-icon">Mes projects</div>
        <div class="feature-text">J'ai fait de nombreux projets, n'hésitez pas à y regarder !</div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.features {
  max-width: 1300px;
  margin: 100px -180px 0 0;
  display: flex;
}
.features .feature {
  flex: 1 1 340px;
  background: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  padding: 25px 30px 35px 58px;
  margin: 0 8px 0 0;
  opacity: 0.9;
}
.features .feature:hover {
  opacity: 1;
}
.features .feature .feature-title {
  font-size: 24px;
  line-height: 1.6;
  letter-spacing: -0.38px;
  margin: 0 0 0 -35px;
  padding: 0 0 20px 35px;
  font-weight: 300;
  color: white;
}
.features .feature .feature-text {
  font-size: 16px;
  letter-spacing: -0.29px;
  color: white;
  line-height: 1.7;
}
.image-icon {
  width: 45px;
  height: 45px;
  padding-right: 20px;
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