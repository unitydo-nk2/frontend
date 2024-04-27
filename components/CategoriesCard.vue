<script setup>
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});

let imageSrc = [
  "https://i.ibb.co/fXcKK6X/volunteer.png",
  "https://i.ibb.co/R4Jqjfw/Education.png",
  "https://i.ibb.co/5rVCz23/exercise.png",
  "https://i.ibb.co/jH6pN3m/Dance.png",
  "https://i.ibb.co/LN44bkp/Art-Music.png",
  "https://i.ibb.co/ryqb6WC/business.png",
  "https://i.ibb.co/Zc0y2sp/other.png",
];
</script>

<template>
  <div>
    <div
      class="w-52 h-24 px-5 py-3.5 flex items-center content-center bg-violet-50 hover:bg-indigo-600 hover:text-white rounded-xl shadow border border-indigo-600 justify-center  gap-5 "
    >
      <img class="h-full" :src="imageSrc[category.id - 1]" border="0"/>
      <div class=" text-center align-middle  text-xl leading-7 tracking-wide">
        {{ category.mainCategory }}
        
      </div>
    </div>
  </div>
</template>

<style></style>
