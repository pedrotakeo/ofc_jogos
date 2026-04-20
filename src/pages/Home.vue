<template>
  <div class="bg-[#2B2725] min-h-screen overflow-x-hidden">
    <!-- Header / Hero Section -->
    <header class="relative h-screen flex flex-col items-center justify-center">
      <TheNavbar />

      <!-- Hero Background & Layers -->
      <div class="absolute inset-0 z-0">
        <img src="../assets/CajuBackground.png" class="w-full h-full object-cover" alt="Background" />
        <div class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#2B2725] to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 h-5 bg-[#2B2725]"></div>
      </div>

      <!-- Main Logo -->
      <img 
        src="../assets/logo.png" 
        class="relative z-10 h-[30%] md:h-[40%] object-contain animate-fade-in" 
        alt="CAJU Logo" 
      />

      <!-- Scroll Indicator -->
      <img
        src="../assets/home/arrow-down.png"
        class="absolute bottom-10 z-10 h-10 brightness-0 invert animate-jump cursor-pointer"
        alt="Scroll Down"
        @click="scrollToContent"
      />
    </header>

    <!-- Content Sections -->
    <main ref="contentStart" class="flex flex-col items-center py-20 gap-20">
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

      <InfoSection title="Sobre" titleColor="#BDD866" reverse>
        <p>
          Iniciado no Departamento de Informatica da Universidade Federal do Paraná (Dinf), o
          projeto da CAJU foi criado pelo professor Guilherme A. Derenievicz, com o intuito
          inicial de começar um projeto universitário com o foco no desenvolvimento de jogos.
        </p>
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
</template>

<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue';
import InfoSection from '@/components/InfoSection.vue';
import { useHome } from '@/composables/useHome';

const { contentStart, scrollToContent } = useHome();
</script>

<style scoped>
@keyframes idleJump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

.animate-jump {
  animation: idleJump 1.5s ease-in-out infinite;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>