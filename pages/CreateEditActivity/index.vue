<!-- @format -->

<script setup>
const errorDetails = ref([]);
const router = useRouter();
let formData = new FormData();
const categories = ref([]);

onBeforeMount(async () => {
  await getCategories();
});

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

const validateLength = (string, label, length = 0) => {
  console.log("checking "+label+" "+string)
  if (label == "email") {
    validateEmail(string);
  }
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
};

const createNewActivity = async (activity) => {
  errorDetails.value = []
  console.log("createNewRegistration call");
  console.log(activity);
  validateActivity(activity);
  console.log('errorDetails' + errorDetails.value)
  if (errorDetails.value.length == 0) {
    let userName = JSON.stringify(activity.activityOwnerUserName);
    let newActivity = JSON.stringify({
      activityName: activity.activityName,
      activityBriefDescription: activity.activityBriefDescription,
      activityDescription: activity.activityDescription,
      activityDate: activity.activityDate,
      registerStartDate: activity.registerStartDate,
      registerEndDate: activity.registerEndDate,
      amount: activity.amount,
      announcementDate: activity.announcementDate,
      activityStatus: activity.activityStatus,
      isGamification: activity.isGamification == true ? 1 : 0,
      suggestionNotes: activity.suggestionNotes,
      categoryId: activity.category,
      activityFormat: activity.activityFormat,
      activityEndDate: activity.activityEndDate,
    });
    console.log(newActivity);
    let newlocation = JSON.stringify({
      locationName: activity.locationName,
      googleMapLink: activity.googleMapLink,
      locationLongitude: 0,
      locationLatitude: 0,
    });
    const userNameBlob = new Blob([userName], { type: "application/json" });
    const newActivityBlob = new Blob([newActivity], {
      type: "application/json",
    });
    const newlocationBlob = new Blob([newlocation], {
      type: "application/json",
    });
    formData.append("user", userNameBlob);
    formData.append("location", newlocationBlob);
    formData.append("activity", newActivityBlob);
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities`, {
      method: "POST",
      body: formData,
    });
    if (res.status === 200) {
      alert("you successfully create the activity !!");
      router.push({ path: "/Activities" });
    } else {
      console.log("cannot get data");
    }
  } else {
    alert(errorDetails.value);
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <CreateEditActivityPost
      @createActivity="createNewActivity"
      :categories="categories"
    />
  </div>
</template>

<style></style>
