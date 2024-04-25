<script  setup>
import { dateTimeUtil } from "../functions/dateTimeUtils";
const props = defineProps({
  review: {
    type: Object,
    default: {},
  },
});

let selectedRating = props.review.rates;
</script>

<template>
  <div>
    <div class="pt-8 max-xl:max-w-2xl max-xl:mx-auto">
      <div class="flex items-center">
        <div v-for="index in 5" :key="index">
          <svg
            @click="setRating(index)"
            :class="{
              'text-yellow-300': index <= selectedRating,
              'text-gray-300 dark:text-gray-500': index > selectedRating,
            }"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <path
              d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
            />
          </svg>
        </div>
      </div>
      <div
        class="flex sm:items-center flex-col min-[400px]:flex-row justify-between gap-5 mb-4"
      >
        <div class="flex items-center gap-3">
          <img
            src="/image/profileImage.svg"
            alt="registant image"
            class="w-8 h-8"
          />
          <h6 class="font-semibold text-lg leading-8 text-indigo-600">
            {{ review.name }} {{ review.surName }}
          </h6>
        </div>
        <p class="font-normal text-lg leading-8 text-gray-400">
          {{ dateTimeUtil.getDateTime(review.createTime) }}
        </p>
      </div>
      <p
        class="font-normal text-lg leading-8 text-gray-400 max-xl:text-justify"
      >
        {{ review.description }}
      </p>
    </div>
  </div>
</template>

<style></style>
