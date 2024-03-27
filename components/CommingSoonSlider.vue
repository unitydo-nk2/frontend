<script setup>
const props = defineProps({
  activities: {
    type: Array,
    default: []
  },
})
</script>

<template>
  <div>
    <div class="grid px-4 py-8 mx-auto lg:gap-2 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="place-self-center lg:col-span-3">
        <div
          class="flex justify-end text-6xl font-bold leading-10 tracking-wide text-white"
        >
          Upcoming
        </div>
        <div
          class="pt-4 text-3xl font-bold leading-10 tracking-wide text-white"
        >
          Activities
        </div>
        <div class="w-full text-xl font-normal leading-tight text-stone-300">
          View up comming event here ! <br />
          Don't forget to register
        </div>
      </div>
      <div class="overflow-x-scroll hide-scrollbar w-full lg:col-span-9">
        <ImageSlider :activities="activities"/>
      </div>
    </div>
  </div>
</template>

<style></style>
