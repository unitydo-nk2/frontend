<!-- @format -->

<script setup>
const emit = defineEmits(["createNewRegistration"]);

const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
});

const userDetails = computed(() => {
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
});

</script>

<template>
  <div>
    <div class="font-primary flex flex-col justify-center items-center">
      <div class="m-4 text-black text-3xl font-bold tracking-wide">
        Activity Registration
      </div>
      <!-- ลูกชิ้น 3 ลูก -->
      <div
        class="gap-44 w-9/12 h-24 px-3 py-3 bg-white rounded-xl shadow justify-center items-center inline-flex"
      >
        <!-- ลูกแรก -->
        <div class="justify-start items-center flex">
          <div class="w-12 h-12 relative">
            <div
              class="w-8 h-8 left-0 top-0 absolute bg-indigo-600 rounded-full"
            ></div>
            <div
              class="w-2.5 h-8 left-[12px] top-[2px] absolute text-white text-xl font-bold tracking-wide"
            >
              1
            </div>
          </div>
          <div
            class="w-fit flex text-indigo-600 text-xl font-bold leading-7 tracking-wide"
          >
            Personal Information
          </div>
        </div>
        <!-- ลูกสอง -->
        <!-- <div class="justify-start items-center flex">
          <div class="w-12 h-12 relative">
            <div
              class="w-8 h-8 left-0 top-0 absolute bg-slate-300 rounded-full"
            ></div>
            <div
              class="w-2.5 h-8 left-[12px] top-[2px]  absolute text-white text-xl font-bold tracking-wide"
            >
              2
            </div>
          </div>
          <div
            class="w-32 flex text-neutral-500  text-xl font-bold leading-7 tracking-wide"
          >
            ตอบคำถาม
          </div>
        </div> -->
        <!-- ลูกสาม -->
        <!-- <div class="justify-start items-center flex">
          <div class="w-12 h-12 relative">
            <div
              class="w-8 h-8 left-0 top-0 absolute bg-slate-300 rounded-full"
            ></div>
            <div
              class="w-2.5 h-8 left-[12px] top-[2px]  absolute text-white text-xl font-bold tracking-wide"
            >
              3
            </div>
          </div>
          <div
            class="w-32 flex text-neutral-500  text-xl font-bold leading-7 tracking-wide"
          >
            สำเร็จ !
          </div>
        </div> -->
      </div>
      <div class="space-y-1 w-9/12 mt-8 mb-8">
        <div class="rounded-md border bg-white">
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
              <div class="flex justify-end gap-3 pt-2 col-span-2">
                <button
                  @click="$emit('createNewRegistration', user)"
                  class="font-primary w-56 h-14 px-5 py-3 bg-indigo-600  hover:bg-indigo-800 rounded-xl justify-start items-center gap-5 inline-flex"
                >
                  <div
                    class="flex justify-center items-center w-60 text-center text-white text-base font-normal font-['DB Heavent'] leading-7 tracking-wide"
                  >
                    Save and Continue
                    <svg
                      class="ml-4"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.293 2.29279C8.48053 2.10532 8.73484 2 9 2C9.26516 2 9.51947 2.10532 9.707 2.29279L14.207 6.79279C14.3945 6.98031 14.4998 7.23462 14.4998 7.49979C14.4998 7.76495 14.3945 8.01926 14.207 8.20679L9.707 12.7068C9.5184 12.8889 9.2658 12.9897 9.0036 12.9875C8.7414 12.9852 8.49059 12.88 8.30518 12.6946C8.11977 12.5092 8.0146 12.2584 8.01233 11.9962C8.01005 11.734 8.11084 11.4814 8.293 11.2928L11 8.49979H1.5C1.23478 8.49979 0.98043 8.39443 0.792893 8.20689C0.605357 8.01936 0.5 7.765 0.5 7.49979C0.5 7.23457 0.605357 6.98022 0.792893 6.79268C0.98043 6.60514 1.23478 6.49979 1.5 6.49979H11L8.293 3.70679C8.10553 3.51926 8.00021 3.26495 8.00021 2.99979C8.00021 2.73462 8.10553 2.48031 8.293 2.29279Z"
                        fill="white"
                      />
                    </svg>
                  </div>
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
