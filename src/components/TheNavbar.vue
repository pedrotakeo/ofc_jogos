<template>
  <nav class="absolute left-10 top-10 bg-white z-[100] rounded-full px-6 py-2 shadow-lg">
    <div class="flex items-center text-[#2B2725]">
      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-6 font-medium">
        <RouterLink v-for="link in links" :key="link.path" :to="link.path" 
          class="hover:scale-110 transition-transform duration-200">
          {{ link.label }}
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden p-2 focus:outline-none" aria-label="Toggle Menu">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Dropdown -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-[-10px]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-10px]"
    >
      <div v-if="isOpen" class="md:hidden absolute left-0 right-0 top-full mt-2 bg-black/90 rounded-2xl overflow-hidden shadow-xl">
        <div class="flex flex-col p-4">
          <RouterLink v-for="link in links" :key="link.path" :to="link.path" 
            @click="closeMenu"
            class="p-3 text-white hover:bg-white/10 rounded-xl transition-colors">
            {{ link.label }}
          </RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { useNavbar } from '@/composables/useNavbar';

const { isOpen, toggleMenu, closeMenu, links } = useNavbar();
</script>
