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
    <div class="container mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div
          v-for="(activity, index) in activities"
          :key="index"
          class="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <nuxt-link :to="`/Activities/${activity.id}`">
            <img
              v-if="activity.imagePath == null"
              src="/image/noPhoto.png"
              alt="Sunset in the mountains"
              class="w-full h-60"
            />
            <img
              v-else
              :src="activity.imagePath"
              alt="Sunset in the mountains"
              class="w-full h-60"
            />

            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">
                {{ activity.activityName }}
              </div>
              <p class="text-gray-700 text-base">
                {{ activity.activityBriefDescription }}
              </p>
            </div>
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
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
