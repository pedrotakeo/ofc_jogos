<template>
  <section
    class="w-full flex flex-col md:flex-row justify-end items-start py-32 px-6 md:px-12 lg:px-24 gap-10 md:gap-20 transition-all duration-300"
  >
    <!-- Título: Menor e com margem da esquerda (vácuo entre nav e título) -->
    <div class="w-full md:w-[30%] lg:w-[25%] md:ml-20">
      <h2
        :style="{ color: titleColor }"
        class="text-4xl md:text-5xl lg:text-6xl text-left font-bold leading-tight font-rodin break-words opacity-90"
      >
        {{ title }}
      </h2>
    </div>

    <!-- Texto: Bem mais próximo da borda direita -->
    <div
      class="w-full md:w-[50%] lg:w-[45%] text-white text-lg md:text-xl flex flex-col gap-8 font-cezanne leading-relaxed text-justify"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  titleColor?: string;
}>();
</script>