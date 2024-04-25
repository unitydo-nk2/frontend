<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
</script>

<template>
  <div
    class="relative flex flex-col bg-clip-border bg-white text-gray-700 min-h-screen h-auto w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
  >
    <nav
      class="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700"
    >
      <div @click="navigateTo('/ViewAllActivityPost/')">
        <div
          role="button"
          tabindex="0"
          class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div class="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M212.31-140q-29.92 0-51.12-21.19Q140-182.39 140-212.31v-535.38q0-29.92 21.19-51.12Q182.39-820 212.31-820h178q3.77-33.31 29.08-56.65Q444.69-900 480-900q35.69 0 61 23.35 25.31 23.34 28.69 56.65h178q29.92 0 51.12 21.19Q820-777.61 820-747.69v535.38q0 29.92-21.19 51.12Q777.61-140 747.69-140H212.31Zm0-60h535.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-535.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H212.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v535.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM290-294.62h260v-59.99H290v59.99ZM290-450h380v-60H290v60Zm0-155.39h380v-59.99H290v59.99Zm190-180.76q13 0 21.5-8.5t8.5-21.5q0-13-8.5-21.5t-21.5-8.5q-13 0-21.5 8.5t-8.5 21.5q0 13 8.5 21.5t21.5 8.5ZM200-200v-560 560Z"/></svg>
          </div>
          Activities
        </div>
      </div>
      <div @click="navigateTo('/ViewAllActivityUser/')">
        <div
          role="button"
          tabindex="0"
          class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
        >
          <div class="grid place-items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M98.85-187.69v-88.93q0-31.84 16.04-55.65 16.03-23.81 42.57-37.27 51-26 107.69-42.07 56.7-16.08 133.7-16.08 30 0 55.8 2.42 25.81 2.42 48.2 7.27l-53.08 53.08q-11-2-23.81-2.39-12.81-.38-27.11-.38-71 0-124.43 15.84Q221-336 185-316q-13.62 7.31-19.88 17.08-6.27 9.77-6.27 22.3v28.93h242.3l60 60H98.85ZM617-157.85 492.85-282 535-324.15l82 82 202-202L861.15-402 617-157.85ZM398.85-492.31q-57.75 0-98.88-41.12-41.12-41.13-41.12-98.88 0-57.75 41.12-98.87 41.13-41.13 98.88-41.13 57.75 0 98.87 41.13 41.12 41.12 41.12 98.87 0 57.75-41.12 98.88-41.12 41.12-98.87 41.12Zm2.3 244.62Zm-2.3-304.62q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Z"/></svg>
          </div>
          Registrations
        </div>
      </div>
      <div v-if="store.role == 'admin'">
        <div @click="navigateTo('/UserLists/')">
          <div
            role="button"
            tabindex="0"
            class="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
          >
            <div class="grid place-items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M400-492.31q-57.75 0-98.87-41.12Q260-574.56 260-632.31q0-57.75 41.13-98.87 41.12-41.13 98.87-41.13 57.75 0 98.87 41.13Q540-690.06 540-632.31q0 57.75-41.13 98.88-41.12 41.12-98.87 41.12ZM100-187.69v-88.93q0-30.3 15.46-54.88 15.46-24.58 43.16-38.04 49.84-24.84 107.69-41.5 57.84-16.65 133.69-16.65h11.69q4.85 0 10.46 1.23-6.07 14.15-10.03 28.84-3.97 14.7-6.58 29.93H400q-69.08 0-122.31 15.88-53.23 15.89-91.54 35.81-13.61 7.31-19.88 17.08t-6.27 22.3v28.93h252q4.46 15.23 11.58 30.92 7.11 15.69 15.65 29.08H100Zm544.23 29.61-8.92-53.08q-14.31-4.23-26.93-11.07-12.61-6.85-24-17.16l-50.69 17.62-28.46-48.39L546.62-304q-4.31-15.54-4.31-30.62 0-15.07 4.31-30.61l-41-34.62 28.46-48.38 50.3 18q11-10.31 23.81-16.96 12.81-6.66 27.12-10.89l8.92-53.07h56.92l8.54 53.07q14.31 4.23 27.12 11.2 12.8 6.96 23.8 17.88l50.31-19.23 28.46 49.61-41 34.62q4.31 14.43 4.31 30.06 0 15.63-4.31 29.94l41.39 33.84-28.46 48.39-50.7-17.62q-11.38 10.31-24 17.16-12.61 6.84-26.92 11.07l-8.54 53.08h-56.92Zm28.11-100.38q31.43 0 53.77-22.38 22.35-22.38 22.35-53.81 0-31.43-22.38-53.77-22.38-22.35-53.81-22.35-31.42 0-53.77 22.38t-22.35 53.81q0 31.42 22.38 53.77t53.81 22.35ZM400-552.31q33 0 56.5-23.5t23.5-56.5q0-33-23.5-56.5t-56.5-23.5q-33 0-56.5 23.5t-23.5 56.5q0 33 23.5 56.5t56.5 23.5Zm0-80Zm12 384.62Z"/></svg>
            </div>
            UserLists
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
