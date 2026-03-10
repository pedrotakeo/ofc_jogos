


<template>

  <div class="fixed right-0 top-0 bg-black h-25 md w-screen z-100">
    <div class="w-[full] h-full flex flex-row justify-between items-center text-white">
      <div class="pl-10 flex flex-col justify-center items-center">
          <span class="text-">Oficina de</span>
          <span class="text-xl">JOGOS UFPR</span>
      </div>
      <div class="pr-10">


        <nav class="text-white p-4 z-100 text-md">

          <!--tela maior-->
          <div class="container mx-auto flex justify-between items-center">


            <div class="hidden md:flex">
              <RouterLink to="/home" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Home</RouterLink>
              <RouterLink to="/about" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Projetos</RouterLink>
              <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Membros</RouterLink>
              <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Inscrição</RouterLink>
            </div>
          </div>

          <!--tela menor-->

          <div class="md:hidden">
            <button @click="isOpen = !isOpen" class="focus:outline-none">
              <svg class="h-6 w-6" viewBox="0 0 24 24">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

          <transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-[-10px]"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-[-10px]"
          >

            <div v-if="isOpen"
                class="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 bg-black/80 rounded-b-2xl z-50 overflow-hidden">

              <div class="flex flex-col p-4 space-y-2 justify-center items-center w-full">
                <RouterLink to="/home" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Home</RouterLink>
                <RouterLink to="/about" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Projetos</RouterLink>
                <RouterLink to="/contact" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Membros</RouterLink>
                <RouterLink to="/contact" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Inscrição</RouterLink>
              </div>
            </div>

          </transition>


        </nav>



      </div>
    </div>
  </div>
  <div class="pt-25">


  <RouterView /></div>


  <div class="h-auto py-20 bg-[black] flex flex-row justify-center items-center">

    <div class="p-3 flex flex-col" >
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info1</RouterLink>
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info2</RouterLink>
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info1</RouterLink>
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info2</RouterLink>
    </div>

    <div class="p-3 flex flex-col" >
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info1</RouterLink>
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info2</RouterLink>
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info1</RouterLink>
      <RouterLink to="/contact" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Info2</RouterLink>
    </div>

  </div>

</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>


</style>
