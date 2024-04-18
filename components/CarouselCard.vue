<script setup>
import { dateTimeUtil } from "../functions/dateTimeUtils";

const props = defineProps({
  activity: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="grid grid-cols-2 gap-2 w-full">
    <div>
      <div class="ml-40 mt-24 mb-24 mr-4 w-44 text-white">
        <p class="text-2xl w-80">{{ activity.category }} / {{ activity.mainCategory }} Activities</p>
        <p class="text-5xl font-bold w-64">{{ activity.activityName }}</p>
        <p class="text-sm w-64">
          {{ activity.activityDescription }}
          Activity Date : {{ dateTimeUtil.getDateTime(activity.activityDate) }} 
        </p>
        <div class="mt-4">
          <button
            @click="navigateTo('/Activities/'+activity.activityId+'/')"
            class="bg-white drop-shadow-lg hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-4 px-8 rounded-full"
          >
            Readmore
            <svg
              class="inline w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 12H5m14 0-4 4m4-4-4-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="">
      <div class="mt-24 mb-24 mr-24">
        <img
          v-if="activity.imagePath == null"
          alt=""
          class="w-[770px] h-[434px] object-cover rounded-lg p-"
          src="/image/nophoto.png"
        />
        <img
          v-else
          alt=""
          class="w-[770px] h-[434px] object-cover rounded-lg p-"
          :src="activity.imagePath"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
