import { ref } from 'vue';

export function useNavbar() {
  const isOpen = ref(false);

  const toggleMenu = () => {
    isOpen.value = !isOpen.value;
  };

  const closeMenu = () => {
    isOpen.value = false;
  };

  const links = [
    { label: 'Home', path: '/home' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Membros', path: '/membros' },
    { label: 'Inscrição', path: '/inscricao' },
  ];

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    links
  };
}
