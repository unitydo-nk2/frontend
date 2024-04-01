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
    <!-- <button
      data-drawer-target="sidebar-multi-level-sidebar"
      data-drawer-toggle="sidebar-multi-level-sidebar"
      aria-controls="sidebar-multi-level-sidebar"
      type="button"
      class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          clip-rule="evenodd"
          fill-rule="evenodd"
          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
        ></path>
      </svg>
    </button> -->
    <SideBareDemo />
    <ViewActivityPostList
      @deleteActivity="deleteActivity"
      :activities="activities"
    />
  </div>
</template>
