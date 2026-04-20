<!-- <template>
  <div class="min-h-[80vh] w-screen p-0 m-0 flex flex-col justify-start items-center text-white">

    <div class="h-100 w-full bg-white">
      <img
        :src="headerImage"
        class=" head-image h-full w-full object-cover"
        alt="Header Image"
      >
    </div>


    <div class="pt-10 w-full flex flex-col justify-center items-center px-10">
      <div class="text-2xl text-center">LOREM IPSUM</div>
      <div class="text-md py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper magna lacinia aliquet. Nullam elit lorem, ornare sit amet ultricies at, ornare sollicitudin nulla. Phasellus tempor urna massa, ac lobortis tellus gravida at. In imperdiet varius nunc, vitae efficitur leo viverra id. Donec fringilla et nibh sed eleifend. Sed dapibus condimentum elit. Ut est tortor, eleifend in vehicula nec, ultricies sit amet erat. Nullam vel risus lacus. Sed vehicula dui et lacus pulvinar vestibulum. Nullam tristique mi et nulla aliquet interdum. Quisque tincidunt sit amet nisl nec ullamcorper. Donec rutrum consequat augue sit amet tristique. Aliquam a neque sit amet ipsum sodales finibus non dapibus nisi. Fusce pellentesque consequat massa eu pretium. Donec faucibus metus ipsum, at tincidunt lectus commodo in. Morbi sagittis felis fringilla nisi consequat aliquet.</div>
    </div>


    <div class="text-2xl text-center pt-10 pb-5">Jogos Criados Por Nossos Membros</div>


    <div class="carousel w-[70vw] xl:w-[30vw] ">
      <div class="inner" ref="inner" :style="innerStyles">
        <div class="card rounded-xl w-[70vw]  xl:w-[30vw] overflow-hidden " v-for="card in cards" :key="card">
          <img
            :src="card"
            class="slide-img h-full w-full object-cover"
            alt="Header Image"
          >

        </div>
      </div>

    </div>

    <div class="flex gap-2 mt-4 pb-20">
      <button @click="prev" class="car-btn w-10 h-10  p-2 rounded-full"><</button>
      <button @click="next" class="car-btn w-10 h-10  p-2 rounded-full">></button>
    </div>
  </div>
</template> -->

<template>
  <div class="bg-[#2B2725]">
    <div class="flex flex-col h-screen relative">
      <div class="absolute left-10 top-10 bg-white h-15 w-auto z-100 rounded-full">
        <div class="w-[full] h-full flex flex-row justify-between items-center text-white">
          <div class="pr-10">
            <nav class="text-[#2B2725] text-center p-4 z-100 text-md">
              <!--tela maior-->
              <div class="container mx-auto flex justify-between items-center">
                <div class="hidden md:flex">
                  <RouterLink
                    to="/projetos"
                    class="rounded-xl hover:scale-110 transition ease-linear pl-4"
                    >Projetos</RouterLink
                  >
                  <RouterLink
                    to="/membros"
                    class="rounded-xl hover:scale-110 transition ease-linear pl-4"
                    >Membros</RouterLink
                  >
                  <RouterLink
                    to="/inscricao"
                    class="rounded-xl hover:scale-110 transition ease-linear pl-4"
                    >Inscrição</RouterLink
                  >
                </div>
              </div>

              <!--tela menor-->

              <div class="md:hidden">
                <button @click="isOpen = !isOpen" class="focus:outline-none">
                  <svg class="h-6 w-6" viewBox="0 0 24 24">
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
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
                <div
                  v-if="isOpen"
                  class="md:hidden absolute left-0 right-0 top-full mt-2 mx-4 bg-black/80 rounded-b-2xl z-50 overflow-hidden"
                >
                  <div class="flex flex-col p-4 space-y-2 justify-center items-center w-full">
                    <RouterLink
                      to="/home"
                      @click="isOpen = false"
                      class="block hover:bg-white/10 p-3 rounded-xl transition-all"
                      >Home</RouterLink
                    >
                    <RouterLink
                      to="/projetos"
                      @click="isOpen = false"
                      class="block hover:bg-white/10 p-3 rounded-xl transition-all"
                      >Projetos</RouterLink
                    >
                    <RouterLink
                      to="/membros"
                      @click="isOpen = false"
                      class="block hover:bg-white/10 p-3 rounded-xl transition-all"
                      >Membros</RouterLink
                    >
                    <RouterLink
                      to="/inscricao"
                      @click="isOpen = false"
                      class="block hover:bg-white/10 p-3 rounded-xl transition-all"
                      >Inscrição</RouterLink
                    >
                  </div>
                </div>
              </transition>
            </nav>
          </div>
        </div>
      </div>

      <div
        class="w-full h-20 z-100 bg-gradient-to-t from-[#2B2725] via-[#2B2725]/60 to-transparent absolute bottom-4"
      ></div>

      <div class="w-full h-5 z-100 bg-[#2B2725] absolute bottom-0"></div>

      <img src="../assets/CajuBackground.png" class="z-50 h-full object-cover" />

      <img
        src="../assets/logo.png"
        class="absolute z-100 h-[40%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3"
      />

      <img
        src="../assets/home/arrow-down.png"
        class="absolute z-100 h-10 ratio-square bottom-10 left-1/2 -translate-x-1/2 brightness-0 invert-100 animate-jump"
      />
    </div>

    <div class="flex flex-col justify-center items-center w-screen pt-10 pb-50 gap-y-10">
      <div
        class="w-[70%] h-auto flex flex-row justify-between items-center bg-[#1a1715] p-20 rounded-xl"
      >
        <div
          class="w-[30%] h-full text-[#D7826D] text-5xl text-center flex flex-col justify-center items-center"
        >
          Desenvolva Jogos!
        </div>
        <div
          class="w-[60%] h-full text-white text-start text-xl flex flex-col justify-start items-start"
        >
          <p>
            O Clube Acadêmico de Jogos UFPR (CAJU) é grupo de desenvolvimento de jogos, formados
            inicialmente por estudantes da Universidade Federal do Paraná (UFPR), com o objetivo de
            ensinar, distribuir e desenvolver jogos digitais.
          </p>
          <p>
            Com foco em código aberto, temos como objetivo disponibilizar para a sociedade
            ferramentas, cursos, palestras sobre jogos digitais.
          </p>
        </div>
      </div>

      <div
        class="w-[70%] h-auto flex flex-row justify-between items-center bg-[#1a1715] p-20 rounded-xl"
      >
        <div
          class="w-[60%] h-full text-white text-end text-xl flex flex-col justify-start items-start"
        >
          <p>
            Iniciado no Departamento de Informatica da Universidade Federal do Paraná (Dinf), o
            projeto da CAJU foi criado pelo professor Guilherme A. Derenievicz, com o intuito
            inicial de começar um projeto universitário com o foco no desenvolvimento de jogos, algo
            que, até então, era inexistente no ambiente acadêmico da UFPR.
          </p>

          <p>
            O projeto se extende para além da universidade, com o objetivo de promover esse
            conhecimento para outras areas da sociedade, seja por meio de palestras, video aulas,
            oferecimento de jogos gratuitos, entre outros.
          </p>

          <p>
            Acreditamos que a criação de jogos é, por natureza, multidisciplinar. Por isso, nosso
            time vai além da computação, integrando talentos do Design, Música, Artes Visuais e
            Educação. Juntos, transformamos linhas de código em experiências pedagógicas e
            entretenimento acessível.
          </p>
        </div>

        <div
          class="w-[30%] h-full text-center text-[#BDD866] text-5xl flex flex-col justify-center items-center"
        >
          Sobre
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import headerImage from '@/assets/home/gameheader.png'
import caixoImage from '@/assets/home/caixo.png'
import { ref } from 'vue'

const isOpen = ref(false)

export default {
  data() {
    return {
      headerImage,
      cards: [headerImage, caixoImage],
      innerStyles: {},
      step: 0,
      transitioning: false,
      initialOffset: 0,
    }
  },

  mounted() {
    this.setStep()

    window.addEventListener('resize', this.setStep)
  },

  methods: {
    setStep() {
      const innerElement = this.$refs.inner as HTMLElement
      const carouselWrapper = innerElement?.parentElement

      if (innerElement && carouselWrapper) {
        const firstCard = innerElement.querySelector('.card') as HTMLElement

        if (firstCard) {
          this.step = firstCard.offsetWidth + 10
          this.initialOffset = carouselWrapper.offsetWidth / 2 - firstCard.offsetWidth / 2
          this.resetTranslate()
        }
      }
    },

    next() {
      if (this.transitioning) return
      this.transitioning = true

      this.moveLeft()

      this.afterTransition(() => {
        const card = this.cards.shift()
        if (card !== undefined) {
          this.cards.push(card)
        }
        this.resetTranslate()
        this.transitioning = false
      })
    },

    prev() {
      if (this.transitioning) return
      this.transitioning = true

      const card = this.cards.pop()
      if (card !== undefined) {
        this.cards.unshift(card)
      }

      this.innerStyles = {
        transition: 'none',
        transform: `translateX(${this.initialOffset - this.step}px)`,
      }

      setTimeout(() => {
        this.innerStyles = {
          transition: 'transform 0.2s ease-out',
          transform: `translateX(${this.initialOffset}px)`,
        }
        this.afterTransition(() => {
          this.transitioning = false
        })
      }, 0)
    },

    moveLeft() {
      this.innerStyles = {
        transition: 'transform 0.2s',
        transform: `translateX(${this.initialOffset - this.step}px)`,
      }
    },

    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(${this.initialOffset}px)`,
      }
    },

    afterTransition(callback: () => void) {
      const listener = () => {
        callback()
        ;(this.$refs.inner as HTMLElement).removeEventListener('transitionend', listener)
      }
      ;(this.$refs.inner as HTMLElement).addEventListener('transitionend', listener)
    },
  },
}
</script>

<style>
@keyframes idleJump {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -15px);
  }
}

.animate-jump {
  animation: idleJump 1.5s ease-in-out infinite;
}
</style>
