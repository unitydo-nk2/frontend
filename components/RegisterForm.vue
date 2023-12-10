<!-- @format -->

<script setup>
const emit = defineEmits(['createNewRegistration'])

const user = reactive({
  name: "",
  surName: "",
  username: "userNameIsInRelease2",
  password: "passwordIsInRelease2",
  nickName: "",
  email: "",
  gender: "",
  dateOfBirth: "",
  religion: "",
  telephoneNumber: "",
  address: "",
  emergencyPhoneNumber: "",
  profileImg: "ProfileIsInRelease2",
  createTime: new Date(),
  updateTime: new Date(),
});
</script>

<template>
  <div>
    <div></div>
    <div class="font-primary flex flex-col justify-center items-center">
      <div class="m-4 text-black text-3xl font-bold tracking-wide">
        สมัครเข้าร่วมกิจกรรม
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
            class="w-32 flex text-indigo-600 text-xl font-bold leading-7 tracking-wide"
          >
            ข้อมูลส่วนตัว
          </div>
        </div>
        <!-- ลูกสอง -->
        <div class="justify-start items-center flex">
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
        </div>
        <!-- ลูกสาม -->
        <div class="justify-start items-center flex">
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
        </div>
      </div>
      <div class="m-4 p-10 w-10/12 h-auto bg-white rounded-lg shadow">
        <div
          class="ml-12  gap-3 flex text-neutral-700 text-3xl font-bold font-['DB Heavent'] tracking-wide"
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_225_20328"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="20"
              height="21"
            >
              <path d="M20 0.5H0V20.5H20V0.5Z" fill="white" />
            </mask>
            <g mask="url(#mask0_225_20328)">
              <path
                d="M9.9992 0.5C8.63622 0.50146 7.3097 0.940332 6.21479 1.75205C5.11987 2.56376 4.31439 3.70546 3.91684 5.00917C3.51929 6.31289 3.55066 7.70978 4.00634 8.99433C4.46202 10.2789 5.31795 11.3833 6.4482 12.145C4.80989 12.8438 3.41214 14.0072 2.4276 15.4915C1.44306 16.9757 0.914848 18.7159 0.908203 20.497H2.7272C2.74965 18.583 3.52574 16.755 4.88716 15.4094C6.24857 14.0639 8.08556 13.3093 9.9997 13.3093C11.9139 13.3093 13.7508 14.0639 15.1123 15.4094C16.4737 16.755 17.2498 18.583 17.2722 20.497H19.0902C19.0836 18.7159 18.5553 16.9757 17.5708 15.4915C16.5863 14.0072 15.1885 12.8438 13.5502 12.145C14.6805 11.3833 15.5364 10.2789 15.9921 8.99433C16.4477 7.70978 16.4791 6.31289 16.0816 5.00917C15.684 3.70546 14.8785 2.56376 13.7836 1.75205C12.6887 0.940332 11.3622 0.50146 9.9992 0.5ZM9.9992 2.318C10.8981 2.318 11.7768 2.58456 12.5243 3.08397C13.2717 3.58338 13.8542 4.29321 14.1982 5.1237C14.5422 5.95419 14.6322 6.86804 14.4569 7.74969C14.2815 8.63133 13.8486 9.44117 13.213 10.0768C12.5774 10.7124 11.7675 11.1453 10.8859 11.3207C10.0042 11.496 9.0904 11.406 8.25991 11.062C7.42942 10.718 6.71958 10.1355 6.22017 9.38807C5.72076 8.64065 5.4542 7.76192 5.4542 6.863C5.45249 6.26566 5.56888 5.67387 5.79668 5.12168C6.02448 4.56948 6.35919 4.06776 6.78158 3.64537C7.20396 3.22299 7.70568 2.88827 8.25788 2.66047C8.81008 2.43267 9.40186 2.31628 9.9992 2.318Z"
                fill="#434343"
              />
            </g>
          </svg>
          ข้อมูลทั่วไป
        </div>
        <hr
          class="ml-12 w-10/12 bg-gray-100 border-0 rounded dark:bg-gray-700"
        />
        <div class="grid grid-cols-2 gap-y-5">
          <div>
            <div
              class="ml-24 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              ชื่อ
              <span
                v-show="user.name.length == 0"
                class="text-red-500 text-base italic"
              >
                *Please fill out this field.</span
              >
              <span
                v-show="user.name.length > 50"
                class="text-red-500 text-base italic"
              >
                *Name cannot longer than 50 charaters.</span
              >
            </div>

            <input
              v-model="user.name"
              type="text"
              class="p-4 ml-24 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-18 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              นามสกุล
              <span
                v-show="user.surName.length == 0"
                class="text-red-500 text-base italic"
              >
                *Please fill out this field.</span
              >
              <span
                v-show="user.surName.length > 50"
                class="text-red-500 text-base italic"
              >
                *Surname cannot longer than 50 charaters.</span
              >
            </div>
            <input
              v-model="user.surName"
              type="text"
              class="p-4 ml-18 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-24 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              ชื่อเล่น
              <span
                v-show="user.nickName.length == 0"
                class="text-red-500 text-base italic"
              >
                *Please fill out this field.</span
              >
              <span
                v-show="user.nickName.length > 50"
                class="text-red-500 text-base italic"
              >
                *Nickname cannot longer than 50 charaters.</span
              >
            </div>
            <input
              v-model="user.nickName"
              type="text"
              class="p-4 ml-24 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-18 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              Email <span class="">*</span>
            </div>
            <input
              v-model="user.email"
              type="text"
              class="p-4 ml-18 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
        </div>
        <!-- เพศ วันเดือนปี ศาสนา -->
        <div
          class="mt-4 mb-4 grid grid-cols-3 justify-items-center left-[12px] top-[2px]  "
        >
          <div class="">
            <div
              class="text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              เพศ <span class="">*</span>
            </div>
            <select
              v-model="user.gender"
              class="pl-4 w-44 h-10 rounded-md border border-zinc-400"
            >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="lgbtq">lgbtq+</option>
              <option value="reatherNotToSay">rather not to say</option>
            </select>
          </div>
          <div>
            <div
              class="text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              วันเดือนปี <span class="">*</span>
            </div>
            <input
              v-model="user.dateOfBirth"
              type="date"
              class="p-4 w-44 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="m-22 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              ศาสนา <span class="">*</span>
            </div>
            <select
              v-model="user.religion"
              class="pl-4 w-44 h-10 rounded-md border border-zinc-400"
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
        </div>
        <div class="grid grid-cols-2 gap-y-5">
          <div>
            <div
              class="ml-24 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              เบอร์โทรศัพท์มือถือ
              <span
                v-show="user.telephoneNumber.length == 0"
                class="text-red-500 text-base italic"
              >
                *Please fill out this field.</span
              >
              <span
                v-show="user.telephoneNumber.length > 10"
                class="text-red-500 text-base italic"
              >
                *Telephone number cannot longer than 10 number.</span
              >
            </div>
            <input
              v-model="user.telephoneNumber"
              type="text"
              class="p-4 ml-24 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-18 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              เบอร์โทรฉุกเฉิน
              <span
                v-show="user.emergencyPhoneNumber.length == 0"
                class="text-red-500 text-base italic"
              >
                *Please fill out this field.</span
              >
              <span
                v-show="user.emergencyPhoneNumber.length > 10"
                class="text-red-500 text-base italic"
              >
                *Telephone number cannot longer than 10 number.</span
              >
            </div>
            <input
              v-model="user.emergencyPhoneNumber"
              type="text"
              class="p-4 ml-18 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-24 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              ที่อยู่ของคุณ
              <span
                v-show="user.address.length == 0"
                class="text-red-500 text-base italic"
              >
                *Please fill out this field.</span
              >
              <span
                v-show="user.address.length > 500"
                class="text-red-500 text-base italic"
              >
                *Address cannot longer than 10 number.</span
              >
            </div>
            <input
              v-model="user.address"
              type="text"
              class="p-4 ml-24 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
        </div>

        <!-- topic -->
        <!-- <div class="">
          <div
            class="ml-12 mt-4 gap-3 flex text-neutral-700 text-3xl font-bold font-['DB Heavent'] tracking-wide"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_225_20328"
                style="mask-type: luminance"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="20"
                height="21"
              >
                <path d="M20 0.5H0V20.5H20V0.5Z" fill="white" />
              </mask>
              <g mask="url(#mask0_225_20328)">
                <path
                  d="M9.9992 0.5C8.63622 0.50146 7.3097 0.940332 6.21479 1.75205C5.11987 2.56376 4.31439 3.70546 3.91684 5.00917C3.51929 6.31289 3.55066 7.70978 4.00634 8.99433C4.46202 10.2789 5.31795 11.3833 6.4482 12.145C4.80989 12.8438 3.41214 14.0072 2.4276 15.4915C1.44306 16.9757 0.914848 18.7159 0.908203 20.497H2.7272C2.74965 18.583 3.52574 16.755 4.88716 15.4094C6.24857 14.0639 8.08556 13.3093 9.9997 13.3093C11.9139 13.3093 13.7508 14.0639 15.1123 15.4094C16.4737 16.755 17.2498 18.583 17.2722 20.497H19.0902C19.0836 18.7159 18.5553 16.9757 17.5708 15.4915C16.5863 14.0072 15.1885 12.8438 13.5502 12.145C14.6805 11.3833 15.5364 10.2789 15.9921 8.99433C16.4477 7.70978 16.4791 6.31289 16.0816 5.00917C15.684 3.70546 14.8785 2.56376 13.7836 1.75205C12.6887 0.940332 11.3622 0.50146 9.9992 0.5ZM9.9992 2.318C10.8981 2.318 11.7768 2.58456 12.5243 3.08397C13.2717 3.58338 13.8542 4.29321 14.1982 5.1237C14.5422 5.95419 14.6322 6.86804 14.4569 7.74969C14.2815 8.63133 13.8486 9.44117 13.213 10.0768C12.5774 10.7124 11.7675 11.1453 10.8859 11.3207C10.0042 11.496 9.0904 11.406 8.25991 11.062C7.42942 10.718 6.71958 10.1355 6.22017 9.38807C5.72076 8.64065 5.4542 7.76192 5.4542 6.863C5.45249 6.26566 5.56888 5.67387 5.79668 5.12168C6.02448 4.56948 6.35919 4.06776 6.78158 3.64537C7.20396 3.22299 7.70568 2.88827 8.25788 2.66047C8.81008 2.43267 9.40186 2.31628 9.9992 2.318Z"
                  fill="#434343"
                />
              </g>
            </svg>
            โรคประจำตัว
          </div>
          <hr
            class="ml-12 w-10/12 bg-gray-100 border-0 rounded dark:bg-gray-700"
          />
        </div> -->
        <!-- <div class="grid grid-cols-2">
          <div>
            <div
              class="ml-24 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              โรคประจำตัว <span class="">*</span>
            </div>
            <input
              type="text"
              class="ml-24 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-18 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              ยาที่ใช้รักษาประจำ <span class="">*</span>
            </div>
            <input
              type="text"
              class="ml-18 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
          <div>
            <div
              class="ml-24 text-neutral-700 text-2xl font-normal leading-7 tracking-wide"
            >
              สิ่งที่แพ้ <span class="">*</span>
            </div>
            <input
              type="text"
              class="ml-24 w-96 h-10 rounded-md border border-zinc-400"
            />
          </div>
        </div> -->
      </div>
    </div>
    <div class="flex justify-end">
      <button
        @click="$emit('createNewRegistration', user)"
        class="font-primary w-56 h-14 px-5 py-3 bg-indigo-600 rounded-xl justify-start items-center gap-5 inline-flex"
        :disabled="
            user.name.length > 50 ||
            user.surName.length > 50 ||
            user.nickName.length > 50 ||
            user.username.length > 50 ||
            user.religion.length > 100 ||
            user.address.length > 500 ||
            user.telephoneNumber.length > 10 ||
            user.emergencyPhoneNumber.length > 10
          "
      >
        <div
          class="flex justify-center items-center w-60 text-center text-white text-base font-normal font-['DB Heavent'] leading-7 tracking-wide"
        >
          บันทึกข้อมูลและไปต่อ
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
</template>

<style></style>
