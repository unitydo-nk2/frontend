<!-- @format -->
<script setup>
import { useCounterStore } from "../../stores/counter";
const store = useCounterStore();
const user = ref({});
const props = defineProps({
  username: {
    type: String,
    default: undefined,
  },
});

onBeforeMount(async () => {
  const route = useRoute();
  const id = route.params.id;
  await getUserByID(id);
});


const deleteUserById = async (id) => {
    if (
    confirm("Are you sure you want to delete this user ?") == true
  ){
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
  });
  if (res.status === 200) {
    user.value = await res.json();
    const router = useRoute();
    router.push({ path: '/UserLists/' });   
  } else {
    console.log("cannot get data");
  }
  }
};


const getUserByID = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
  });
  if (res.status === 200) {
    user.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <UserDetail
      :user="user"
      @deleteUser="deleteUserById"
    />
  </div>
</template>

<style></style>
