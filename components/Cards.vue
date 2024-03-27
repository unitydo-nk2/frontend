<!-- @format -->

<script setup>
const props = defineProps({
  activities: {
    type: Array,
    default: []
  },
})
</script>

<template>
  <div class="flex">
    <div v-for="(activity, index) in activities" :key="index">
      <div
        class="mb-9 w-72 h-96 mr-4 ml-4 overflow-hidden aspect-video cursor-pointer rounded-xl relative group"
      >
        <div
          class="z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 text-white"
        >
          <div
            class="ml-4 mb-28 transform-gpu  text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 transform transition duration-300 ease-in-out"
          ></div>
        </div>

        <img
          alt=""
          class="h-full w-full rounded-xl aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
          src="/image/commingsoon.png"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
