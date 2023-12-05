<!-- @format -->

<script setup>
const props = defineProps({
  successTitle: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div
    class="box-content p-12 gradient-color rounded-lg drop-shadow-2xl font-Kanit"
  >
    <div class="text-center justify-center">
      <div class="text-blood-bird">{{ props.successTitle }} Successful !</div>
      <span v-if="props.successTitle == 'file remove'"
        >click summit to confirm the changed</span
      >
    </div>
  </div>
</template>

<style scoped>
.gradient-color {
  background-image: linear-gradient(to top, #ffffff, #fbbf98);
}
</style>
