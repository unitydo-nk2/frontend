<!-- @format -->

<script setup>
import { useCounterStore } from "../../stores/counter";
const store = useCounterStore();
const activities = ref([]);

onBeforeMount(async () => {
  await getActivities();
});

const getActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/userRegistration`,
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
    console.log("value " + activities.value);
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <ViewActivityUser :activities="activities" />
  </div>
</template>

<style></style>
