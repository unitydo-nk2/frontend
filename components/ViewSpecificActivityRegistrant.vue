<!-- @format -->

<script setup>
import { dateTimeUtil } from "../functions/dateTimeUtils";
const props = defineProps({
  users: {
    type: Array,
    default: [],
  },
  activityName: {
    type: String,
    default: null,
  }
});
</script>

<template>
  <div class="font-primary w-full">
    <div class="pl-4 grid ">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="text-zinc-400 text-base font-normal font-['DB Heavent']">
          Manage Users > Member List
        </div>
        <div
          class="text-zinc-900 text-2xl font-bold font-['DB Heavent'] tracking-wide"
        >
          การเข้าร่วมกิจกรรม
        </div>
        <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>
      </div>

      <section class="py-1 bg-blueGray-50">
        <div class="w-full px-4 mx-auto mt-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    All activities
                  </h3>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Name
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Username
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      gender
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      status
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      registration date
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    ></th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <th
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700"
                    >
                      {{ user.name }} {{ user.surName }}
                    </th>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      {{ user.username }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      {{ user.gender }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      {{ user.status }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      {{ dateTimeUtil.getDateTime(user.registrationDate) }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                    >
                      <nuxt-link  :to="`/UserLists/${user.registrationId}`">
                        <button
                          type="button"
                          class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                          data-te-ripple-init
                        >
                          show details
                        </button>
                      </nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style></style>
