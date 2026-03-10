
<template>
  <div class="min-h-screen w-screen p-0 m-0 flex flex-col justify-start items-center text-white">

    <div class="h-100 w-full bg-white">
      <img
        :src="headerImage"
        class=" head-image h-full w-full object-cover"
        alt="Header Image"
      >
    </div>


    <div class="pt-10 w-full flex flex-col justify-center items-center px-10">
      <div class="text-4xl">LOREM IPSUM</div>
      <div class="text-xl pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra ullamcorper magna lacinia aliquet. Nullam elit lorem, ornare sit amet ultricies at, ornare sollicitudin nulla. Phasellus tempor urna massa, ac lobortis tellus gravida at. In imperdiet varius nunc, vitae efficitur leo viverra id. Donec fringilla et nibh sed eleifend. Sed dapibus condimentum elit. Ut est tortor, eleifend in vehicula nec, ultricies sit amet erat. Nullam vel risus lacus. Sed vehicula dui et lacus pulvinar vestibulum. Nullam tristique mi et nulla aliquet interdum. Quisque tincidunt sit amet nisl nec ullamcorper. Donec rutrum consequat augue sit amet tristique. Aliquam a neque sit amet ipsum sodales finibus non dapibus nisi. Fusce pellentesque consequat massa eu pretium. Donec faucibus metus ipsum, at tincidunt lectus commodo in. Morbi sagittis felis fringilla nisi consequat aliquet.</div>
    </div>


  </div>
</template>

<script>
 import headerImage from '@/assets/home/aooni.png'

 export default {
  data() {
    return {
      headerImage: headerImage
    }
  }
}


</script>

<style scoped>

.head-image{

  filter: brightness(70%);

}

</style>
