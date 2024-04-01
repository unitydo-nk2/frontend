<!-- @format -->

<script setup>
import { useCounterStore } from '../stores/counter'
const emit = defineEmits(["deleteActivity"]);

const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
});

const store = useCounterStore();

</script>

<template>
  <div class="font-primary w-full ">
    <div class="px-4 grid">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="text-zinc-400 text-base font-normal ">
          Activities > Activity Detail
        </div>
        <div class="text-zinc-900 text-4xl font-bold tracking-wide">
          Manage Activity
        </div>
        <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>
      </div>
      <div v-if="store.role == 'activityOwner'" class="flex flex-in-line px-4 gap-4 justify-between">
        <a @click="navigateTo('/CreateEditActivity/')">
          <button
            class="w-44 h-9 px-2.5 py-1.5 rounded-md border border-indigo-600 justify-start items-center gap-1 inline-flex"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.0441 5.49999H6.81507V1.49997C6.81507 1.22403 6.57821 1 6.28637 1C5.99462 1 5.75776 1.22403 5.75776 1.49997V5.49999H1.52861C1.23686 5.49999 1 5.72402 1 5.99995C1 6.27599 1.23686 6.50001 1.52861 6.50001H5.75776V10.4999C5.75776 10.776 5.99462 11 6.28637 11C6.57821 11 6.81507 10.776 6.81507 10.4999V6.50001H11.0441C11.336 6.50001 11.5728 6.27599 11.5728 5.99995C11.5728 5.72402 11.336 5.49999 11.0441 5.49999Z"
                fill="#5628FF"
                stroke="#5628FF"
                stroke-width="0.7"
              />
            </svg>

            <div class="w-36 text-indigo-600 text-2xl font-medium ">
              Create Post
            </div>
          </button>
        </a>
        <!-- <div class="flex gap-4">
        <button
          class="w-28 border text-neutral-500 text-base font-medium font-['DB Heavent']"
        >
          <svg
            width="11"
            height="8"
            viewBox="0 0 11 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.73001 4.1259H2.18236C1.85497 4.1259 1.63672 3.91947 1.63672 3.60983C1.63672 3.30018 1.85497 3.09375 2.18236 3.09375H8.73001C9.05739 3.09375 9.27565 3.30018 9.27565 3.60983C9.27565 3.91947 9.05739 4.1259 8.73001 4.1259Z"
              fill="#6D6E6F"
            />
            <path
              d="M7.09485 7.22356H3.82103C3.49365 7.22356 3.27539 7.01713 3.27539 6.70748C3.27539 6.39784 3.49365 6.19141 3.82103 6.19141H7.09485C7.42224 6.19141 7.64049 6.39784 7.64049 6.70748C7.64049 7.01713 7.42224 7.22356 7.09485 7.22356Z"
              fill="#6D6E6F"
            />
            <path
              d="M10.3671 1.03215H0.545638C0.218255 1.03215 0 0.82572 0 0.516075C0 0.20643 0.218255 0 0.545638 0H10.3671C10.6945 0 10.9128 0.20643 10.9128 0.516075C10.9128 0.82572 10.6945 1.03215 10.3671 1.03215Z"
              fill="#6D6E6F"
            />
          </svg>
          Filter
        </button>
        <button
          class="w-28 border text-neutral-500 text-base font-medium font-['DB Heavent']"
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.65602 0.266869C3.77578 0.126738 3.9924 0.126738 4.11215 0.266869L6.66587 3.2551C6.83225 3.44979 6.6939 3.75 6.4378 3.75H1.33037C1.07427 3.75 0.935925 3.44979 1.10231 3.2551L3.65602 0.266869Z"
              fill="#6D6E6F"
            />
            <rect
              x="3.35547"
              y="3"
              width="1.05728"
              height="6"
              rx="0.3"
              fill="#6D6E6F"
            />
            <path
              d="M10.4573 8.73313C10.3375 8.87326 10.1209 8.87326 10.0011 8.73313L7.44741 5.7449C7.28103 5.55021 7.41938 5.25 7.67548 5.25L12.7829 5.25C13.039 5.25 13.1774 5.55021 13.011 5.7449L10.4573 8.73313Z"
              fill="#6D6E6F"
            />
            <rect
              x="10.7578"
              y="6"
              width="1.05728"
              height="6"
              rx="0.3"
              transform="rotate(-180 10.7578 6)"
              fill="#6D6E6F"
            />
          </svg>

          Sort
        </button>
        </div> -->
      </div>
      <!-- component -->
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
      />
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <section class="py-1 bg-blueGray-50">
        <div class="w-full px-4 mx-auto mt-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
          >
            <div class="rounded-t mb-0 px-4 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-3xl text-blueGray-700">
                    Activity List
                  </h3>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Activity Name
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Activity Owner
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      Categories
                    </th>
                    <th
                      class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    ></th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="(activity, index) in activities" :key="index">
                    <th
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700"
                    >
                      {{ activity.activityName }}
                    </th>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
                    >
                      {{ activity.activityOwnerUsername }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-center border-l-0 border-r-0 text-lg whitespace-nowrap p-4"
                    >
                      {{ activity.mainCategory }} / {{ activity.category }}
                    </td>
                    <td
                      class="border-t-0 px-6 align-middle border-l-0 border-r-0 text- whitespace-nowrap p-4 inline-flex gap-10"
                    >
                      <div>
                        <img
                          @click="emit('deleteActivity', activity.id)"
                          class="cursor-pointer hover:drop-shadow-2xl"
                          src="/image/delete.svg"
                          alt="delete"
                        />
                      </div>
                      <div>
                        <nuxt-link :to="`/CreateEditActivity/${activity.id}`">
                          <img
                            class="cursor-pointer hover:drop-shadow-2xl"
                            src="/image/edit.svg"
                            alt="edit"
                          />
                        </nuxt-link>
                      </div>
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
