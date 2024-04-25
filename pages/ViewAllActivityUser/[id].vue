<!-- @format -->

<script setup>
import { useCounterStore } from "../../stores/counter";

const store = useCounterStore();

const users = ref([]);

onBeforeMount(async () => {
  const route = useRoute();
  const activityId = route.params.id;
  await getActivityByID(activityId);
});

const getActivityByID = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/${activityId}/registrants`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
    }
  );
  if (res.status === 200) {
    users.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBar/>
    <ViewSpecificActivityRegistrant :users="users" />
  </div>
</template>

<style></style>
