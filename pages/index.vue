<!-- @format -->
<script setup>
const activities = ref([]);
const comingSoonActivities = ref([]);

onBeforeMount(async () => {
  await getActivities();
  await getcomingSoonActivities();
});

const getcomingSoonActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/comingSoon`,
    { method: "GET" }
  );
  if (res.status === 200) {
    comingSoonActivities.value = await res.json();
    console.log("value " + comingSoonActivities.value);
  } else {
    console.log("cannot get data");
  }
};

const getActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/recommends`,
    { method: "GET" }
  );
  if (res.status === 200) {
    activities.value = await res.json();
    console.log("value " + activities.value);
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div class="font-primary">
    <div class="bg-[url('/image/gradientBg.png')] content-none bg-cover">
      <Carousel :activities="comingSoonActivities"/>
    </div>
   

   <div class="my-8">
    <div class="ml-16 mb-8">
      <div class="w-60 text-neutral-500 text-xl font-medium leading-7 tracking-wide">
        Activities you might like
      </div>
      <div class="text-indigo-600 text-3xl font-bold leading-10 tracking-wide">
        Recommended Activities
      </div>
    </div>
    <div class="ml-16 overflow-x-scroll hide-scrollbar">
      <ImageSlider :activities="activities" />
    </div>
    <div class="flex justify-end">
        <ViewAllActivityButton/>
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
