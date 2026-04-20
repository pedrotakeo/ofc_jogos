<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style scoped></style>
