<!-- @format -->

<script setup>
import { useCounterStore } from '../stores/counter'

const store = useCounterStore();
const activity = ref({})
const activityImages = ref([]);
const similarActivies = ref([]);
const reviews = ref([]);
const isUserRegistered = ref(false)
const errorDescription = ref()
const isFavorite = ref(false)

onBeforeMount(async () => {
  const route = useRoute()
  const id = route.params.id
  if(store.role == 'user'){
    await getUserRegisteredStatus(id)
    await getUserFavorite(id)
  }
  await getReviews(id);
  await getActivityByID(id);
  await getActivityImages(id);
  await getSimilarActivities(id);
})

const getReviews = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/review/${activityId}`,
    {
      method: "GET",
      headers: {
      Authorization: "Bearer " + store.token,
    },
    }
  );
  if (res.status === 200) {
    reviews.value = await res.json();
  } else {
    console.log("cannot get reviews");
  }
};

const getUserFavorite = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/${activityId}/isFavorite`,
    {
      method: "GET",
      headers: {
      Authorization: "Bearer " + store.token,
    },
    }
  );
  if (res.status === 200) {
    isFavorite.value = await res.json();
  } else {
    isFavorite.value = false;
    console.log("cannot get user favorite");
  }
};


const getUserRegisteredStatus = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/isRegistered/${activityId}`,
    {
      method: "GET",
      headers: {
      Authorization: "Bearer " + store.token,
    },
    }
  );
  if (res.status === 200) {
    isUserRegistered.value = await res.json();
  } else {
    isUserRegistered.value = false;
    console.log("cannot get user information");
  }
};

const getSimilarActivities = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities/similar/${id}`, {method: 'GET'})
  if (res.status === 200) {
    similarActivies.value = await res.json()
  } else {
    similarActivies.value = []
    console.log('cannot get similar activities')
  }
}

const getActivityByID = async (id) => {
  errorDescription.value = '';
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities/${id}`, {method: 'GET'})
  if (res.status === 200) {
    activity.value = await res.json()
    store.changeActivity(activity.value)
    // console.log('value '+activity.value)
  } else if (res.status == 404) {
    navigateTo("/Error")
    errorDescription.value ="UnityDo cannot find the activity id "+id
  } else {
    navigateTo("/Error")
    errorDescription.value = "UnityDo response you with status "+res.status+" please try again."
  }
}

const getActivityImages = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/${id}/images`,
    {
      method: "GET",
    }
  );
  if (res.status === 200) {
    activityImages.value = await res.json();
  } else {
    activityImages.value = [];
    console.log("cannot get data");
  }
};
</script>

<template>
    <div>
    <ActivityDetail :reviews="reviews" :activity="activity" :activityImages="activityImages" :similarActivities="similarActivies" :isUserRegistered="isUserRegistered" :isFavorite="isFavorite"/>
    </div>
</template>

<style></style>
