<template>
  <div class="bg-[#1c1a19] min-h-screen overflow-x-hidden">
    <TheNavbar />

    <!-- Wrapper com margem para compensar a barra lateral -->
    <div class="ml-20 md:ml-64 transition-all duration-300">
      <header class="relative pt-32 flex flex-col items-center justify-center">
        <!-- Espaçamento superior para manter consistência -->
      </header>

      <!-- Seção de Conteúdo -->
      <main class="relative z-10 flex flex-col items-end w-full h-auto pb-60">
        <InfoSection title="Inscrições" titleColor="#D7826D">
          <p>
            No momento, as inscrições para novos membros do CAJU estão fechadas.
          </p>
          <p>
            O Clube Acadêmico de Jogos UFPR realiza processos seletivos periodicamente. Buscamos estudantes entusiasmados de diversas áreas como programação, arte, design, música e educação para fortalecer nossa comunidade.
          </p>
          <p>
            Fique de olho em nosso site e redes sociais para saber quando abriremos novas vagas para o time!
          </p>

          <div class="mt-12">
            <button
              @click="showAlert = true"
              class="bg-[#D7826D] hover:bg-[#c66a54] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 cursor-pointer font-rodin uppercase tracking-wider shadow-lg hover:shadow-[#D7826D]/20 hover:-translate-y-1 active:translate-y-0"
            >
              Acessar Formulário
            </button>
          </div>
        </InfoSection>
      </main>
    </div>

    <!-- Alerta Personalizado (Modal) -->
    <Transition name="fade">
      <div
        v-if="showAlert"
        class="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        @click.self="showAlert = false"
      >
        <div
          class="bg-[#1c1a19] border-2 border-[#D7826D] p-10 md:p-16 rounded-3xl max-w-lg w-full shadow-[0_0_50px_rgba(215,130,109,0.2)] transform transition-all animate-scale-in"
        >
          <div class="flex flex-col items-center text-center">
            <!-- Ícone Decorativo -->
            <div class="w-16 h-16 bg-[#D7826D]/20 rounded-full flex items-center justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-[#D7826D]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 class="text-3xl font-bold text-[#D7826D] mb-6 font-rodin uppercase tracking-tight">
              Em Breve!
            </h3>

            <p class="text-white/90 text-lg font-cezanne mb-12 leading-relaxed">
              As inscrições para o CAJU serão abertas em breve!<br />
              Estamos preparando tudo para receber novos talentos. Acompanhe nossas redes sociais
              para não perder o anúncio oficial.
            </p>

            <button
              @click="showAlert = false"
              class="w-full bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold py-4 px-8 rounded-xl transition-all duration-300 font-rodin uppercase tracking-widest text-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheNavbar from '@/components/TheNavbar.vue'
import InfoSection from '@/components/InfoSection.vue'

const showAlert = ref(false)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleIn {
  from {
    transform: scale(0.95) translateY(10px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
