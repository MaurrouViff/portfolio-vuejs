<template>
  <div id="corps">
    <h1 id="important">Mes IDE :</h1>
    <hr />
    <section class="main-section">
      <a :href="getToolLink('PhpStorm')">
        <img src="../assets/images/PhpStorm_Icon.svg.png" alt="Image de PhpStorm" class="photo">
      </a>
      <h1>{{ getToolName('PhpStorm') }}</h1>
      <div class="gradient-policy">Cet IDE me permet de travailler sur différents langages comme :</div>
      <div class="gradient-policy">{{ getToolLanguage('PhpStorm') }}</div>
    </section>
    <hr>
    <section class="third-section">
      <a :href="getToolLink('IntelliJ IDEA')">
        <img src="../assets/images/IntelliJ_IDEA_Icon.svg.png" alt="Image d'IntelliJ IDEA" class="photo">
      </a>
      <h1>{{ getToolName('IntelliJ IDEA') }}</h1>
      <div class="gradient-policy">Cet IDE me permet de travailler sur différents langages comme :</div>
      <div class="gradient-policy">{{ getToolLanguage('IntelliJ IDEA') }}</div>
    </section>
    <hr>
    <section class="second-section">
      <a :href="getToolLink('Visual Studio')">
        <img src="../assets/images/Visual_Studio_Icon_2019.svg.png" alt="Image de Visual Studio" class="photo">
      </a>
      <h1>{{ getToolName('Visual Studio') }}</h1>
      <div class="gradient-policy">Cet IDE me permet de travailler sur différents langages comme :</div>
      <div class="gradient-policy">{{ getToolLanguage('Visual Studio') }}</div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toolsData: {
        "database_name": "Portfolio-outils",
        "tables": [
          {
            "table_name": "outils",
            "columns": [
              "id",
              "nom_outils",
              "langage"
            ],
            "data": [
              {
                "id": 1,
                "nom_outils": "PhpStorm",
                "langage": "PHP, JS & ses frameworks (VueJS)"
              },
              {
                "id": 2,
                "nom_outils": "IntelliJ IDEA",
                "langage": "Java & Kotlin"
              },
              {
                "id": 3,
                "nom_outils": "PyCharm",
                "langage": "Python"
              },
              {
                "id": 4,
                "nom_outils": "Visual Studio",
                "langage": "C# et C++"
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    getToolName(tool) {
      const toolData = this.toolsData.tables[0].data.find(item => item.nom_outils === tool);
      return toolData ? toolData.nom_outils : '';
    },
    getToolLanguage(tool) {
      const toolData = this.toolsData.tables[0].data.find(item => item.nom_outils === tool);
      return toolData ? toolData.langage : '';
    },
    getToolLink(tool) {
      const toolData = this.toolsData.tables[0].data.find(item => item.nom_outils === tool);
      if (toolData) {
        switch (tool) {
          case 'PhpStorm':
            return 'https://www.jetbrains.com/fr-fr/phpstorm/';
          case 'IntelliJ IDEA':
            return 'https://www.jetbrains.com/fr-fr/idea/';
          case 'Visual Studio':
            return 'Lien vers visual studio';
          default:
            return '#';
        }
      } else {
        return '#';
      }
    },
  }
};
</script>

<style scoped>
#corps {
  text-align: center;
  justify-content: center;
  justify-items: center;
}
.main-section, .third-section, .second-section {
  min-height: 60vh;
  padding-top: 126px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
  margin-top: -8px;
}
.photo {
  width: 200px;
  height: 200px;
}
h1 {
  color: red;
  font-size: 32px;
}
#important {
  color: red;
  font-size: 48px;
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
</style>
