import { ref } from 'vue';

export function useHome() {
  const contentStart = ref<HTMLElement | null>(null);

  const scrollToContent = () => {
    contentStart.value?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    contentStart,
    scrollToContent
  };
}
