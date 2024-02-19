<!-- @format -->

<script setup>
import { uploadFile } from "../firebase/firebase";

const activity = ref([]);
const categories = ref([]);
const activityImages = ref([]);
let formData = new FormData();
const router = useRouter();
const errorDetails = ref([]);

onBeforeMount(async () => {
  const route = useRoute();
  const id = route.params.id;
  await getActivityByID(id);
  await getCategories();
  await getActivityImages(id);
});

const getActivityImages = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/${id}/images`,
    {
      method: "GET",
    }
  );
  if (res.status === 200) {
    activityImages.value = await res.json();
    console.log("value " + activity.value);
  } else {
    console.log("cannot get data");
  }
};

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

const validateGoogleMapLink = (googleMapLink) => {
  const regex = /^https:\/\/maps\.app\.goo\.gl\/[^\s]+$/;
  const regex1 = /^https:\/\/www\.google\.co\.th\/maps\/.*/;

  const isValid = googleMapLink.match(regex);
  const isValid1 = googleMapLink.match(regex1);

  if (isValid || isValid1) {
    console.log("maps is google map format");
  } else {
    console.log("maps is not google map format");
    errorDetails.value.push("Invalid google link map.");
  }
};

const validateLength = (string, label, length = 0) => {
  console.log("checking " + label + " " + string);
  if (string.length > length) {
    errorDetails.value.push(
      label + " cannot more than " + length + " characters"
    );
  } else if (string.length == 0 || string == undefined || string == null) {
    errorDetails.value.push(label + " is requied");
  }
};

const validateLocation = (format, location, googleMapLink) => {
  console.log("location " + location);
  console.log("googleMapLink " + googleMapLink);
  if (format == "online") {
    if (location.length == 0 || location.length == null) {
      errorDetails.value.push("meeting platform is requied");
    } else if (googleMapLink.length == 0 || googleMapLink.length == null) {
      errorDetails.value.push("meeting link is requied");
    }
  } else {
    if (location.length == 0 || location.length == null) {
      errorDetails.value.push("location is requied");
    } else if (googleMapLink.length == 0 || googleMapLink.length == null) {
      errorDetails.value.push("googleMapLink is requied");
    }
  }
};

const validateDateTime = (
  activityDate,
  activityEndDate,
  registrationDate,
  registrationEndDate,
  annnouncementDate
) => {
  let getActivityDate = new Date(activityDate);
  console.log(getActivityDate + " getActivityDate " + getActivityDate);
  let getActivityEndDate = new Date(activityEndDate);
  console.log(activityEndDate + " activityEndDate " + activityEndDate);
  let getregistrationDate = new Date(registrationDate);
  console.log(registrationDate + " getregistrationDate " + getregistrationDate);
  let getRregistrationEndDate = new Date(registrationEndDate);
  console.log(
    registrationEndDate + " registrationEndDate " + registrationEndDate
  );
  let getAnnnouncementDate = new Date(annnouncementDate);
  console.log(annnouncementDate + " annnouncementDate " + annnouncementDate);
  if (getActivityDate > getActivityEndDate) {
    console.log("do if getActivityDate > getActivityEndDate ");
    errorDetails.value.push("activity date must before activity end date");
  } else if (
    getregistrationDate > getRregistrationEndDate ||
    getregistrationDate > getAnnnouncementDate ||
    getregistrationDate > getActivityDate ||
    getregistrationDate > getActivityEndDate
  ) {
    console.log(
      "do else if getregistrationDate > getRregistrationEndDate || getregistrationDate > getAnnnouncementDate || getregistrationDate > getActivityDate || getregistrationDate > getActivityEndDate"
    );
    errorDetails.value.push("registration date is wrong");
  } else if (
    getRregistrationEndDate > getAnnnouncementDate ||
    getRregistrationEndDate > getActivityDate ||
    getRregistrationEndDate > getActivityEndDate
  ) {
    console.log(
      "do else if getRregistrationEndDate > getAnnnouncementDate || getRregistrationEndDate > getActivityDate || getRregistrationEndDate > getActivityEndDate"
    );
    errorDetails.value.push("registration end date is wrong");
  } else if (
    getAnnnouncementDate > getActivityDate ||
    getRregistrationEndDate > getActivityEndDate
  ) {
    console.log(
      "do else if getAnnnouncementDate > getActivityDate || getRregistrationEndDate > getActivityEndDate"
    );
    errorDetails.value.push("announcement date is after the activity date");
  }
};

const validateActivity = (activity) => {
  console.log("checking");
  validateLength(activity.activityName, "activity name", 50);
  validateLength(activity.activityOwnerUserName, "username", 50);
  validateLength(activity.activityBriefDescription, "brief description", 100);
  validateLength(activity.activityDescription, "description", 300);
  if (
    activity.suggestionNotes != undefined ||
    activity.suggestionNotes != null
  ) {
    validateLength(activity.suggestionNotes, "suggestoin Note", 500);
  }
  validateDateTime(
    activity.activityDate,
    activity.activityEndDate,
    activity.registerStartDate,
    activity.registerEndDate,
    activity.announcementDate
  );
  if (activity.activityFormat !== "online") {
    validateGoogleMapLink(activity.googleMapLink);
  }
  validateLocation(
    activity.activityFormat,
    activity.locationName,
    activity.googleMapLink
  );
};

const updateImageUpload = async (images) => {
  console.log("images : " + images);
  images.forEach(async (image) => {
    console.log("imageId : " + image.imageId);

    if (
      image.file !== undefined ||
      image.file !== "" ||
      image.file !== null ||
      image.imageId == 0
    ) {
      let imageFormData = new FormData();
      const downloadUrl = await uploadFile(image.file);
      console.log("downloadUrl : " + (await downloadUrl));
      console.log("imageId : " + image.imageId);
      
      imageFormData.append(
        "updateImage",
        new Blob([JSON.stringify(downloadUrl)], { type: "application/json" })
      );
      // imageFormData.append("updateImage", await downloadUrl);

      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/activities/images/${image.imageId}`,
        {
          method: "PATCH",
          body: imageFormData,
        }
      );

      if (res.status === 200) {
        alert("your image have added!!");
      } else {
        console.log("cannot get data");
      }
    }
  });
};

//PATCH
const updateActivity = async (activityId, activity, file) => {
  errorDetails.value = [];
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
  );
  if (res.status === 200) {
    alert("you successfully update activity !!");
    await updateImageUpload(file);
    await router.push({ path: "/Activities/" });
  } else {
    console.log("cannot get data");
  }
};
</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <CreateEditActivityPost
      status="edit"
      :activity="activity"
      :categories="categories"
      :activityImages="activityImages"
      @updateActivity="updateActivity"
    />
  </div>
</template>

<style></style>
