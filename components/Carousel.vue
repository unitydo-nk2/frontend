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
    <div class="carousel w-full">
      <div v-for="(activity, index) in activities" :key="index" :id="'slide' + (index + 1)" class="carousel-item relative w-full">
        <CarouselCard :activity="activity" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a :href="'#slide' + (index === 0 ? activities.length : index)" class="btn btn-circle">❮</a> 
          <a :href="'#slide' + (index === activities.length - 1 ? 1 : index + 2)" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
