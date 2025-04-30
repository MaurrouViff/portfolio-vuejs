<template>
  <section class="min-h-[400px] bg-gray-100">
  <div class="p-8 max-w-7xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
          v-for="(card, index) in cards"
          :key="index"
          class="relative h-52 rounded-2xl bg-zinc-900 overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          @mousemove="updateGlow($event, index)"
          @mouseleave="resetGlow(index)"
          ref="cardRefs"
      >
        <!-- Glow -->
        <div
            class="absolute w-60 h-60 rounded-full pointer-events-none transition-opacity duration-300 blur-3xl"
            :style="glowStyles[index]"
        ></div>

        <!-- Content -->
        <div class="relative z-10 h-full w-full flex flex-col justify-center items-center text-white p-4 text-center">
          <h2 class="text-xl font-semibold mb-2">{{ card.title }}</h2>
          <p class="text-sm lg:text-base text-gray-300">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const cards = [
  { title: 'Étudiant', description: 'Je suis étudiant à l\'ESGI en troisième année de bachelor en Ingénierie du web !' },
  { title: 'Langages', description: 'Je connais une variété de langages, n\'hésitez pas à y regarder !' },
  { title: 'Unreal Engine', description: 'Je fais également du Unreal Engine avec des amis !' },
  { title: 'Outils', description: 'J\'utilise des outils dans le développement, n\'hésitez pas à les regarder ! ' },
  { title: 'CV', description: 'Pensez à regarder mon CV !' },
  { title: 'Projets', description: 'Pensez à regarder mes projets !' },
];

const cardRefs = ref([]);
const glowStyles = ref([]);

onMounted(() => {
  glowStyles.value = cards.map(() => ({
    top: '50%',
    left: '50%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.3), transparent 60%)',
    opacity: 0,
    transform: 'translate(-50%, -50%)',
  }))
});

function updateGlow(event, index) {
  const rect = cardRefs.value[index].getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  glowStyles.value[index] = {
    ...glowStyles.value[index],
    top: `${y}px`,
    left: `${x}px`,
    opacity: 1,
  }
}

function resetGlow(index) {
  glowStyles.value[index].opacity = 0;
}
</script>