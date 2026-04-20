<template>
  <section
    :class="[
      'w-[90%] md:w-[70%] h-auto flex flex-col md:flex-row justify-between items-center bg-[#1a1715] p-10 md:p-20 rounded-xl gap-10 transition-all duration-300',
      reverse ? 'md:flex-row-reverse' : ''
    ]"
  >
    <h2
      :style="{ color: titleColor }"
      class="w-full md:w-[30%] text-4xl md:text-5xl text-center font-bold leading-tight font-rodin"
    >
      {{ title }}
    </h2>
    <div
      :class="[
        'w-full md:w-[60%] text-white text-lg md:text-xl flex flex-col gap-4 font-cezanne',
        reverse ? 'md:text-end items-end' : 'md:text-start items-start'
      ]"
    >
      <slot></slot>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  titleColor?: string;
  reverse?: boolean;
}>();
</script>
