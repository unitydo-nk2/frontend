<!-- @format -->

<script setup>
const activities = ref([]);
const upComingActivities = ref([]);
const popularActivities = ref([]);
const mainCategories = ref([]);
const activityImages = ref([]);
const loadStatus = ref(true);
const loadPopularActivityStatus  = ref(true);
onBeforeMount(async () => {
  await getActivities();
  await getUpComingActivities();
  await getPopularActivities();
  await getMainCategories();
});

const getActivities = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities/list`, {
    method: "GET",
  });
  if (res.status === 200) {
    activities.value = await res.json();
    loadStatus.value = true;
  } else {
    activities.value = [];
    loadStatus.value = false;
    console.log("cannot get data");
  }
};

const getPopularActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/popular`,
    {
      method: "GET",
    }
  );
  if (res.status === 200) {
    popularActivities.value = await res.json();
  } else {
    loadPopularActivityStatus.value = false;
    popularActivities.value = [];
    console.log("cannot get data");
  }
};

const getUpComingActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/comingSoon`,
    {
      method: "GET",
    }
  );
  if (res.status === 200) {
    upComingActivities.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const getMainCategories = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`, {
    method: "GET",
  });
  if (res.status === 200) {
    mainCategories.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div class="font-primary">
    <div class="flex flex-col bg-gradient-to-r from-slate-700 to-fuchsia-950">
      <div class="overflow-x-scroll hide-scrollbar w-full">
        <CommingSoonSlider :activities="upComingActivities" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center pt-16 pb-24">
      <div
        class="text-center text-gray-400 text-2xl font-bold pb-4 leading-10 tracking-wide"
      >
        Don't miss out!
      </div>
      <div
        class="text-center text-indigo-600 text-5xl font-bold pb-8 leading-10 tracking-wide"
      >
        Popular Activity
      </div>
      <div>
        <CardSlider :activities="popularActivities" :loadStatus="loadPopularActivityStatus"/>
      </div>
    </div>
    <div>
      <div>
        <div element-name="activity-list">
          <div>
            <ActivityListWithFilter
              :activities="activities"
              :mainCategories="mainCategories"
              :activityImages="activityImages"
              :loadStatus="loadStatus"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
