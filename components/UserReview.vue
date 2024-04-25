<script setup>
import { useCounterStore } from '../stores/counter'
const store = useCounterStore();

const emit = defineEmits(["createNewReview"]);
const props = defineProps({
  reviews: {
    type: Array,
    default: [],
  },
  isActivityDone:{
    type : Boolean,
    default: true
  },
  isUserRegistered:{
    type : Boolean,
    default: false
  }
});

const selectedRating = ref(1);
const review = ref("")
const setRating = (rate) => {
  selectedRating.value = rate
  };

const userReview = computed(() => {
  return {
    description : review.value,
    rates : selectedRating.value
  };
});


</script>

<template>
  <div class="relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
      <div class="w-full">
        <h2 v-if = "isActivityDone" class="font-manrope font-bold text-4xl text-black mb-8 text-center">
          Our participants reviews
        </h2>
        <h2 v-else class="font-manrope font-bold text-4xl text-black mb-8 text-center">
          Activity still on process
        </h2>
        <ReviewList :reviews="reviews"/>
        <div v-if = "store.role == 'User' && isActivityDone && isUserRegistered" class="pt-8">
          <label
            class="text-gray-600 dark:text-gray-200 flex justify-start font-semibold text-lg"
            >My review</label
          >

          <div class="flex items-center">
            <label
              class="text-gray-600 dark:text-gray-200 flex justify-start font-semibold text-lg"
              >Rates :
            </label>
            <div class="flex items-center">
              <div v-for="index in 5" :key="index">
                <svg
                  @click="setRating(index)"
                  :class="{
                    'text-yellow-300': index <= selectedRating,
                    'text-gray-300 dark:text-gray-500':
                      index > selectedRating,
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
          </div>
          <label
            class="text-gray-600 dark:text-gray-200 flex justify-start font-semibold text-lg"
            >Review :
          </label>
          <textarea
            v-model="review"
            placeholder="Enter your review"
            class="block w-full resize-none h-20 px-2 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
          />
          <div class="flex justify-end gap-3 pt-2">
          <button
            @click="$emit('createNewReview', userReview)"
            class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
          >
            Review
          </button>
        </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style></style>
