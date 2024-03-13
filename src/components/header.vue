<template>
  <div>
    <header>
      <nav class="navbar">
        <ul class="nav-menu">
          <li class="nav-item"><h1>Portfolio</h1></li>
          <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
          <li class="nav-item"><router-link to="/projects" class="link-button">PROJETS</router-link></li>
          <li class="nav-item"><router-link to="/outils" class="link-button">LOGICIELS</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="link-button">CONTACT</router-link></li>
          <li class="nav-item"><router-link to="/cv" class="link-button">FICHES</router-link></li>
        </ul>
      </nav>
    </header>
    <hr class="hr-gradient">
  </div>
</template>

<style scoped>
.link-button {
  color: #ffffff;
  padding: 20px 30px;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  background-color: #186785FF;
  transition: background-color 0.3s, color 0.3s;
}
.link-button:hover {
  background-color: #007eff;
  color: #000000;
}
.navbar {
  min-height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  background-color: #000000;
}
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
  margin-right: 50px;
}
li {
  list-style-type: none;
}
header {
  text-align: center;
  justify-content: center;
  background-color: #ffffff;
}
.hr-gradient {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
  margin-top: -4px
}
h1 {
  color: #ffffff;
  font-size: 32px;
}
.nav-item {
  list-style-type: none;
}
</style>