<!-- @format -->

<script setup>
const activity = ref([]);
const errorDetails = ref([]);
const router = useRouter();
let formData = new FormData()
let activityId;

onBeforeMount(async () => {
  const route = useRoute();
  const id = route.params.id;
  activityId = id;
  await getActivityByID(id);
});

const getActivityByID = async (id) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/registration/${id}`,
    { method: "GET" }
  );
  if (res.status === 200) {
    activity.value = await res.json();
    console.log("value " + activity.value);
  } else {
    console.log("cannot get data");
  }
};

const validateEmail = (email) => {
  console.log("email = " + email);
  let validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(validRegex)) {
  } else {
    errorDetails.value.push("email is not in email format");
  }
};

const validateLength = (string, label, length = 0) => {
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

const validateUser = (user) => {
  console.log("checking");
  validateLength(user.name, "name", 50);
  validateLength(user.surName, "surname", 50);
  validateLength(user.username, "username", 50);
  validateLength(user.email, "email", 100);
  // validateLength(user.dateOfBirth, "date of birth");
  validateLength(user.religion, "religion", 100);
  validateLength(user.gender, "gender", 50);
  validateLength(user.address, "address", 500);
  validateLength(user.telephoneNumber, "telephone number", 10);
  validateLength(user.emergencyPhoneNumber, "emergency phone number", 10);
};

const createNewRegistration = async (user) => {
  errorDetails.value = []
  console.log("createNewRegistration call");
  user.username = user.name + "_userName"
  validateUser(user);
  if (errorDetails.value.length == 0) {
    let userJson = JSON.stringify({
      name: user.name,
      surName: user.surName,
      username: user.username,
      password: user.password,
      nickName: user.nickName,
      email: user.email,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth,
      religion: user.religion,
      telephoneNumber: user.telephoneNumber,
      address: user.address,
      emergencyPhoneNumber: user.emergencyPhoneNumber,
    });
    const blob = new Blob([userJson], { type: "application/json" });
    formData.append("user", blob);
    console.log("activityId "+ activityId)
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/activities/${activityId}/registration`,
      { method: "POST", body: formData }
    );
    if (res.status === 200) {
      alert('you successfully create the registrarion !!')
      router.push({ path: '/Activities' });
    } else {
      console.log("cannot get data");
    }
  } else {
    alert(errorDetails.value);
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
    <RegisterForm @createNewRegistration="createNewRegistration" />
  </div>
</template>

<style></style>
