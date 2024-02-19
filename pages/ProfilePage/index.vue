<!-- @format -->
<script setup>
import { useCounterStore } from '../../stores/counter'

onBeforeMount(async () => {
  await getUser();
  await getRegisterdActivity();
});

const registeredActivities = ref({});
const store = useCounterStore();
const editStatus = ref(false);
const router = useRouter();

const user = ref({});

const getUser = async () => {
  console.log("getUser Bearer " + store.token)
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + store.token,
    },
  });
  if (res.status === 200) {
    user.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const getRegisterdActivity = async () => {
  console.log("getUser Bearer " + store.token)
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/registered`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + store.token,
    },
  });
  if (res.status === 200) {
    registeredActivities.value = await res.json();
    console.log(registeredActivities.value)
  } else {
    console.log("cannot get data");
  }
};

const signOut = () => {
  store.logout();
  router.push({ path: '/login' });
}

</script>

<template>
  <Profile :user="user" @updateUser="updateUser" @signOut="signOut()" :editSuccess="editStatus" />
</template>

<style></style>
