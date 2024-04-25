<!-- @format -->

<script setup>
import { useCounterStore } from "../stores/counter";
const emit = defineEmits(["userRegistration"]);
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

const store = useCounterStore();

const setRole = (role) => {
  newUser.value.role = role;
};

const newUser = ref({
  username: "",
  password: store.isGoogleLogin == true ? "*" : "",
  name: "",
  surName: "",
  nickName: "",
  email: store.email,
  gender: "male",
  dateOfBirth: "",
  religion: "Christianity",
  telephoneNumber: "",
  address: "",
  role: "user",
  emergencyPhoneNumber: "",
  confirmedPassword: store.isGoogleLogin == true ? "*" : "",
});
</script>

<template>
  <div>
    <div class="bg-white dark:bg-gray-900">
      <div class="flex justify-center min-h-screen">
        <div
          class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"
        >
          <div class="w-full">
            <img
              class="w-auto h-18 sm:h-16"
              src="../public/unityDoicologo.ico"
              alt=""
            />
            <h1
              class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white pt-4"
            >
              Join UnityDo ! {{ props.username }}
            </h1>

            <p class="mt-4 text-gray-500 dark:text-gray-400">
              Let’s get you all set up so you can verify your personal account
              and begin setting up your profile.
            </p>
            <div class="mt-6">
              <h1 class="text-unityDo-deep-grey">Register as :</h1>

              <div class="mt-3 md:flex md:items-center md:-mx-2">
                <button
                  @click="setRole('user')"
                  :class="{
                    'bg-unityDo-primary text-white': newUser.role === 'user',
                  }"
                  class="flex justify-center w-full px-6 py-3 mt-4 text-unityDo-primary border border-unityDo-primary hover:bg-unityDo-primary hover:text-white hover:border-transparent rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-unityDo-primary focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span class="mx-2"> User </span>
                </button>
                <button
                  @click="setRole('activityOwner')"
                  :class="{
                    'bg-unityDo-primary text-white':
                      newUser.role === 'activityOwner',
                  }"
                  class="flex justify-center w-full px-6 py-3 mt-4 text-unityDo-primary border border-unityDo-primary hover:bg-unityDo-primary hover:text-white hover:border-transparent rounded-lg md:mt-0 md:w-auto md:mx-2 dark:border-unityDo-primary focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span class="mx-2"> Activity Owner</span>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >First name</label
                >
                <input
                  v-model="newUser.name"
                  type="text"
                  placeholder="John"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Last name</label
                >
                <input
                  v-model="newUser.surName"
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label v-if="newUser.role == 'activityOwner'"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Organization Name</label>
                  <label v-if="newUser.role == 'user'"
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Nickname</label>
                <input
                  v-model="newUser.nickName"
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Date of birth</label
                >
                <input
                  v-model="newUser.dateOfBirth"
                  type="date"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Gender</label
                >
                <select
                  v-model="newUser.gender"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                  <option value="Male">male</option>
                  <option value="Female">female</option>
                  <option value="Lgbtq">lgbtq+</option>
                  <option value="Other">other</option>
                  <option value="ReatherNotToSay">rather not to say</option>
                </select>
              </div>

              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Religion</label
                >
                <select
                  v-model="newUser.religion"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Phone number</label
                >
                <input
                  v-model="newUser.telephoneNumber"
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="XXX-XXX-XXXX"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div>
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Emergency phone number</label
                >
                <input
                  v-model="newUser.emergencyPhoneNumber"
                  type="tel"
                  pattern="[0-9]{10}"
                  placeholder="XXX-XXX-XXXX"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div class="col-span-2">
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Email
                </label>
                <input
                  type="email"
                  v-model="newUser.email"
                  placeholder="unityDo@example.com"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div v-if="store.isGoogleLogin == false">
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Password</label
                >
                <input
                  type="password"
                  v-model="newUser.password"
                  placeholder="Enter your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div v-if="store.isGoogleLogin == false">
                <label
                  class="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                  >Confirm password
                  <span
                    class="text-red-600"
                    v-if="newUser.password != newUser.confirmedPassword"
                  >
                    password not match</span
                  >
                </label>
                <input
                  v-model="newUser.confirmedPassword"
                  type="password"
                  placeholder="Confirmed your password"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="col-span-2">
                <label class="text-sm text-gray-600 dark:text-gray-200"
                  >Your address</label
                >
                <textarea
                  v-model="newUser.address"
                  placeholder="Enter your address"
                  class="block w-full resize-none h-20 px-2 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div class="flex justify-end gap-3 pt-2 col-span-2">
                <button
                  @click="navigateTo('/login/')"
                  class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                >
                  Cancel
                </button>
                <button
                  @click="$emit('userRegistration', newUser)"
                  class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                >
                  Sign Up
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
