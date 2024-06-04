<template>
  <div>
    <div class="gradient-policy" id="font-size">Mes projets :</div><hr id="hr-auto" />
    <section class="main-section">
      <div class="gradient-policy">Projet :</div> <span>{{ getProjectName('Score Resto') }}</span>
      <img src="../assets/images-projects/images-score-resto.png" alt="Image de score_resto" class="photo">
      <router-link to="/scoreresto" class="blue-btn">Cliquez ici</router-link>
      <div class="gradient-policy">Voici les langages où ce projet est codé :</div> <span>{{ getProjectsLanguage('Score Resto') }}</span>
    </section>
    <hr />
    <section class="second-section">
      <div class="gradient-policy">Projet :</div> <span>{{ getProjectName('Roulette-VueJS') }}</span>
      <img src="../assets/images-projects/images-roulette-vuejs.png" alt="Image Projet roulette VueJS" class="photo">
      <router-link to="/roulette" class="blue-btn">Cliquez ici</router-link>
      <div class="gradient-policy">Voici les langages où ce projet est codé :</div> <span>{{ getProjectsLanguage('Roulette-VueJS') }}</span>
    </section>
    <hr>
    <section class="php-section">
      <div class="gradient-policy">Projet : </div> <span>{{ getProjectName('Roulette-PHP') }}</span>
      <img src="../assets/images-projects/subimages-project/roulette-php/premiere-roulette-php.png" alt="Image de projet roulette php" class="photo">
      <router-link to="/roulette-php" class="blue-btn">Cliquez ici</router-link>
      <div class="gradient-policy">Voici les langages où ce projet est codé : </div> <span>{{ getProjectsLanguage('Roulette-PHP') }}</span>
    </section>
    <hr />
    <section class="third-section">
      <div class="gradient-policy">Projet :</div> <span>{{ getProjectName('Projet Compétence') }}</span>
      <img src="../assets/images-projects/images-competences.png" alt="Image projet compétence" class="photo">
      <router-link to="/competences" class="blue-btn">Cliquez ici</router-link>
      <div class="gradient-policy">Voici les langages où ce projet est codé :</div> <span>{{ getProjectsLanguage('Projet Compétence') }}</span>
    </section>
    <hr />
    <section class="third-section">
      <div class="gradient-policy">Projet </div> <span>{{ getProjectName('Salon Nuances') }}</span>
      <img src="../assets/images-projects/Salon-nuances.png" alt="Image de salon nuances" class="photo">
      <router-link to="/nuances" class="blue-btn">Cliquez ici</router-link>
      <div class="gradient-policy">Voici les langages où ce projet est codé : </div> <span>{{ getProjectsLanguage('Salon Nuances') }}</span>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projectsData: {
        "database_name": "Portfolio-project",
        "tables": [
          {
            "table_name": "project",
            "columns": [
              "id",
              "nom_project",
              "langage"
            ],
            "data": [
              {
                "id": 1,
                "nom_project": "Score Resto",
                "langage": "PHP (POO) & SQL (projet en format MVC)"
              },
              {
                "id": 2,
                "nom_project": "Roulette-VueJS",
                "langage": "JavaScript (VueJS)"
              },
              {
                "id": 3,
                "nom_project": "Roulette-PHP",
                "langage": "PHP Objet (MVC)"
              },
              {
                "id": 4,
                "nom_project": "Projet Compétence",
                "langage": "Framework JS (React)"
              },
              {
                "id": 5,
                "nom_project": "Salon Nuances",
                "langage": "Framework JS (VueJS)"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getProjectName(projects) {
      const projectData = this.projectsData.tables[0].data.find(item => item.nom_project === projects);
      return projectData ? projectData.nom_project : '';
    },
    getProjectsLanguage(projects) {
      const projectData = this.projectsData.tables[0].data.find(item => item.nom_project === projects);
      return projectData ? projectData.langage : '';
    }
  }
}
</script>
<style scoped>
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
.second-section, .third-section, .php-section {
  min-height: 60vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  flex-direction: column;

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
hr {
  height: 5px;
  border: 0;
  background-image: linear-gradient(135deg, #006466 24%, #186785 50%, #186785 79%, #316AA4 100%);
}
.photo {
  height: 20%;
  width: 50%;
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
span {
  color: #ff0000;
  font-size: 24px;
  margin-bottom: 10px;
  letter-spacing: -0.72px;
}
#font-size {
  font-size: 48px;
}
#hr-auto {
  margin-top: 0;
}
</style>