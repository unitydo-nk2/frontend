<!-- @format -->

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();
const emit = defineEmits(["updateRegistrationStatus"]);

const props = defineProps({
  user: {
    type: Object,
    default: {},
  },
});

</script>

<template>
  <div class="w-full">
    <div class="pl-4 grid">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="text-zinc-400 text-base font-normal">
          <!-- <span style="text-zinc-400 text-base font-normal">Manage Users > Member List > </span><span
            style="text-zinc-400 text-base font-normal">“TEP-TEPE Pre Engineering Workshop” </span><span
            style="text-zinc-400 text-base font-bold">...</span> -->
          <span style="text-zinc-400 text-base font-normal"> </span>
        </div>
        <div class="flex flex-in-line">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.92229 16C13.5862 16 17.3809 12.4111 17.3809 8C17.3809 3.58892 13.5862 0 8.92229 0C4.25836 0 0.463717 3.58892 0.463717 8C0.463717 12.4111 4.25836 16 8.92229 16ZM8.92229 1.23077C12.8688 1.23077 16.0795 4.26749 16.0795 8C16.0795 11.7325 12.8688 14.7692 8.92229 14.7692C4.97582 14.7692 1.76504 11.7325 1.76504 8C1.76504 4.26749 4.97582 1.23077 8.92229 1.23077ZM6.7274 8.43569C6.47321 8.19528 6.47321 7.80554 6.7274 7.56513L9.33004 5.10359C9.4567 4.9838 9.62326 4.92308 9.78983 4.92308C9.9564 4.92308 10.123 4.98297 10.2496 5.10359C10.5038 5.344 10.5038 5.73374 10.2496 5.97415L8.1068 8.00082L10.2496 10.0274C10.5038 10.2679 10.5038 10.6576 10.2496 10.898C9.99544 11.1384 9.58336 11.1384 9.32917 10.898L6.7274 8.43569Z"
              fill="#BABABA"
            />
          </svg>

          <div class="ml-4 w-full text-zinc-900 text-4xl font-bold">
            {{ user.name }} {{ user.surName }}
          </div>
        </div>
        <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>
      </div>
      <!-- content -->
      <div class="flex justify-center">
        <div class="m-4 w-full rounded-lg border border-neutral-200">
          <!-- icon and topic -->
          <div class="">
            <div
              class="flex flex-in-line m-4 w-52 text-zinc-900 text-base font-bold leading-normal tracking-wide"
            >
              <svg
                class="mr-4"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_310_3836"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path d="M20 0H0V20H20V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_310_3836)">
                  <path
                    d="M9.9992 0C8.63622 0.00145998 7.3097 0.440332 6.21479 1.25205C5.11987 2.06376 4.31439 3.20546 3.91684 4.50917C3.51929 5.81289 3.55066 7.20978 4.00634 8.49433C4.46202 9.77888 5.31795 10.8833 6.4482 11.645C4.80989 12.3438 3.41214 13.5072 2.4276 14.9915C1.44306 16.4757 0.914848 18.2159 0.908203 19.997H2.7272C2.74965 18.083 3.52574 16.255 4.88716 14.9094C6.24857 13.5639 8.08556 12.8093 9.9997 12.8093C11.9139 12.8093 13.7508 13.5639 15.1123 14.9094C16.4737 16.255 17.2498 18.083 17.2722 19.997H19.0902C19.0836 18.2159 18.5553 16.4757 17.5708 14.9915C16.5863 13.5072 15.1885 12.3438 13.5502 11.645C14.6805 10.8833 15.5364 9.77888 15.9921 8.49433C16.4477 7.20978 16.4791 5.81289 16.0816 4.50917C15.684 3.20546 14.8785 2.06376 13.7836 1.25205C12.6887 0.440332 11.3622 0.00145998 9.9992 0ZM9.9992 1.818C10.8981 1.818 11.7768 2.08456 12.5243 2.58397C13.2717 3.08338 13.8542 3.79321 14.1982 4.6237C14.5422 5.45419 14.6322 6.36804 14.4569 7.24969C14.2815 8.13133 13.8486 8.94117 13.213 9.5768C12.5774 10.2124 11.7675 10.6453 10.8859 10.8207C10.0042 10.996 9.0904 10.906 8.25991 10.562C7.42942 10.218 6.71958 9.63549 6.22017 8.88807C5.72076 8.14065 5.4542 7.26192 5.4542 6.363C5.45249 5.76566 5.56888 5.17387 5.79668 4.62168C6.02448 4.06948 6.35919 3.56776 6.78158 3.14537C7.20396 2.72299 7.70568 2.38827 8.25788 2.16047C8.81008 1.93267 9.40186 1.81628 9.9992 1.818Z"
                    fill="#434343"
                  />
                </g>
              </svg>

              ข้อมูลส่วนตัว
            </div>
            <div class="w-full h-px border border-neutral-200"></div>
          </div>
          <!-- info -->
          <div class="grid grid-cols-3 h-52 p-4">
            <div class="w-22 text-stone-500 text-sm font-normal leading-none">
              ชื่อ : {{ user.name }}
            </div>
            <div
              class="col-span-2 w-22 text-stone-500 text-sm font-normal leading-none"
            >
              นามสกุล : {{ user.surName }}
            </div>
            <div class="w-22 text-stone-500 text-sm font-normal leading-none">
              ชื่อเล่น : {{ user.nickName }}
            </div>
            <div
              class="col-span-2 w-22 text-stone-500 text-sm font-normal leading-none"
            >
              E-mail : {{ user.email }}
            </div>
            <div class="w22 text-stone-500 text-sm font-normal leading-none">
              เพศ : {{ user.gender }}
            </div>
            <div class="w-22 text-stone-500 text-sm font-normal leading-none">
              วันเดือนปีเกิด : {{ user.dateOfBirth }}
            </div>
            <div class="w-22 text-stone-500 text-sm font-normal leading-none">
              ศาสนา : {{ user.religion }}
            </div>
            <div class="w-22 text-stone-500 text-sm font-normal leading-none">
              เบอร์โทรศัพท์ : {{ user.telephoneNumber }}
            </div>
            <div
              class="col-span-2 w-22 text-stone-500 text-sm font-normal leading-none"
            >
              เบอร์ฉุกเฉิน : {{ user.emergencyPhoneNumber }}
            </div>
            <div class="w-22 text-stone-500 text-sm font-normal leading-none">
              ที่อยู่ของคุณ : {{ user.address }}
            </div>
          </div>
        </div>
        <!-- <div class="m-4 w-96 rounded-lg border border-neutral-200">
          <div class="">
            <div
              class="flex flex-in-line m-4 w-52 text-zinc-900 text-base font-bold leading-normal tracking-wide"
            >
              <svg
                class="mr-4"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_310_3836"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                >
                  <path d="M20 0H0V20H20V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_310_3836)">
                  <path
                    d="M9.9992 0C8.63622 0.00145998 7.3097 0.440332 6.21479 1.25205C5.11987 2.06376 4.31439 3.20546 3.91684 4.50917C3.51929 5.81289 3.55066 7.20978 4.00634 8.49433C4.46202 9.77888 5.31795 10.8833 6.4482 11.645C4.80989 12.3438 3.41214 13.5072 2.4276 14.9915C1.44306 16.4757 0.914848 18.2159 0.908203 19.997H2.7272C2.74965 18.083 3.52574 16.255 4.88716 14.9094C6.24857 13.5639 8.08556 12.8093 9.9997 12.8093C11.9139 12.8093 13.7508 13.5639 15.1123 14.9094C16.4737 16.255 17.2498 18.083 17.2722 19.997H19.0902C19.0836 18.2159 18.5553 16.4757 17.5708 14.9915C16.5863 13.5072 15.1885 12.3438 13.5502 11.645C14.6805 10.8833 15.5364 9.77888 15.9921 8.49433C16.4477 7.20978 16.4791 5.81289 16.0816 4.50917C15.684 3.20546 14.8785 2.06376 13.7836 1.25205C12.6887 0.440332 11.3622 0.00145998 9.9992 0ZM9.9992 1.818C10.8981 1.818 11.7768 2.08456 12.5243 2.58397C13.2717 3.08338 13.8542 3.79321 14.1982 4.6237C14.5422 5.45419 14.6322 6.36804 14.4569 7.24969C14.2815 8.13133 13.8486 8.94117 13.213 9.5768C12.5774 10.2124 11.7675 10.6453 10.8859 10.8207C10.0042 10.996 9.0904 10.906 8.25991 10.562C7.42942 10.218 6.71958 9.63549 6.22017 8.88807C5.72076 8.14065 5.4542 7.26192 5.4542 6.363C5.45249 5.76566 5.56888 5.17387 5.79668 4.62168C6.02448 4.06948 6.35919 3.56776 6.78158 3.14537C7.20396 2.72299 7.70568 2.38827 8.25788 2.16047C8.81008 1.93267 9.40186 1.81628 9.9992 1.818Z"
                    fill="#434343"
                  />
                </g>
              </svg>

              โรคประจำตัว
            </div>
            <div class="w-96 h-px border border-neutral-200"></div>
          </div>
          <div class="grid grid-cols-3 h-52">
            <div
              class="w-22 text-stone-500 text-sm font-normal leading-none"
            >
              ชื่อโรคประจำตัว :
            </div>
            <div
                class="col-span-2 w-22 text-stone-500 text-sm font-normal leading-none"
              >
                ยาที่ใช้รักษาประจำ :
            </div>
            <div
              class="w-22 text-stone-500 text-sm font-normal leading-none"
            >
              สิ่งที่แพ้ :
            </div>
          </div>
        </div> -->
      </div>
      <!-- Table -->
      <!-- <div class="w-full h-96 rounded-lg border border-neutral-200">
        <div
          class="m-4 w-28 text-zinc-900 text-base font-medium"
        >
          การตอบคำถาม
        </div>
        <div class="mt-4 relative overflow-x-auto shadow-md">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
          >
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">
                  <div
                    class="flex items-center w-28 text-neutral-900 text-xs font-medium"
                  >
                    ข้อคำถาม
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div
                    class="flex items-center w-32 text-neutral-900 text-xs font-medium"
                  >
                    คำถาม
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div
                    class="flex items-center w-28 text-neutral-900 text-xs font-medium"
                  >
                    คำตอบ
                  </div>
                </th>
                <th scope="col" class="px-6 py-3">
                  <div
                    class="flex items-center w-32 text-neutral-900 text-xs font-medium"
                  ></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td class="px-6 py-4">ทำไมถึงเข้าร่วมกิจกรรมนี้</td>
                <td class="px-6 py-4">
                    เพื่อช่วยลดปัญหาที่อาจเกิดขึ้นในสังคม
                    ช่วยแก้ปัญหาและสร้างสรรค์เพื่อให้เกิดประโยชน์สุขแก่สังคม
                    ยกตัวอย่างเช่น การช่วยกันดูแลรักษาสิ่งแวดล้อม
                  โดยการไม่ทิ้งขยะลงในแหล่งน้ำ การแยกขยะ
                  แม้แต่การประหยัดน้ำปะปาหรือไฟฟ้าที่เป็นของส่วนรวม
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> -->
      <!-- buttons -->
    </div>
    <div
        v-if="store.role == 'ActivityOwner'"
        class="w-full h-20 bg-stone-50  border border-neutral-200"
      >
        <div class="flex justify-center gap-8 mt-4">
          <button
            class="w-36 h-12 px-6 py-2.5 bg-green-600 rounded-xl justify-center items-center gap-2.5 inline-flex hover:bg-green-700"
            @click="$emit('updateRegistrationStatus', user.registrationId ,'selected' )"
          >
            <div
              class="text-white text-base font-normal leading-7 tracking-wide"
            >
              accept
            </div>
          </button>
            <button
              class="w-36 h-12 px-7 py-2.5 bg-red-600 rounded-xl border border-red-600 justify-center items-center gap-2.5 inline-flex hover:bg-red-700"
              @click="$emit('updateRegistrationStatus', user.registrationId ,'declined' )"
            >
              <div
                class="text-white text-base font-normal leading-7 tracking-wide"
              >
                decline
              </div>
            </button>
          </div>
        </div>
  </div>
</template>

<style></style>
