<script setup>
import { useCounterStore } from "../stores/counter";
const emit = defineEmits(["signOut", "updateUser"]);
const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
  editSuccess: {
    type: Boolean,
    default: false,
  },
});

let formData = new FormData();
const status = ref("Profile");
const store = useCounterStore();
const favActivities = ref([]);
const registeredActivity = ref([]);
const userDetails = ref({});
const errorDetails = ref([]);

onBeforeMount(async () => {
  await getUser();
  await getFavorite();
  await getRegistered();
});

const validateLength = (string, label, length = 0) => {
  console.log("checking " + label + " " + string + " " + length);
  if (string.length > length) {
    errorDetails.value.push(
      label + " cannot more than " + length + " characters"
    );
  } else if (string.length == 0 || string == undefined || string == null) {
    errorDetails.value.push(label + " is requied");
  }
};

const validateUser = (user) => {
  errorDetails.value = [];
  console.log("checking");
  validateLength(user.name, "name", 50);
  validateLength(user.surName, "surname", 50);
  validateLength(user.username, "username", 50);
  validateLength(user.address, "address", 500);
  validateLength(user.telephoneNumber, "telephone number", 10);
  validateLength(user.emergencyPhoneNumber, "emergency phone number", 10);
};

const setStatus = (s) => {
  status.value = s;
};

const getUser = async () => {
  console.log("getUser Bearer " + store.token);
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + store.token,
    },
  });
  if (res.status == 200) {
    userDetails.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const getRegistered = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/registered`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json", // Set content type to JSON
      Authorization: "Bearer " + store.token,
    },
  });
  if (res.status === 200) {
    registeredActivity.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const getFavorite = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/favorite`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
    }
  );
  if (res.status === 200) {
    favActivities.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const updateUser = async (updatedUser) => {
  validateUser(updatedUser);
  if (errorDetails.value.length == 0) {
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
        body: formData,
      }
    );
    if (res.status === 200) {
      userDetails.value = await res.json();
      alert("Edit success");
      store.changeUserName(updatedUser.name+" "+updatedUser.surName)
    } else {
      alert("Edit failed");
      console.log("cannot get data");
    }
  } else {
    alert("Validation errors :" + errorDetails.value);
  }
};
</script>

<template>
  <div class="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
    <!-- <h1 class="border-b py-6 text-4xl font-semibold" style="display: inline-block;">Setting</h1>
<div style="display: inline-block; margin-left: auto;">
  <a @click="">Sign out</a>
</div> -->
    <div class="flex justify-between">
      <p class="text-4xl font-semibold pt-6">{{ status }}</p>
      <button
        @click="$emit('signOut')"
        class="pt-6 text-red-800 hover:underline dark:text-red-800"
      >
        Sign out
      </button>
    </div>
    <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>
    <ul class="flex border-b">
      <li class="-mb-px mr-1">
        <a
          @click="setStatus('Profile')"
          v-if="status == 'Profile'"
          class="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold border-l border-t border-r"
        >
          Profile 
        </a>
        <a
          @click="setStatus('Profile')"
          v-else
          class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
        >
          Profile
        </a>
      </li>
      <div v-if="(store.role == 'User')">
        <li  class="mr-1">
          <a
            @click="setStatus('Favorite')"
            v-if="status == 'Favorite'"
            class="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold border-l border-t border-r"
          >
            Favorite
          </a>
          <a
            @click="setStatus('Favorite')"
            v-else
            class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Favorite
          </a>
        </li>
      </div>
      <div v-if="(store.role == 'User')">
        <li class="mr-1">
          <a
            @click="setStatus('Registered Activity')"
            v-if="status == 'Registered Activity'"
            class="bg-white inline-block rounded-t py-2 px-4 text-blue-700 font-semibold border-l border-t border-r"
          >
            Registered Activity
          </a>
          <a
            @click="setStatus('Registered Activity')"
            v-else
            class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
          >
            Registered Activity
          </a>
        </li>
      </div>
    </ul>
    <div class="grid grid-cols-8 pt-3 pb-10 pl-60 sm:grid-cols-10">
      <!-- 
    <div class="col-span-2 hidden sm:block">
      <ul>
        <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Profile</li>
        <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Favorite</li>
      </ul>
    </div> -->
      <div class="col-span-8 overflow-hidden rounded-xl pb-20">
        <div v-if="status == 'Profile'">
          <ProfileDetails :user="userDetails" @updateUser="updateUser" />
        </div>
        <div v-else-if="status == 'Favorite'">
          <ActivityFavorite :activities="favActivities" />
        </div>
        <div v-else-if="status == 'Registered Activity'">
          <ActivityFavorite
            :activities="registeredActivity"
            :isRegistered="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
