<script setup>
const activity = ref([]);
const categories = ref([]);
let formData = new FormData();
const router = useRouter();

onBeforeMount(async () => {
  const route = useRoute();
  const id = route.params.id;
  await getActivityByID(id);
  await getCategories();
});

const getActivityByID = async (id) => {
  const res = await fetch(`http://localhost:8080/api/activities/${id}`, {
    method: "GET",
  });
  if (res.status === 200) {
    activity.value = await res.json();
    console.log("value " + activity.value);
  } else {
    console.log("cannot get data");
  }
};

const getCategories = async () => {
  const res = await fetch(`http://localhost:8080/api/categories/list`, {
    method: "GET",
  });
  if (res.status === 200) {
    categories.value = await res.json();
    console.log("value " + categories.value);
  } else {
    console.log("cannot get data");
  }
};

//PATCH
const updateActivity = async (activityId, activity) => {
  let updatedActivity = JSON.stringify({
    activityName: activity.activityName,
    activityBriefDescription: activity.activityBriefDescription,
    activityDescription: activity.activityDescription,
    activityDate: activity.activityDate,
    registerStartDate: activity.registerStartDate,
    registerEndDate: activity.registerEndDate,
    amount: activity.amount,
    announcementDate: activity.announcementDate,
    activityStatus: activity.activityStatus,
    suggestionNotes: activity.suggestionNotes,
    categoryId: activity.category,
    activityFormat: activity.activityFormat,
    activityEndDate: activity.activityEndDate,
  });

  let newlocation = JSON.stringify({
    locationName: activity.locationName,
    googleMapLink: activity.googleMapLink,
    locationLongitude: 0,
    locationLatitude: 0,
  });
  const newActivityBlob = new Blob([updatedActivity], {
    type: "application/json",
  });
  const newlocationBlob = new Blob([newlocation], {
    type: "application/json",
  });

  formData.append("updateLocation", newlocationBlob);
  formData.append("updateActivity", newActivityBlob);

  const res = await fetch(
    `http://localhost:8080/api/activities/${activityId}`,
    {
      method: "PATCH",
      body: formData,
    }
  )
  if (res.status === 200) {
    alert("you successfully update activity !!");
    router.push({ path: "/Activities" });
  } else {
    console.log("cannot get data");
  }
}

</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <CreateEditActivityPost
      status="edit"
      :activity="activity"
      :categories="categories"
      @updateActivity="updateActivity"
    />
  </div>
</template>

<style></style>
