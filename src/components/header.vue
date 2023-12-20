<template>
  <div>
    <header>
      <nav class="navbar">
        <ul class="nav-menu">
          <li class="nav-item"><router-link to="/accueil" class="link-button">ACCUEIL</router-link></li>
          <li class="nav-item"><router-link to="/projects" class="link-button">PROJETS</router-link></li>
          <li class="nav-item"><router-link to="/outils" class="link-button">OUTILS</router-link></li>
          <li class="nav-item"><router-link to="/contact" class="link-button">CONTACT</router-link></li>
          <li class="nav-item"><router-link to="/about" class="link-button">À PROPOS</router-link></li>
        </ul>
      </nav>
    </header>
    <hr class="hr-gradient" style="margin-top: -4px">
  </div>
</template>

<style scoped>
.link-button {
  color: #fff;
  padding: 20px 30px;
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
.navbar {
  min-height: 80px;
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