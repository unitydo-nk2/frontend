<script setup>
const props = defineProps({
  reviews: {
    type: Array,
    default: [],
  },
});
</script>
 
<template>
  <div v-if="reviews.length == 0">no review</div>    
  <div v-else> 
    <div
          v-for="(review, index) in reviews"
          :key="index">
          <Review :review="review"/> 
    </div>
  </div>

</template>
 
<style>

</style>