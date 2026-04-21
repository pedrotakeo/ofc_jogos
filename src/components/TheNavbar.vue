<template>
  <nav
    class="fixed left-0 top-0 h-full w-20 md:w-64 bg-[#0f0e0d] z-[100] border-r border-white/5 shadow-2xl flex flex-col items-center pb-10 pt-5 transition-all duration-300"
  >
    <!-- Logo ou Ícone no topo -->
    <div class="mb-20 px-4 pb-5">
      <img src="../assets/logo.png" class="h-12 w-auto object-contain brightness-110" alt="CAJU" />
    </div>

    <!-- Links de Navegação -->
    <div class="flex flex-col gap-4 w-full px-4">
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="group flex items-center gap-4 text-white/70 hover:bg-white/5 hover:text-white p-4 rounded-xl transition-all duration-200"
        active-class="bg-white/10 text-white !text-white"
      >
        <span class="hidden md:block font-rodin font-bold text-lg tracking-wide">{{
          link.label
        }}</span>
        <span class="md:hidden font-rodin font-bold text-center w-full">{{
          link.label.charAt(0)
        }}</span>
      </RouterLink>
    </div>

    <!-- Rodapé da barra lateral -->
    <div class="mt-auto text-[#2B2725]/50 text-xs hidden md:block pt-2">© 2026 CAJU UFPR</div>
  </nav>
</template>

<script setup lang="ts">
import { useNavbar } from '@/composables/useNavbar'
const { links } = useNavbar()
</script>
