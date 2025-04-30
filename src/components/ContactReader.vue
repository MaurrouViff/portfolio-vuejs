<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <section class="p-6 bg-white rounded-lg shadow-md">
      <h1 class="mb-4 text-xl font-bold text-gray-900">Contact</h1>
      <select
      class="block cursor-pointer w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-200"
        v-model="selectedUrl"
      >
        <option value="">Sélectionnez une option</option>
        <option :value="linkedInUrl">Mon LinkedIn</option>
        <option :value="emailUrl">Mon Email</option>
      </select>

      <div v-if="selectedUrl" class="mt-4">
        <h2 class="text-lg font-semibold text-gray-700">URL :</h2>
        <p class="p-2 mt-2 text-sm bg-gray-100 rounded text-gray-700">
          {{ selectedUrl }}
        </p>
      </div>


    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const linkedInUrl = "https://www.linkedin.com/in/votre-compte"

const emailUrl = "aubriet.aurelien31082004@outlook.fr"


const selectedUrl = ref("")

</script>
