<template>
  <div id="corps">
    <section>
      <h1>Informations de contact</h1>
      <div>
        <label for="selectColumn" class="label">Sélectionnez votre recherche :</label><br />
        <select v-model="selectedColumn" id="selectColumn">
          <option v-for="column in columns" :key="column">{{ column }}</option>
        </select>

        <div v-if="selectedData">
          <p v-if="selectedColumn === 'Email'">
            <strong>Mon adresse mail professionnel :</strong> <br /> <span>{{ selectedData.Email }}</span>
          </p>
          <p v-if="selectedColumn === 'LinkedIn'">
            <strong>Mon lien linkedin : </strong> <br /> <a :href="selectedData.LinkedIn" target="_blank" class="link-to-page">Cliquez ici</a>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      contactData: null,
      selectedColumn: 'adrressse',
    };
  },
  computed: {
    columns() {
      if (this.contactData && this.contactData.tables.length > 0) {
        return this.contactData.tables[0].columns;
      }
      return [];
    },
    selectedData() {
      if (this.contactData && this.contactData.tables.length > 0) {
        return this.contactData.tables[0].data[0];
      }
      return null;
    },
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await axios.get('/contact.json');
        this.contactData = response.data;
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    },
  },
};
</script>
<style scoped>
#corps {
  color: black;
  text-align: center;
  justify-content: center;
  justify-items: center;
}
select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid rgba(12, 239, 205, 0.93);
  border-radius: 4px;
  color: #ffffff;
  width: 10%;
  transition: border-color 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.8);
}


select:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

select option {
  padding: 10px;
  font-size: 16px;
  background-color: #fff;
  color: #333;
}


select::after {
  content: '\25BC';
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
}

span {
  color: red;
}
section {
  min-height: 60vh;
  padding-top: 126px;
  align-items: center;
  justify-content: center;
  padding-bottom: 90px;
}
.link-to-page {
  color: red;
  text-decoration: none;
}
.link-to-page:hover {
  text-decoration: underline;
}
</style>