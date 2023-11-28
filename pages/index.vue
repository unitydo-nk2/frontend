<!-- @format -->
<script setup>
import NavBar from '~/components/NavBar.vue';
// import Carousel from '~/components/Carousel.vue';
</script>

<template>
  <div class="font-primary">
    <div>
      <NavBar />
    </div>
    <div>
      <!-- <Carousel /> -->
    </div>
    <div class="ml-16 mb-8 overflow-x-scroll">
      <div
        class="w-52 text-neutral-500 text-xl font-medium font-['DB Heavent'] leading-7 tracking-wide"
      >
        Recommend activity
      </div>
      <div
        class="text-indigo-600 text-3xl font-bold font-['DB Heavent'] leading-10 tracking-wide"
      >
        แนะนำสำหรับคุณ
      </div>
    </div>
    <div class="ml-16 overflow-x-scroll flex flex-row">
      <Cards />
    </div>
  </div>
</template>

<style></style>
