<!-- @format -->

<script setup>
import { uploadFile } from "../firebase/firebase";
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const errorDetails = ref([]);
const router = useRouter();
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
    errorDetails.value.push("Invalid activity date!");
  } else if (
    getregistrationDate > getRregistrationEndDate ||
    getregistrationDate > getAnnnouncementDate ||
    getregistrationDate > getActivityDate ||
    getregistrationDate > getActivityEndDate
  ) {
    console.log(
      "do else if getregistrationDate > getRregistrationEndDate || getregistrationDate > getAnnnouncementDate || getregistrationDate > getActivityDate || getregistrationDate > getActivityEndDate"
    );
    errorDetails.value.push("Invalid registration date!");
  } else if (
    getRregistrationEndDate > getAnnnouncementDate ||
    getRregistrationEndDate > getActivityDate ||
    getRregistrationEndDate > getActivityEndDate
  ) {
    console.log(
      "do else if getRregistrationEndDate > getAnnnouncementDate || getRregistrationEndDate > getActivityDate || getRregistrationEndDate > getActivityEndDate"
    );
    errorDetails.value.push("Invalid registration end date!");
  } else if (
    getAnnnouncementDate > getActivityDate ||
    getRregistrationEndDate > getActivityEndDate
  ) {
    console.log(
      "do else if getAnnnouncementDate > getActivityDate || getRregistrationEndDate > getActivityEndDate"
    );
    errorDetails.value.push("Invalid announcement date!");
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

const imageUpload = async (images, activityId) => {
  console.log("imageUpload is called");
  console.log("activityId " + activityId);
  await images.forEach(async (image) => {
    if (image.file !== undefined || image.file !== "" || image.file !== null) {
      let imageFormData = new FormData();
      let getImagePath = await uploadFile(image.file);

      let newImage = {
        activityId: activityId,
        label: image.alt,
        alt: image.alt,
        imagePath: await getImagePath,
      };

      imageFormData.append(
        "image",
        new Blob([JSON.stringify(newImage)], { type: "application/json" })
      );

      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/activities/images`,
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + store.token,
          },
          body: imageFormData,
        }
      );

      if ((await res.status) === 200) {
        alert("your image have added!!");
      } else {
        console.log("cannot get data");
      }
    }
  });
};

const createNewActivity = async (activity, file) => {
  errorDetails.value = [];
  console.log("createNewRegistration call");
  validateActivity(activity);
  console.log("errorDetails" + errorDetails.value);
  if (errorDetails.value.length == 0) {
    const formData = new FormData();

    const newActivity = {
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
    };

    const newLocation = {
      locationName: activity.locationName,
      googleMapLink: activity.googleMapLink,
      locationLongitude: 0,
      locationLatitude: 0,
    };

    formData.append(
      "activity",
      new Blob([JSON.stringify(newActivity)], { type: "application/json" })
    );
    formData.append(
      "location",
      new Blob([JSON.stringify(newLocation)], { type: "application/json" })
    );

    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + store.token,
      },
      body: formData,
    });

    if (res.ok) {
      alert("You successfully created the activity!");
      let data = await res.json();
      console.log("data " + JSON.stringify(data));
      await imageUpload(file, data.activityId);
      await router.push({ path: "/Activities/" });
    } else {
      console.log("Cannot get data");
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
