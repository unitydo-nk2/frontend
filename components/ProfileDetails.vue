<script setup>
import { useCounterStore } from "../stores/counter";
const emit = defineEmits(["updateUser", "updateFavoriteCategories"]);
const store = useCounterStore();
const categoryList = ref([]);
const isEdit = ref(false);
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

onBeforeMount(async () => {
  await getCategories();
});

const getCategories = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`, {
    method: "GET",
  });
  if (res.status === 200) {
    categoryList.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const editSuccess = computed(() => {
  if (isEdit.value == true) {
    isEdit.value = false;
    props.editSuccess = false;
  }
});

const editToggle = () => {
  isEdit.value ? (isEdit.value = false) : (isEdit.value = true);
};

const userDetails = computed(() => {
  if (!isEdit.value) {
    return {
      userId: props.user.userId,
      username: props.user.username,
      name: props.user.name,
      surName: props.user.surName,
      nickName: props.user.nickName,
      gender: props.user.gender,
      role: props.user.role,
      religion: props.user.religion,
      email: props.user.email,
      telephoneNumber: props.user.telephoneNumber,
      emergencyPhoneNumber: props.user.emergencyPhoneNumber,
      address: props.user.address,
      dateOfBirth: props.user.dateOfBirth,
    };
  } else {
    // Return current user details if isEdit.value is true
    return {
      userId: userDetails.value.userId,
      username: userDetails.value.username,
      name: userDetails.value.name,
      surName: userDetails.value.surName,
      nickName: userDetails.value.nickName,
      gender: userDetails.value.gender,
      role: userDetails.value.role,
      religion: userDetails.value.religion,
      email: userDetails.value.email,
      telephoneNumber: userDetails.value.telephoneNumber,
      emergencyPhoneNumber: userDetails.value.emergencyPhoneNumber,
      address: userDetails.value.address,
      dateOfBirth: userDetails.value.dateOfBirth,
    };
  }
});

const firstPlaceCategory = computed(() => {
  if (props.categories.length === 0) {
    return {
      id: 0,
      userId: null, // or whatever default value you want to assign
      mainCategoryId: null,
      mainCategory: null,
      categoryRank: 1,
    };
  } else {
    return {
      id: props.categories[0]?.id,
      userId: props.categories[0]?.userId,
      mainCategoryId: props.categories[0]?.mainCategoryId,
      mainCategory: props.categories[0]?.mainCategory,
      categoryRank: 1,
    };
  }
});

const secondPlaceCategory = computed(() => {
  if (props.categories.length > 1) {
    return {
      id: props.categories[1]?.id,
      userId: props.categories[1]?.userId,
      mainCategoryId: props.categories[1]?.mainCategoryId,
      mainCategory: props.categories[1]?.mainCategory,
      categoryRank: 2,
    };
  } else {
    return {
      id: 0,
      userId: null, // or whatever default value you want to assign
      mainCategoryId: null,
      mainCategory: null,
      categoryRank: 2,
    };
  }
});

const thirdPlaceCategory = computed(() => {
  if (props.categories.length > 2) {
    return {
      id: props.categories[2]?.id,
      userId: props.categories[2]?.userId,
      mainCategoryId: props.categories[2]?.mainCategoryId,
      mainCategory: props.categories[2]?.mainCategory,
      categoryRank: 3,
    };
  } else {
    return {
      id: 0,
      userId: null, // or whatever default value you want to assign
      mainCategoryId: null,
      mainCategory: null,
      categoryRank: 3,
    };
  }
});

const favoriteCategories = computed(() => {
  if (!isEdit.value) {
    return {
      firstPlaceCategory: firstPlaceCategory.value,
      secondPlaceCategory: secondPlaceCategory.value,
      thirdPlaceCategory: thirdPlaceCategory.value,
    };
  } else {
    // Return current user details if isEdit.value is true
    return {
      firstPlaceCategory: favoriteCategories.value.firstPlaceCategory,
      secondPlaceCategory: favoriteCategories.value.secondPlaceCategory,
      thirdPlaceCategory: favoriteCategories.value.thirdPlaceCategory,
    };
  }
});

const favoriteCategoriesList = computed(() => {
  return [favoriteCategories.value.firstPlaceCategory,
  favoriteCategories.value.secondPlaceCategory,
  favoriteCategories.value.thirdPlaceCategory]
});
</script>

<template>
  <div class="">
    <div class="col-span-8 overflow-hidden rounded-xl pb-20">
      <p class="py-2 pt-5 text-xl text-unityDo-primary font-semibold uppercase">
        {{ userDetails.name }} {{ userDetails.surName }}
      </p>
      <div class="space-y-1">
        <div class="rounded-md border bg-white">
          <div class="flex w-full items-center px-6 py-2 pt-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            <span> Personal Information</span>
            <svg
              v-if="!isEdit"
              @click="editToggle"
              xmlns="http://www.w3.org/2000/svg"
              class="ml-auto h-5 w-5 cursor-pointer text-gray-400 active:scale-95"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <span v-if="!isEdit">edit</span>
          </div>
          <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 m-4">
            <div>
              <label class="block mb-2 text-sm text-gray-600">First name</label>
              <input
                :disabled="!isEdit"
                v-model="userDetails.name"
                type="text"
                placeholder="John"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600">Last name</label>
              <input
                :disabled="!isEdit"
                v-model="userDetails.surName"
                type="text"
                placeholder="Snow"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label v-if="user.role == 'activityOwner'" class="block mb-2 text-sm text-gray-600">Organization Name</label>
              <label  class="block mb-2 text-sm text-gray-600">Nickname</label>
              <input
                :disabled="!isEdit"
                v-model="userDetails.nickName"
                type="text"
                placeholder="Snow"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600"
                >Date of birth
              </label>
              <input
                :disabled="!isEdit"
                v-model="userDetails.dateOfBirth"
                type="date"
                placeholder="Snow"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600">Gender</label>
              <select
                :disabled="!isEdit"
                v-model="userDetails.gender"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="Male">male</option>
                <option value="Female">female</option>
                <option value="Lgbtq">lgbtq+</option>
                <option value="Other">other</option>
                <option value="ReatherNotToSay">rather not to say</option>
              </select>
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-600">Religion</label>
              <select
                :disabled="!isEdit"
                v-model="userDetails.religion"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              >
                <option value="Christianity">Christianity</option>
                <option value="Islam">Islam</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Sikhism">Sikhism</option>
                <option value="Judaism">Judaism</option>
                <option value="etc">etc</option>
              </select>
            </div>

            <div>
              <label class="block mb-2 text-sm text-gray-600"
                >Phone number</label
              >
              <input
                :disabled="!isEdit"
                v-model="userDetails.telephoneNumber"
                type="Number"
                placeholder="XXX-XX-XXXX-XXX"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div>
              <label class="block mb-2 text-sm text-gray-600"
                >Emergency phone number</label
              >
              <input
                :disabled="!isEdit"
                type="Number"
                v-model="userDetails.emergencyPhoneNumber"
                placeholder="Enter your password"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="col-span-2">
              <label class="block mb-2 text-sm text-gray-600">Email </label>
              <div
                class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg"
              >
                {{ userDetails.email }}
              </div>
            </div>
            <!-- <div class="col-span-2">
                <label class="text-sm text-gray-600 "
                  >Your address</label
                >
                <input
                  type="text"
                  placeholder="Enter your password"
                  class="block w-1/2 px-5 py-10 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div> -->
            <div class="col-span-2">
              <label class="text-sm text-gray-600">Your address</label>
              <textarea
                :disabled="!isEdit"
                v-model="userDetails.address"
                placeholder="Enter your password"
                class="block w-full resize-none h-20 px-2 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div class="col-span-2  pb-8">
              <p
                class="py-2 pt-5 text-xl text-unityDo-primary font-semibold uppercase"
              >
                favorite categories
              </p>
              <div class="col-span-2">
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center"
                >
                  <div>
                    1st :
                    <div
                      class="text-center"
                      v-if="
                        favoriteCategories.firstPlaceCategory.id == 0 && !isEdit
                      "
                    >
                      no category selected
                    </div>
                    <select
                      :disabled="!isEdit"
                      v-else
                      v-model="
                        favoriteCategoriesList[0].mainCategoryId
                      "
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option
                        v-for="(category, index) in categoryList"
                        :value="category.id"
                      >
                        {{ category.mainCategory }}
                      </option>
                    </select>
                  </div>

                  <div>
                    2nd :
                    <div
                      class="text-center"
                      v-if="
                        favoriteCategories.secondPlaceCategory.id == 0 &&
                        !isEdit
                      "
                    >
                      no category selected
                    </div>
                    <select
                    :disabled="!isEdit"
                      v-else
                      v-model="
                        favoriteCategoriesList[1].mainCategoryId
                      "
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option
                        v-for="(category, index) in categoryList"
                        :value="category.id"
                      >
                        {{ category.mainCategory }}
                      </option>
                    </select>
                  </div>

                  <div>
                    3rd :
                    <div
                      class="text-center"
                      v-if="
                        favoriteCategories.thirdPlaceCategory.id == 0 && !isEdit
                      "
                    >
                      no category selected
                    </div>
                    <select
                    :disabled="!isEdit"

                      v-else
                      v-model="
                        favoriteCategoriesList[2].mainCategoryId
                      "
                      class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    >
                      <option
                        v-for="(category, index) in categoryList"
                        :value="category.id"
                      >
                        {{ category.mainCategory }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div
                v-if="isEdit == true"
                class="flex justify-end gap-3 pt-8 pb-4 col-span-2"
              >
                <button
                  @click="
                    [
                      $emit('updateUser', userDetails),
                      $emit('updateFavoriteCategories', favoriteCategoriesList),
                      editSuccess(),
                    ]
                  "
                  class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                >
                  submit
                </button>
                <button
                  @click="editToggle"
                  class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
