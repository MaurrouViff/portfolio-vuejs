<template>
  <div>
    <Presentation/>
    <Cards />
  </div>
</template>

<script>
import Cards from "../Cards.vue";
import Presentation from "@/components/Presentation.vue";


export default {
  components: {
    Cards,
    Presentation
  }
};
</script>
