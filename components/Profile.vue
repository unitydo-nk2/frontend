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
  categories: {
    type: Array,
    default: [],
  },
});

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
    let formData = new FormData();
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
      store.changeUserName(updatedUser.name + " " + updatedUser.surName);
    } else {
      alert("Edit failed");
      console.log("cannot get data");
    }
  } else {
    alert("Validation errors :" + errorDetails.value);
  }
};

const updateFavoriteCategories = async (favoriteCategories) => {
  let checkSum = 0;
  await favoriteCategories.forEach(async (category, index) => {
    let formData = new FormData();
    if (category.id == 0) {
      if (category.mainCategoryId != null) {
        let favoriteCategoryJson = JSON.stringify({
          userEmail: store.getUserEmail(),
          mainCategoryId: category.mainCategoryId,
          categoryRank: category.categoryRank,
        });
        const blob = new Blob([favoriteCategoryJson], {
          type: "application/json",
        });
        formData.append("favoriteCategory", blob);
        //create new favorite categories
        const res = await fetch(
          `${import.meta.env.VITE_BASE_URL}/auth/favoriteCategory`,
          { method: "POST", body: formData }
        );
        if (res.ok) {
          checkSum++;
        } else if (res.status === 400) {
          const data = await res.json();
          alert(data.message || "Bad request");
        } else {
          alert(res.status + " error");
        }
      }
    } else {
      alert(
        "!categoryValue.id == 0 update " +
          category.id +
          " to " +
          category.mainCategoryId
      );

      //update existing favorite categories
      let favoriteCategoryJson = JSON.stringify({
        id: category.id,
        mainCategoryId: category.mainCategoryId,
        categoryRank: category.categoryRank,
      });

      const blob = new Blob([favoriteCategoryJson], {
        type: "application/json",
      });

      formData.append("favoriteCategory", blob);

      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/categories/favoriteCategory/${
          category.id
        }`,
        {
          method: "PATCH",
          headers: {
            Authorization: "Bearer " + store.token,
          },
          body: formData,
        }
      );
      if (res.ok) {
        checkSum++;
      } else {
        alert("Edit failed with error " + res.status);
        console.log("cannot get data");
      }
    }
  });
  if (checkSum == 3) {
    alert("FavoriteCategories updated");
  }
};
</script>

<template>
  <div>
    <div class="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
      <div class="flex justify-between border-b">
        <h1 class="py-6 text-4xl font-semibold">Profile</h1>
        <button
          @click="$emit('signOut')"
          class="pt-6 text-red-800 hover:underline dark:text-red-800"
        >
          Sign out
        </button>
      </div>
      <div class="grid grid-cols-8 pt-3 pb-10">
        <div class="relative my-4 w-56 sm:hidden">
          <input
            class="peer hidden"
            type="checkbox"
            name="select-1"
            id="select-1"
          />
          <label
            for="select-1"
            class="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
            >Teams
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        <div class="col-span-2 hidden sm:block">
          <ul>
            <li
              v-if="status == 'Profile'"
              @click="setStatus('Profile')"
              class="mt-5 cursor-pointer border-l-2 border-l-unityDo-primary px-2 py-2 font-semibold text-unityDo-primary transition hover:border-l-unityDo-primary hover:text-unityDo-primary"
            >
              Profile
            </li>
            <li
              v-else
              @click="setStatus('Profile')"
              class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-unityDo-primary hover:text-unityDo-primary"
            >
              Profile
            </li>
            <div v-show="store.role == 'user'">
              <li
                v-if="status == 'Favorite'"
                @click="setStatus('Favorite')"
                class="mt-5 cursor-pointer border-l-2 border-l-unityDo-primary px-2 py-2 font-semibold text-unityDo-primary transition hover:border-l-unityDo-primary hover:text-unityDo-primary"
              >
                Favorite
              </li>
              <li
                v-else
                @click="setStatus('Favorite')"
                class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-unityDo-primary hover:text-unityDo-primary"
              >
                Favorite
              </li>
              <li
                v-if="status == 'Registered Activity'"
                @click="setStatus('Registered Activity')"
                class="mt-5 cursor-pointer border-l-2 border-l-unityDo-primary px-2 py-2 font-semibold text-unityDo-primary transition hover:border-l-unityDo-primary hover:text-unityDo-primary"
              >
                Registered Activity
              </li>
              <li
                v-else
                @click="setStatus('Registered Activity')"
                class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-unityDo-primary hover:text-unityDo-primary"
              >
                Registered Activity
              </li>
            </div>
          </ul>
        </div>
        <div class="col-span-6">
          <div v-if="status == 'Profile'">
            <ProfileDetails
              :user="userDetails"
              @updateUser="updateUser"
              @updateFavoriteCategories="updateFavoriteCategories"
              :categories="categories"
            />
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
  </div>
</template>

<style></style>
