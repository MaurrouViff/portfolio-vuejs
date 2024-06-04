<template>
  <div id="corps">
    <section>
      <div class="gradient-policy">Mes attestations de stage de BTS SIO</div>
      <div class="gradient-policy">Ma première : </div>
      <a href="/stage-premiere-annee.pdf" class="link-to-page">Regarder les compétences</a>
      <div class="gradient-policy">Seconde année :</div>
      <a href="/stage-seconde-annee.pdf" class="link-to-page">Regarder les compétences</a>
    </section>
    <hr />
  </div>
</template>

<style scoped>
#corps {
  text-align: center;
  justify-content: center;
  justify-items: center;
}
section {
  min-height: 120vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  margin-top: -8px;
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
hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>