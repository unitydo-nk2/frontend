<!-- @format -->

<script setup>
import { localStorageUtil } from "~/functions/localStorageUtils";

const activity = ref([]);
const router = useRouter();
let activityId;

onBeforeMount(async () => {
  await getUser();
});

let formData = new FormData();
const user = ref({});

const getUser = async () => {
  console.log("Bearer " + localStorageUtil.get("token"));

  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorageUtil.get("token"),
    },
  });
  if (res.status === 200) {
    user.value = await res.json();
    // router.push({ path: '/Activities/' });
  } else {
    console.log("cannot get data");
  }
};

onBeforeMount(async () => {
  const route = useRoute();
  const id = route.params.id;
  activityId = id;
  await getActivityByID(id);
});

const getActivityByID = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities/${id}`, {
    method: "GET",
  });
  if (res.status === 200) {
    activity.value = await res.json();
    console.log("value " + activity.value);
  } else {
    console.log("cannot get data");
  }
};

const createNewRegistration = async (user) => {
  console.log('id '+ user.userId);
  console.log("Bearer " + localStorageUtil.get("token"));

  const formData = new FormData();
  formData.append("userId", user.userId); // Make sure the name matches the expected name on the backend
  console.log("activityId " + activityId);
  console.log("formData "+formData)
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/${activityId}/registration`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + localStorageUtil.get("token"),
      },
      body: user.userId
        }
  );

  if (res.ok) { // Checking for a successful response
    alert("You have successfully registered!");
    router.push({ path: "/Activities/" });
  } else if(res.status == 400) {
    alert(JSON.parse(await res.text()).detail);
    // console.log("cannot get data " + JSON.parse(await res.text()).detail);
  }
};


</script>

<template>
  <div>
    <div
      class="font-primary flex flex-col justify-center items-center w-full h-auto bg-gradient-to-r from-slate-700 to-fuchsia-950"
    >
      <div
        class="m-4 text-center text-stone-300 text-base font-bold leading-normal tracking-wide"
      >
        {{ Date(activity.activityDate) }} | {{ activity.locationName }}
      </div>
      <div
        class="m-4 text-center text-white text-6xl font-bold leading-14 tracking-wide"
      >
        {{ activity.activityName }}
      </div>
      <div
        class="m-4 text-white text-base font-bold leading-normal tracking-wide"
      >
        ผู้จัดกิจกรรม : {{ activity.activityOwnerUserName }}
      </div>
    </div>
    <RegisterForm @createNewRegistration="createNewRegistration" :user="user" />
  </div>
</template>

<style></style>
