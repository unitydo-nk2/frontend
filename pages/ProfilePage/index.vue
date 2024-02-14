<!-- @format -->

<script setup></script>

<template>
  <div class="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
    <h1 class="border-b py-6 text-4xl  font-semibold">Setting</h1>
    <div class="grid grid-cols-8 pt-3 pb-10 pl-60 sm:grid-cols-10">
      <!-- 
    <div class="col-span-2 hidden sm:block">
      <ul>
        <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Profile</li>
        <li class="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">Favorite</li>
      </ul>
    </div> -->
      <div class="col-span-8 overflow-hidden rounded-xl  pb-20  ">
        <p class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
          Setting Profile
        </p>
        <div class="space-y-1">
          <div class="rounded-md border bg-white">
            <div class="flex w-full items-center px-6 py-2 pt-8 ">
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
            </div>
            <div class="grid grid-cols-2 gap-4 px-4 py-6 sm:px-10">
              <label class="block" for="name">
                <p class="text-sm">First name</p>
                <input
                  class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  value=""
                />
              </label>
              <label class="block" for="name">
                <p class="text-sm">Last name</p>
                <input
                  class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="email"
                  value=""
                />
              </label>
              <label class="block" for="name">
                <p class="text-sm">Nick name</p>
                <input
                  class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="email"
                  value=""
                />
              </label>
              <label class="block" for="email">
                <p class="text-sm">Email</p>
                <input
                  class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="email"
                  value=""
                />
              </label>
              <label class="block" for="email">
                <p class="text-sm">Telephone number</p>
                <input
                  class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="email"
                  value=""
                />
              </label>
              <label class="block" for="email">
                <p class="text-sm">Emergency phone number</p>
                <input
                  class="w-full rounded-md border py-2 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="email"
                  value=""
                />
              </label>
              <label class="block col-span-2  " for="email">
                <p class="text-sm">Your Address</p>
                <input
                  class="w-full rounded-md border py-5 px-2 bg-gray-50 outline-none ring-blue-600 focus:ring-1"
                  type="email"
                  value=""
                />
              </label>
              <div></div>
              <button
                class="flex justify-end mt-4 ml-auto rounded-lg bg-unityDo-primary px-10 py-2 text-white  "
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <p class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
          Favorite Activity
        </p>
        <div class="space-y-1">
          <div class="rounded-md border bg-white">
            <div class="flex w-full items-center px-6 py-2 pt-8 ">
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
