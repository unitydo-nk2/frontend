<script setup>
const emit = defineEmits(["deleteUser"]);

const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
});
</script>

<template>
  <div class="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto w-full">
    <div class="">
      <div class="">
        <p class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
          {{ user.name }} {{ user.surName }}
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

            </div>
            <div class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 m-4">
              <div>
                <label class="block mb-2 text-sm text-gray-600"
                  >First name</label
                >
                <div
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                > {{  user.name }}</div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600"
                  >Last name</label
                >
                <div
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                > {{  user.surName }}</div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600">Nickname</label>
                <div
                  type="text"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                > {{  user.nickName }}</div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600"
                  >Date of birth</label
                >
                <input
                disabled
                  :value="user.dateOfBirth"
                  type="date"
                  placeholder="Snow"
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600">Gender</label>
                <div class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40">
                {{user.gender}}
                </div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600">Religion</label>
                <div
                  class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                {{user.religion}}
              </div>
              </div>

              <div>
                <label class="block mb-2 text-sm text-gray-600"
                  >Phone number</label
                >
                <div class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"> 
                    {{ user.telephoneNumber }}
                </div>
              </div>
              <div>
                <label class="block mb-2 text-sm text-gray-600"
                  >Emergency phone number</label
                >
                <div class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"> 
                    {{ user.emergencyPhoneNumber }}
                </div>
              </div>

              <div class="col-span-2">
                <label class="block mb-2 text-sm text-gray-600">Email </label>
                <div
                  class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg"
                >
                  {{ user.email }}
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
                <div
                  class="block w-full resize-none h-20 px-2 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                >
                {{ user.address }}
                </div>
              </div>
              <!-- <div class="flex justify-end gap-3 pt-2 col-span-2">
                <button
                  @click="$emit('deleteUser', user.userId)"
                  class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                >
                  delete account
                </button>
              </div> -->
            </div>
          </div>
        </div>
        <!-- <hr class="mt-4 mb-8" /> -->
      </div>
    </div>
  </div>
</template>

<style></style>
