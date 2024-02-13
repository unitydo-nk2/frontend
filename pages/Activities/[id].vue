<!-- @format -->

<script setup>
const activity = ref([])
const activityImages = ref([]);

onBeforeMount(async () => {
  const route = useRoute()
  const id = route.params.id
  await getActivityByID(id)
  await getActivityImages(id);
})

const getActivityByID = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities/${id}`, {method: 'GET'})
  if (res.status === 200) {
    activity.value = await res.json()
    console.log('value '+activity.value)
  } else {
    console.log('cannot get data')
  }
}

const getActivityImages = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/${id}/images`,
    {
      method: "GET",
    }
  );
  if (res.status === 200) {
    activityImages.value = await res.json();
    console.log("value " + activity.value);
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div>
    <ActivityDetail :activity="activity" :activityImages="activityImages" />
  </div>
</template>

<style></style>
