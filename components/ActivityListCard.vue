<!-- @format -->

<script setup>
const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
      activityImages: {
    type: Array,
    default: [],
  },
});

const getImage = (alt) => {
  const foundObject = props.activityImages.find((obj) => obj.alt === alt);
  return foundObject ? foundObject.imagepath : undefined;
};
</script>

<template>
  <div v-if="activities.length == 0">no activity available</div>
  <div v-else>
    <div class="container mx-auto ">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <nuxt-link :to="`/Activities/${activity.id}`">
            <img
              v-if="activity.imagePath == null"
              src="../public/image/nophoto.png"
              alt="Sunset in the mountains"
              class="w-full h-60 object-cover"
            />
            <img
              v-else
              :src="activity.imagePath"
              alt="Sunset in the mountains"
              class="w-full h-60 object-cover"
            />

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                {{ activity.activityName }}
              </div>
              <p class="text-gray-700 text-base">
                {{ activity.activityBriefDescription }}
              </p>
            </div>

            <!--  -->

            <div class="px-6 pt-4 pb-2">
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {{ activity.mainCategory }}</span
              >
              <span
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {{ activity.category }}</span
              >
            </div>
          </nuxt-link>
          <!-- <button
            type="button"
            class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"
              />
            </svg>
            <span class="sr-only">Icon description</span>
          </button> -->
          <!--  -->
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
