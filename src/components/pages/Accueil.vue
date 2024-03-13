<template>
  <div>
    <Presentation/>
    <Cards />
    <GlobalCompetence />
  </div>
</template>

<script>
import Cards from "../Cards.vue";
import Presentation from "@/components/Presentation.vue";
import GlobalCompetence from "@/components/GlobalCompetence.vue";


export default {
  components: {
    Cards,
    Presentation,
    GlobalCompetence
  }
};
</script>
