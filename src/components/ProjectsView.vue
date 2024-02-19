<template>
  <div>
    <div class="gradient-policy">Mes projets :</div><hr />
    <section class="main-section">
      <h1>Projet : <span>{{ getProjectName('score_resto') }}</span></h1>
      <img src="../assets/images-projects/images-score-resto.png" alt="Image de score_resto" class="photo">
      <a :href="getProjectsUrl('score_resto')" class="blue-btn">Cliquez ici</a>
      <h2>Voici les langages où ce projet est codé : <strong>{{ getProjectsLanguage('score_resto') }}</strong></h2>


    </section>
    <hr />
    <section class="second-section">
      <h1>Projet : <span>{{ getProjectName('Roulette-VueJS') }}</span></h1>
      <img src="../assets/images-projects/images-roulette-vuejs.png" alt="Image Projet roulette VueJS" class="photo">
      <a :href="getProjectsUrl('Roulette-VueJS')" class="blue-btn">Cliquez ici</a>
      <h2>Voici les langages où ce projet est codé : <strong>{{ getProjectsLanguage('Roulette-VueJS') }}</strong></h2>
    </section>
    <hr />
    <section class="third-section">
      <h1>Projet : <span>{{ getProjectName('Projet Compétence') }}</span></h1>
      <img src="../assets/images-projects/images-competences.png" alt="Image projet compétence" class="photo">
      <a :href="getProjectsUrl('Projet Compétence')" class="blue-btn">Cliquez ici</a>
      <h2>Voici les langages où ce projet est codé : <strong>{{ getProjectsLanguage('Projet Compétence') }}</strong></h2>
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
                "nom_project": "score_resto",
                "langage": "PHP (POO) & SQL (projet en format MVC)",
              },
              {
                "id": 2,
                "nom_project": "Roulette-VueJS",
                "langage": "JavaScript (VueJS)",
              },
              {
                "id": 3,
                "nom_project": "Projet Compétence",
                "langage": "Framework JS (React)",
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
    },
    getProjectsUrl(projects) {
      const projectData = this.projectsData.tables[0].data.find(item => item.nom_project === projects);
      if (projectData) {
        switch (projects) {
          case 'score_resto':
            return 'https://github.com/MaurrouViff/score_resto';
          case 'Projet Compétence':
            return 'Lien vers projet compétence';
          case 'Roulette-VueJS':
            return 'https://github.com/MaurrouViff/roulette-vuejs';
          default:
            return '#';
        }
      } else {
        return '#';
      }
    }
  }
}
</script>
<style scoped>
.main-section, .second-section, .third-section {
  min-height: 60vh;
  padding-top: 126px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  margin-top: -8px;
  flex-direction: column;
}
.gradient-policy {
  font-size: 48px;
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
  color: red;
}
</style>