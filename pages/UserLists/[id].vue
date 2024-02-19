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

const getUserByID = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/registration/${id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
    }
  );
  if (res.status === 200) {
    user.value = await res.json();
    console.log("value " + user.value);
  } else {
    console.log("cannot get data");
  }
};

const updateRegistrationStatus = async (id, status) => {
  if (
    confirm(
      "Are you sure to update registration id" + id + " to " + status + "."
    ) == true
  ) {
    let updatedStatus = new FormData();
    updatedStatus.append("status", status);
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/users/registration/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
          Authorization: "Bearer " + store.token,
        },
        body: updatedStatus,
      }
    );
    if (res.status === 200) {
      alert("you successfully update registration !!");
    } else {
      console.log("cannot get data");
    }
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <ManageUserDetail
      :user="user"
      @updateRegistrationStatus="updateRegistrationStatus"
    />
  </div>
</template>

<style></style>
