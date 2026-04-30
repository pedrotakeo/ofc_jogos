<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import MemberCard from '@/components/MemberCard.vue'

const members = [
  {
    name: 'Guilherme A. Derenievicz',
    role: 'Coordenador / Professor',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    email: 'guilherme@inf.ufpr.br'
  },
  {
    name: 'Membro Exemplo 1',
    role: 'Desenvolvedor Frontend',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Membro Exemplo 2',
    role: 'Game Designer',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  },
  {
    name: 'Membro Exemplo 3',
    role: 'Artista 2D',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com'
  }
]
</script>

<template>
  <div class="bg-[#1c1a19] min-h-screen overflow-x-hidden">
    <TheNavbar />

    <!-- Wrapper com margem para compensar a barra lateral -->
    <div class="ml-20 md:ml-64 transition-all duration-300">
      <header class="h-32"></header>

      <!-- Seção de Conteúdo (Seguindo o padrão do InfoSection) -->
      <main class="relative z-10 flex flex-col items-end w-full h-auto pb-60">
        <section
          class="w-full flex flex-col md:flex-row justify-end items-start py-32 px-6 md:px-12 lg:px-24 gap-10 md:gap-20 transition-all duration-300"
        >
          <!-- Título: Alinhado à esquerda do grid interno (vácuo com a nav) -->
          <div class="w-full md:w-[30%] lg:w-[25%] md:ml-20">
            <h1
              class="text-4xl md:text-5xl lg:text-6xl text-[#BDD866] text-left font-bold leading-tight font-rodin break-words opacity-90"
            >
              Membros
            </h1>
          </div>

          <!-- Conteúdo: Cards alinhados à direita -->
          <div class="w-full md:w-[60%] lg:w-[55%] flex flex-col gap-12">
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 w-full">
              <MemberCard
                v-for="member in members"
                :key="member.name"
                v-bind="member"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>
