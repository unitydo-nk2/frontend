<script setup>
const props = defineProps({
  description: {
    type: String,
    default: 'Look like there is some error occurs.',
  },
});
</script>

<template>
  <!-- This is an example component -->
  <div class="h-screen w-full flex items-center ">
    <div
      class="container flex flex-col md:flex-row items-center justify-center"
    >
      <div class="max-w-md">
        <div class="text-5xl mb-4 font-dark font-bold text-unityDo-primary">Oops !</div>
        <p
          class="text-2xl md:text-3xl font-medium leading-normal text-unityDo-cyan"
        >

        {{ props.description }}
        </p>
        <p class="mb-8 text-unityDo-middle-grey">
          But dont worry, you can find plenty of other things on our homepage.
        </p>

        <button
          @click="navigateTo(`/`)"
          class="px-4 inline py-3 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-unityDo-primary active:bg-unityDo-primary hover:bg-unityDo-primary"
        >
          back to homepage
        </button>
      </div>
      <div>
        <img
          class="object-contain hover:object-scale-down h-80 w-90"
          src="https://i.ibb.co/5YKDr9Y/Asset-3-3x.png
"
          alt="Asset-1-3x"
          border="0"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
