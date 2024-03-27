<script setup>
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <div
      class="w-52 h-24 px-5 py-3.5 bg-violet-50 hover:bg-indigo-600 hover:text-white rounded-xl shadow border border-indigo-600 justify-start items-center gap-5 flex"
    >
      <img class="w-11 h-11" src="https://via.placeholder.com/46x46" />
      <div
        class="w-fit h-6 text-center  text-xl leading-7 tracking-wide"
      >
        {{ category.mainCategory }}
      </div>
    </div>
  </div>
</template>

<style></style>
