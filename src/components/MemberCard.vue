<script setup lang="ts">
interface Props {
  name: string;
  role?: string;
  github?: string;
  linkedin?: string;
  email?: string;
  image?: string;
}

defineProps<Props>();
</script>

<template>
  <div
    class="flex bg-[#2a2827] rounded-2xl overflow-hidden border border-white/5 hover:border-[#BDD866]/30 transition-all duration-300 group shadow-lg hover:shadow-2xl"
  >
    <!-- Left Section (30%) -->
    <div class="w-[30%] bg-[#32302e] flex items-center justify-center relative overflow-hidden">
      <template v-if="image">
        <img :src="image" :alt="name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      </template>
      <template v-else>
        <!-- User Icon Placeholder -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-12 h-12 text-[#BDD866]/40 group-hover:text-[#BDD866]/80 transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      </template>
      
      <!-- Decorative overlay -->
      <div class="absolute inset-0 bg-gradient-to-tr from-[#BDD866]/5 to-transparent pointer-events-none"></div>
    </div>

    <!-- Right Section (70%) -->
    <div class="w-[70%] p-6 flex flex-col justify-center">
      <h3 class="text-xl font-bold text-white mb-1 group-hover:text-[#BDD866] transition-colors duration-300">
        {{ name }}
      </h3>
      <p v-if="role" class="text-gray-400 text-sm mb-4">{{ role }}</p>
      
      <!-- Social Links -->
      <div class="flex gap-4 mt-auto">
        <a
          v-if="github"
          :href="github"
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors duration-200"
          title="GitHub"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        
        <a
          v-if="linkedin"
          :href="linkedin"
          target="_blank"
          class="text-gray-400 hover:text-blue-400 transition-colors duration-200"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>

        <a
          v-if="email"
          :href="`mailto:${email}`"
          class="text-gray-400 hover:text-[#BDD866] transition-colors duration-200"
          title="Email"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
    </div>
  </div>
</template>
