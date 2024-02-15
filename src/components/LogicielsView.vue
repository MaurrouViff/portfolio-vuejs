<template>
  <div>
    <section class="main-section">
      <a :href="getToolLink('PhpStorm')">
        <img src="../assets/images/PhpStorm_Icon.svg.png" alt="Image de PhpStorm" class="photo">
      </a>
      <h1>{{ getToolName('PhpStorm') }}</h1>
      <div class="gradient-policy"></div>
      <div class="gradient-policy">{{ getToolLanguage('PhpStorm') }}</div>
    </section>
    <section class="second-section">
      <a :href="getToolLink('PyCharm')">
        <img src="../assets/images/PyCharm_Icon.svg.png" alt="Image de PyCharm" class="photo">
      </a>
      <h1>{{ getToolName('PyCharm') }}</h1>
      <div class="gradient-policy"></div>
      <div class="gradient-policy">{{ getToolLanguage('PyCharm') }}</div>
    </section>
    <section class="third-section">
      <a :href="getToolLink('IntelliJ IDEA')">
        <img src="../assets/images/IntelliJ_IDEA_Icon.svg.png" alt="Image d'IntelliJ IDEA" class="photo">
      </a>
      <h1>{{ getToolName('IntelliJ IDEA') }}</h1>
      <div class="gradient-policy"></div>
      <div class="gradient-policy">{{ getToolLanguage('IntelliJ IDEA') }}</div>
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
          case 'PyCharm':
            return 'https://www.jetbrains.com/fr-fr/pycharm/';
          case 'IntelliJ IDEA':
            return 'https://www.jetbrains.com/fr-fr/idea/';
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
.main-section, .second-section, .third-section {
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
  font-size: 24px;
}
</style>
