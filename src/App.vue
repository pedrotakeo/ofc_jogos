


<template>

  <div class="fixed right-0 top-0 bg-[#f2ebe6] h-auto py-5 md w-screen z-100">
    <div class="w-[full] h-full flex flex-row justify-between items-center text-[#c54c2b] ">
      <div class="pl-10 flex flex-col justify-center items-center">

        <img :src="logo" alt="logo" class="w-30 relative "/>


      </div>
      <div class="pr-10">


        <nav class="text-[#c54c2b] p-4 z-100 text-md">

          <!--tela maior-->
          <div class="container mx-auto flex justify-between items-center">


            <div class="hidden md:flex">
              <RouterLink to="/home" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Home</RouterLink>
              <RouterLink to="/projetos" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Projetos</RouterLink>
              <RouterLink to="/membros" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Membros</RouterLink>
              <RouterLink to="/inscricao" class="rounded-xl hover:scale-110 transition ease-linear pl-4">Inscrição</RouterLink>
            </div>
          </div>

          <!--tela menor-->

          <div class="md:hidden">
            <button @click="isOpen = !isOpen" class="focus:outline-none">
              <svg class="h-8 w-8" viewBox="0 0 20 20">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#c54c2b" stroke-width="2" stroke-linecap="round"/>
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
                class="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 bg-[#f2ebe6]/80 rounded-b-2xl z-50 overflow-hidden">

              <div class="flex flex-col p-4 space-y-2 justify-center items-center w-full">
                <RouterLink to="/home" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Home</RouterLink>
                <RouterLink to="/projetos" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Projetos</RouterLink>
                <RouterLink to="/membros" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Membros</RouterLink>
                <RouterLink to="/inscricao" @click="isOpen = false" class="block hover:bg-white/10 p-3 rounded-xl transition-all">Inscrição</RouterLink>
              </div>
            </div>

          </transition>


        </nav>



      </div>
    </div>
  </div>
  <div class="pt-28 bg-[#f2ebe6] text-[#c54c2b]">


  <RouterView /></div>


  <div class="h-auto py-20 flex flex-row justify-center items-center">

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
import logo from '@/assets/png_logo_red.png'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped>



</style>
