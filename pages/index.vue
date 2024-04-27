<!-- @format -->
<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const activities = ref([]);
const comingSoonActivities = ref([]);
const favoriteCategories = ref([]);
const loadStatus = ref(true);
const activitiesRecommendationLoadStatus = ref(true);

onBeforeMount(async () => {
  console.log("role b4 "+store.role)
  if (store.role == "user") {
    await gatFavoriteCategories();
    if(favoriteCategories.value.length == 3){
      await getRecommendedActivities();
    }
  }
  await getcomingSoonActivities();
});

const getcomingSoonActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/comingSoon`,
    { method: "GET" }
  );
  if (res.status === 200) {
    comingSoonActivities.value = await res.json();
    loadStatus.value = true;
  } else {
    comingSoonActivities.value = [];
    loadStatus.value = false;
    console.log("cannot get data");
  }
};

const gatFavoriteCategories = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories/favorite`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + store.token,
    },
  });
  if (res.status === 200) {
    favoriteCategories.value = await res.json();
    activitiesRecommendationLoadStatus.value = true;
  } else {
    activitiesRecommendationLoadStatus.value = false;
    console.log("cannot get data");
  }
};


const getRecommendedActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/recommends`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
    }
  );
  if (res.status === 200) {
    activities.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div class="font-primary">
    <div class="bg-[url('/image/gradientBg.png')] content-none bg-cover">
      <Carousel :activities="comingSoonActivities" :loadStatus="loadStatus" />
    </div>

    <div class="my-8">
      <div class="ml-16 mb-8">
        <div
          class="w-60 text-neutral-500 text-xl font-medium leading-7 tracking-wide"
        >
          Activities you might like
        </div>
        <div
          class="text-indigo-600 text-3xl font-bold leading-10 tracking-wide"
        >
          Recommended Activities
        </div>
      </div>
      <div v-if="store.getRole == 'user' && favoriteCategories.length == 3">
        <div class="ml-16 overflow-x-scroll hide-scrollbar">
          <ImageSlider :activities="activities" :loadStatus="activitiesRecommendationLoadStatus"/>
        </div>
      </div>
      <div v-if="store.getRole == 'user' && favoriteCategories.length != 3">
        <div
          class="text-center text-gray-400 text-2xl font-bold pb-4 leading-10 tracking-wide"
        >
          Let UnityDo know you more ! Add your favorite categories !
        </div>
        <div class="flex justify-center w-full">
          <button
            @click="navigateTo('/UserRegistration/CategoriesFavorite/')"
            class="bg-white drop-shadow-lg mr-16 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-4 px-8 rounded-full"
          >
            Set favorite categories
          </button>
        </div>
      </div>
      <div v-else-if="store.getRole == 'activityOwner' || store.getRole == 'admin'">
        <div
          class="text-center text-gray-400 text-2xl font-bold pb-4 leading-10 tracking-wide"
        >
          This features is for user only !
        </div>
      </div>
      <div v-if="store.getRole == 'Guest'">
        <div
          class="text-center text-gray-400 text-2xl font-bold p-12 leading-10 tracking-wide"
        >
          Please register to unity do to get speacial recommendation activities
        </div>
        <div class="flex justify-center w-full">
          <button
            @click="navigateTo('/Login/')"
            class="bg-white drop-shadow-lg mr-16 hover:bg-indigo-600 text-indigo-600 hover:text-white font-bold py-4 px-8 rounded-full"
          >
            login to Unitydo
          </button>
        </div>
      </div>

      <div class="flex justify-end mr-16">
        <ViewAllActivityButton />
      </div>
    </div>

    <div>
      <Footer />
    </div>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
