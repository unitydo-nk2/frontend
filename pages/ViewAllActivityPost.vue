<!-- @format -->

<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const activities = ref([]);

onBeforeMount(async () => {
  await getActivities();
});

const getActivities = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/management`,
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
// UPDATE
const updateToDone = async (activityId) => {
  const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/activities/updateToDone/${activityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
          Authorization: "Bearer " + store.token,
        },
      }
    );
    if (res.ok) {
      alert("update successfully");
      await getActivities();
    } else {
      let error = JSON.parse(await res.text())
      alert("fail to update : " + await error.detail);
    }
}

// DELETE
const deleteActivity = async (deleteActivityId) => {
  if (
    deleteActivityId > 0 &&
    confirm("Are you sure you want to delete this activity ?") == true
  ) {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/activities/${deleteActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
          Authorization: "Bearer " + store.token,
        },
      }
    );
    if (res.status === 200) {
      alert("delete successfully");
      await getActivities();
    } else {
      alert("fail to delete" + res.status);
    }
  } else {
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBar/>
    <ViewActivityPostList
      @deleteActivity="deleteActivity"
      @updateActivityToDone="updateToDone"
      :activities="activities"
    />
  </div>
</template>
