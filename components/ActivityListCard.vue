<!-- @format -->

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
    activityImages: {
    type: Array,
    default: [],
  },
});

const trackHistory = async (activityId) => {
  let email = store.getUserEmail() == null || store.getUserEmail() == "" ? 'guest' : store.getUserEmail()
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/tracks/${activityId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: email
    }
  );
  if (res.status === 200) {
  } else {
    console.log("cannot get data");
  }
}


const getImage = (alt) => {
  const foundObject = props.activityImages.find((obj) => obj.alt === alt);
  return foundObject ? foundObject.imagepath : undefined;
};


</script>

<template>
  <div v-if="activities.length == 0">no activity available</div>
  <div v-else>
    <div class="container mx-auto ">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div v-for="(activity, index) in activities">
          <Card :activity="activity"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
