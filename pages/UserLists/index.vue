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
    console.log("value " + users.value);
  } else {
    console.log("cannot get data");
  }
};
</script>
 
<template>
      <div class="flex flex-row">
<SideBareDemo />
<ViewAllUsers :users="users"/>
      </div>
</template>
 
<style>

</style>