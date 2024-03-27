
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
    <div class="carousel rounded-box col-span-9 gap-8">
        <div class="carousel-item" v-for="(activity, index) in activities" :key="index">
          <ImageSliderCard :activity="activity"/>
        </div>
      </div>
</div>
</template>
 
<style>

</style>