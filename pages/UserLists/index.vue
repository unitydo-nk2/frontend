<script setup>
import { useCounterStore } from "../../stores/counter";
const store = useCounterStore();
const users = ref({});
const props = defineProps({
  username: {
    type: String,
    default: undefined,
  },
});

onBeforeMount(async () => {
  await getUserLists();
});

const getUserLists = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/list`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Set content type to JSON
      Authorization: "Bearer " + store.token,
    },
  });
  if (res.status === 200) {
    users.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const deleteUser = async (deleteUserId) => {
  if (
    deleteUserId > 0 &&
    confirm(
      "Are you sure you want to delete this user ? all registration and activities registered will be gone to !"
    ) == true
  ) {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/${deleteUserId}`,
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
      await getUserLists();
    } else {
      alert("fail to delete" + res.status);
    }
  } else {
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBar />
    <ViewAllUsers :users="users" @deleteUser="deleteUser" />
  </div>
</template>

<style></style>
