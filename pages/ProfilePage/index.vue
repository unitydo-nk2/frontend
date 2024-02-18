<!-- @format -->
<script setup>
import { useCounterStore } from '../../stores/counter'

onBeforeMount(async () => {
  await getUser();
});

const user = ref({});
const store = useCounterStore();
const editStatus = ref(false);
const router = useRouter();
let formData = new FormData();

const getUser = async () => {
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

const signOut = () => {
  store.logout();
  router.push({ path: '/login' });
}

const updateUser = async (updatedUser) => {
  console.log(updatedUser)
  let userJson = JSON.stringify({
    name: updatedUser.name,
    surName: updatedUser.surName,
    nickName: updatedUser.nickName,
    gender: updatedUser.gender,
    dateOfBirth: updatedUser.dateOfBirth,
    religion: updatedUser.religion,
    telephoneNumber: updatedUser.telephoneNumber,
    address: updatedUser.address,
    emergencyPhoneNumber: updatedUser.emergencyPhoneNumber,
  });
  const blob = new Blob([userJson], { type: "application/json" });
  formData.append("updateUser", blob);
  
  console.log("Bearer " + store.token);
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/${updatedUser.userId}`,
    {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + store.token,
      },
      body: formData ,
    }
  );
  if (res.status === 200) {
    user.value = await res.json();
    editStatus.value = true;
    await getUser();
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <Profile :user="user" @updateUser="updateUser" @signOut="signOut()" :editSuccess="editStatus" />
</template>

<style></style>
