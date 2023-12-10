<!-- @format -->

<script setup>
const activity = ref([]);
const categories = ref([]);
let formData = new FormData();
const router = useRouter();
const errorDetails = ref([]);

onBeforeMount(async () => {
  const route = useRoute();
  const id = route.params.id;
  await getActivityByID(id);
  await getCategories();
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

const getCategories = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories/list`, {
    method: "GET",
  });
  if (res.status === 200) {
    categories.value = await res.json();
    console.log("value " + categories.value);
  } else {
    console.log("cannot get data");
  }
};

// const validateGoogleMapLink = (googleMapLink) => {
//   const regex = /https?:\/\/www\.google\.com\/maps\/.*@.*\/.*[z\/]/;
//   const isValid = regex.test(googleMapLink);
//   if (!isValid) {
//     errorDetails.value.push = "Please enter a valid Google Map link.";
//   }
// };

const validateGoogleMapLink = (googleMapLink) => {
  const regex = /^https:\/\/maps\.app\.goo\.gl\/[^\s]+$/;
const regex1 = /^https:\/\/www\.google\.co\.th\/maps\/.*/;

const isValid = googleMapLink.match(regex);
const isValid1 = googleMapLink.match(regex1);

  if (isValid || isValid1) {
          console.log("maps is google map format");
  } else {
    console.log("maps is not google map format");
      errorDetails.value.push('Invalid google link map.')
  }
};


const validateLength = (string, label, length = 0) => {
  console.log("checking "+label+" "+string)
  if (string.length > length) {
    errorDetails.value.push(
      label + " cannot more than " + length + " characters"
    );
  } else if (string.length == 0 || string == undefined || string == null) {
    errorDetails.value.push(label + " is requied");
  }
};

const validateActivity = (activity) => {
  console.log('checking')
  validateLength(activity.activityName, "activity name", 50);
  validateLength(activity.activityOwnerUserName, "username", 50);
  validateLength(activity.activityBriefDescription, "brief description", 100);
  validateLength(activity.activityDescription, "description", 300);
  validateLength(activity.suggestionNotes, "suggestoin Note", 500);
  validateGoogleMapLink(activity.googleMapLink);
};
//PATCH
const updateActivity = async (activityId, activity) => {
  errorDetails.value = []
  validateActivity(activity);
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
    `${import.meta.env.VITE_BASE_URL}/activities/${activityId}`,
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
