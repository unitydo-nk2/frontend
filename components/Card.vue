<!-- @format -->

<script setup>
const props = defineProps({
  activity: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="max-w-sm h-full rounded overflow-hidden shadow-lg ">
    <div class="h-full" @click="navigateTo(`/Activities/${activity.id}/`)">
      <div
        class="flex flex-col h-full justify-between hover:bg-slate-50"
        @click="trackHistory(activity.id)"
      >
        <img
          v-if="activity.imagePath == null"
          src="../public/image/nophoto.png"
          alt="Sunset in the mountains"
          class="w-full h-60 object-cover rounded"
        />
        <img
          v-else
          :src="activity.imagePath"
          alt="Sunset in the mountains"
          class="w-full h-60 object-cover rounded"
        />

        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">
            {{ activity.activityName }}
          </div>
          <p class="text-gray-700 text-base">
            {{ activity.activityBriefDescription }}
          </p>
        </div>

        <div class="px-6 pt-4 pb-2 flex items-end">
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
      </div>
    </div>
  </div>
</template>

<style></style>
