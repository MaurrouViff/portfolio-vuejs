<template>
  <div>
    <header>
      <div class="gradient-policy">
        <h1>Bienvenue sur mon portfolio !</h1>
      </div>
      <nav class="navbar">
        <ul class="nav-menu">
          <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
          <li class="nav-item"><router-link to="/langages" class="link-button">LANGAGES</router-link></li>
          <li class="nav-item"><router-link to="/outils" class="link-button">OUTILS</router-link></li>
          <li class="nav-item"><router-link to="/about" class="link-button">À PROPOS</router-link></li>
        </ul>
      </nav>


    </header>
    <hr class="hr-gradient">


    <router-view></router-view>



  </div>
</template>

<script>
export default {

};
</script>

<style>

body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  background-color: black;
  display: flex;
  flex-direction: column;
}

.gradient-policy {
  font-size: 30px;
  letter-spacing: -0.72px;
  line-height: 1.3;
  background: linear-gradient(45deg, #316aa4 33%, #7B6BB6 50%, #CE6CC9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  text-align: center;
}

.hr-gradient {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  margin: 20px auto;
}
.link-button {
  background: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  opacity: 0.8;
}
.link-button:hover {
  opacity: 1;
}
li {
  list-style-type: none;
}
.navbar {
  min-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-right: 50px;
}
</style>
