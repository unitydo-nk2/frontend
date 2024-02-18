<script setup>
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

const isEdit = ref(false);
const iseditSuccess = ref(props.editSuccess);

const editSuccess = computed(() => {
  if (iseditSuccess.value == true) {
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

// const userDetails = computed(() => {
//   return {
//     userId: props.user.userId,
//     username: props.user.username,
//     name: props.user.name,
//     surName: props.user.surName,
//     nickName: props.user.nickName,
//     gender: props.user.gender,
//     role: props.user.role,
//     religion: props.user.religion,
//     email: props.user.email,
//     telephoneNumber: props.user.telephoneNumber,
//     emergencyPhoneNumber: props.user.emergencyPhoneNumber,
//     address: props.user.address,
//     dateOfBirth: props.user.dateOfBirth,
//   };
// });
</script>

<template>
  <div class="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
    <!-- <h1 class="border-b py-6 text-4xl font-semibold" style="display: inline-block;">Setting</h1>
<div style="display: inline-block; margin-left: auto;">
  <a @click="">Sign out</a>
</div> -->
    <div class="flex justify-between">
      <p class="text-4xl font-semibold pt-6">Profile</p>
      <button
        @click="$emit('signOut')"
        class="pt-6 text-red-800 hover:underline dark:text-red-800"
      >
        Sign out
      </button>
    </div>

    <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>

    <div class="grid grid-cols-8 pt-3 pb-10 pl-60 sm:grid-cols-10">
      <!-- 
    <div class="col-span-2 hidden sm:block">
      <ul>
        <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Profile</li>
        <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Favorite</li>
      </ul>
    </div> -->
      <div class="col-span-8 overflow-hidden rounded-xl pb-20">
        <p class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
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
              <span> ข้อมูลส่วนตัว</span>
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
                <label class="block mb-2 text-sm text-gray-600"
                  >First name</label
                >
                <input
                  :disabled="!isEdit"
                  v-model="userDetails.name"
                  type="text"
                  placeholder="John"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600"
                  >Last name</label
                >
                <input
                  :disabled="!isEdit"
                  v-model="userDetails.surName"
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600">Nickname</label>
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
                  >Date of birth</label
                >
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
                  <option value="male">male</option>
                  <option value="female">female</option>
                  <option value="lgbtq">lgbtq+</option>
                  <option value="reatherNotToSay">rather not to say</option>
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
                  type="text"
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
                  type="text"
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
              <div
                v-if="isEdit == true"
                class="flex justify-end gap-3 pt-2 col-span-2"
              >
                <button
                  @click="$emit('updateUser', userDetails)"
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
        <p class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
          Favorite Activity
        </p>
        <div class="space-y-1">
          <div class="rounded-md border bg-white">
            <div class="flex w-full items-center px-6 py-2 pt-8">
              <span> กิจกรรมที่คุณชื่นชอบ</span>
            </div>
            <div></div>
          </div>
        </div>

        <!-- <hr class="mt-4 mb-8" /> -->
      </div>
    </div>
  </div>
</template>

<style></style>
