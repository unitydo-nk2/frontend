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
    console.log("value " + activities.value);
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
      alert("fail to update" + res.status + await res.json().title);
    }
}

// DELETE
const deleteActivity = async (deleteActivityId) => {
  console.log("delete" + deleteActivityId);
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
    <SideBareDemo />
    <ViewActivityPostList
      @deleteActivity="deleteActivity"
      @updateActivityToDone="updateToDone"
      :activities="activities"
    />
  </div>
</template>
