<template>
  <div class="bg-[#1c1a19] min-h-screen overflow-x-hidden">
    <TheNavbar />

    <!-- Wrapper com margem para compensar a barra lateral -->
    <div class="ml-20 md:ml-64 transition-all duration-300">
      <!-- Header / Hero Section -->
      <header class="relative h-screen flex flex-col items-center justify-center z-0">
        <div class="absolute inset-0 z-0 bg-[#e6795b] pointer-events-none">
          <div
            v-for="(blob, index) in blobs"
            :key="index"
            class="absolute h-150 aspect-square rounded-full blur-[100px] top-gradient"
            :class="blob.color"
            :style="blob.style"
          ></div>
        </div>
        <!-- Hero Background & Layers -->
        <div class="absolute inset-0 z-0">
          <!-- <img
            src="../assets/CajuBackground.png"
            class="w-full h-full object-cover"
            alt="Background"
          /> -->

          <div
            class="absolute w-full bottom-5 h-32 bg-gradient-to-t from-[#1c1a19] via-[#1c1a19]/50 to-transparent"
          ></div>
          <div class="absolute w-full bottom-0 h-5 bg-[#1c1a19]"></div>
        </div>

        <!-- Main Logo -->
        <div class="w-full h-full flex justify-center items-center">
          <img
            src="../assets/logo.png"
            class="z-10 translate-x-20 pb-10 h-auto md:h-[40%] animate-fade-in"
            alt="CAJU Logo"
          />
        </div>

        <!-- Scroll Indicator -->
        <img
          src="../assets/home/arrow-down.png"
          class="absolute bottom-10 translate-x-20 z-10 h-10 brightness-0 invert animate-jump cursor-pointer"
          alt="Scroll Down"
          @click="scrollToContent"
        />
      </header>

      <!-- Content Sections -->
      <main
        ref="contentStart"
        class="relative z-10 flex flex-col items-end w-full h-auto pb-60 bg-gradient-to-b from-[#1c1a19] to-[#1c1a19]/50"
      >
        <InfoSection title="Desenvolva Jogos!" titleColor="#D7826D">
          <p>
            O Clube Acadêmico de Jogos UFPR (CAJU) é grupo de desenvolvimento de jogos, formados
            inicialmente por estudantes da Universidade Federal do Paraná (UFPR), com o objetivo de
            ensinar, distribuir e desenvolver jogos digitais.
          </p>
          <p>
            Com foco em código aberto, temos como objetivo disponibilizar para a sociedade
            ferramentas, cursos, palestras sobre jogos digitais.
          </p>
        </InfoSection>

        <InfoSection title="Sobre" titleColor="#BDD866">
          <p>
            Iniciado no Departamento de Informatica da Universidade Federal do Paraná (Dinf), o
            projeto da CAJU foi criado pelo professor Guilherme A. Derenievicz, com o intuito
            inicial de começar um projeto universitário com o foco no desenvolvimento de jogos.
          </p>

          <div class="w-full h-80 my-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-[#BDD866]/20 group transition-all duration-500 hover:border-[#BDD866]/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.635344059493!2d-49.234306826368154!3d-25.450452133697897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce510c13f4c49%3A0xdd5fbed9fe690672!2sDepartamento%20de%20Inform%C3%A1tica%20-%20UFPR!5e0!3m2!1spt-BR!2sbr!4v1777506596960!5m2!1spt-BR!2sbr"
              class="w-full h-full border-0 grayscale invert-[0.1] contrast-[1.1] transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:contrast-100"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>

          <p>
            O projeto se estende para além da universidade, promovendo conhecimento por meio de
            palestras, video aulas e oferecimento de jogos gratuitos.
          </p>
          <p>
            Acreditamos que a criação de jogos é multidisciplinar, integrando talentos do Design,
            Música, Artes Visuais e Educação para criar experiências pedagógicas acessíveis.
          </p>
        </InfoSection>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import InfoSection from '@/components/InfoSection.vue'
import { useHome } from '@/composables/useHome'

// Define colors to cycle through
const blobColors = [
  'bg-[#dbb550]',
  'bg-[#d04d44]',
  'bg-[#919f99]',
  'bg-[#de8253]',
  'bg-[#938d99]',
  'bg-[#e19956]',
]

// Initialize 6 blobs
const blobs = ref(
  Array.from({ length: 6 }, (_, i) => ({
    color: blobColors[i % blobColors.length],
    style: {},
  })),
)

const getRandomTransform = () => {
  return {
    '--rand-scaleX': (Math.random() * 1.5 + 0.5).toString(),
    '--rand-scaleY': (Math.random() * 1.5 + 0.5).toString(),
    '--rand-rotate': `${Math.floor(Math.random() * 360)}deg`,
    '--rand-translateX': `${Math.floor(Math.random() * 120) - 20}vw`,
    '--rand-translateY': `${Math.floor(Math.random() * 120) - 20}vh`,
    '--rand-duration': `${Math.random() * 4 + 4}s`,
  }
}

const updateAllBlobs = () => {
  blobs.value.forEach((blob) => {
    blob.style = getRandomTransform()
  })
}

onMounted(() => {
  updateAllBlobs()

  setInterval(updateAllBlobs, 4000)
})

const { contentStart, scrollToContent } = useHome()
</script>

<style scoped>
@keyframes idleJump {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}

.animate-jump {
  animation: idleJump 1.5s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.top-gradient {
  transition: transform 5s linear;
  transform: translate(var(--rand-translateX), var(--rand-translateY)) rotate(var(--rand-rotate))
    scale(var(--rand-scaleX), var(--rand-scaleY));
}
</style>
