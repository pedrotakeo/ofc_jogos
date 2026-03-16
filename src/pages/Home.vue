
<template>
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

    <!--CAROUSEL-->
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
</template>

<script lang="ts">
import headerImage from '@/assets/home/gameheader.png'
import caixoImage from '@/assets/home/caixo.png'

export default {
  data() {
    return {
      headerImage,
      cards: [headerImage,caixoImage],
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

      const innerElement = this.$refs.inner as HTMLElement;
      const carouselWrapper = innerElement?.parentElement;

      if (innerElement && carouselWrapper) {
        const firstCard = innerElement.querySelector('.card') as HTMLElement;

        if (firstCard) {
        this.step = firstCard.offsetWidth + 10;
        this.initialOffset = (carouselWrapper.offsetWidth / 2) - (firstCard.offsetWidth / 2);
        this.resetTranslate();
        }
      }
    },

    next() {
      if (this.transitioning) return;
      this.transitioning = true;

      this.moveLeft();

      this.afterTransition(() => {
        const card = this.cards.shift();
        if (card !== undefined) {
          this.cards.push(card);
        }
        this.resetTranslate();
        this.transitioning = false;
      });
    },


    prev() {
      if (this.transitioning) return;
      this.transitioning = true;

      const card = this.cards.pop();
      if (card !== undefined) {
        this.cards.unshift(card);
      }


      this.innerStyles = {
        transition: 'none',
        transform: `translateX(${this.initialOffset - this.step}px)`
      };


      setTimeout(() => {
        this.innerStyles = {
          transition: 'transform 0.2s ease-out',
          transform: `translateX(${this.initialOffset}px)`
        };
        this.afterTransition(() => { this.transitioning = false; });
      }, 0);
    },

    moveLeft() {
      this.innerStyles = {
        transition: 'transform 0.2s',
        transform: `translateX(${this.initialOffset - this.step}px)`
      };
    },

    resetTranslate() {
      this.innerStyles = {
        transition: 'none',
        transform: `translateX(${this.initialOffset}px)`
      };
    },

    afterTransition(callback: () => void) {
      const listener = () => {
        callback();
        (this.$refs.inner as HTMLElement).removeEventListener('transitionend', listener);
      };
      (this.$refs.inner as HTMLElement).addEventListener('transitionend', listener);
    }
  }
}
</script>


<style>
.carousel {
  overflow: hidden;
  display: block;

}

.inner {
  white-space: nowrap;


}

.card {
  margin-right: 10px;
  display: inline-flex;
  aspect-ratio: 16/9;
  background-color: #39b1bd;
  color: white;
  border-radius: 8px;
  align-items: start;
  justify-content: start;
  transition: 0.2s;
}

.slide-img {
  transition: 0.2s;
}

.slide-img:hover {
  transform: scale(1.1)
}


.car-btn {
  margin-right: 5px !important;
  margin-top: 10px !important;
  box-shadow: inset 0px 0px 13px #ffffff;
  transition: 0.2s;
}

.car-btn:hover {
  transform: scale(1.1)
}



.head-image{

  filter: brightness(70%);

}

</style>
