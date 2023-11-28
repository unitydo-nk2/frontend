<!-- @format -->

<script setup></script>

<template>
  <div class="font-primary ">
    <div
      class="w-96 h-96 overflow-hidden aspect-video bg-red-400 cursor-pointer rounded-xl relative group"
    >
      <div
        class="place-content-center rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end"
      >
        <div>
          <div
            class="transform-gpu p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
          >
            <div
              class="w-36 h-9 px-4 py-1.5 bg-green-600 rounded-3xl justify-center items-center gap-2.5 inline-flex"
            >
              <button
                class="text-white text-xs font-bold font-['DB Heavent'] leading-normal tracking-wide"
              >
                กิจกรรมอาสา
              </button>
            </div>
            <div
              class="w-28 h-9 px-3.5 py-1.5 bg-indigo-600 rounded-3xl justify-center items-center gap-2.5 inline-flex"
            >
              <div
                class="text-white text-xs font-bold font-['DB Heavent'] leading-normal tracking-wide"
              >
                On-site
              </div>
            </div>

            <div
              class="w-60 text-center text-white text-3xl font-bold font-['DB Heavent'] leading-7 tracking-wide"
            >
              Youth Nique Camp 10: พัฒนาตัวเองและช่วยผู้ พิการทางสายตาด้วยกัน
            </div>

            <div
              class="text-center text-white text-xl font-normal font-['DB Heavent'] leading-tight"
            >
              ม.เกษตรศาสตร์ บางเขน
            </div>
            <div
              class="text-center text-white text-xl font-normal font-['DB Heavent'] leading-tight"
            >
              วันอาทิตย์ที่ 29 ตุลาคม 2566
            </div>
            <div
              class="w-36 h-9 px-3.5 py-1.5 bg-white rounded-3xl justify-center items-center gap-2.5 inline-flex"
            >
              <nuxt-link to="/activityDetails">
                <button
                  class="text-indigo-600 text-xs font-bold font-['DB Heavent'] leading-normal tracking-wide"
                >
                  รายละเอียด
                </button>
              </nuxt-link>
              <div class="w-3.5 h-3.5 relative"></div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt=""
        class="w-96 h-96 rounded-xl object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
        src="../image/test.JPG"
      />
    </div>
  </div>
</template>

<style></style>
