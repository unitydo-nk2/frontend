<!-- @format -->

<script setup></script>

<template>
  <div class="font-primary ">
    <div class="pl-4 sm:ml-64 grid">
      <div class="p-4 rounded-lg dark:border-gray-700">
        <div class="text-zinc-400 text-base font-normal font-['DB Heavent']">
          Activities > Activity Detail > สร้างโพสต์กิจกรรรม
        </div>
        <div
          class="text-zinc-900 text-2xl font-bold font-['DB Heavent'] tracking-wide"
        >
          สร้างโพสต์กิจกรรรม
        </div>
        <div class="w-full h-px mt-4 mb-2 border border-stone-300"></div>
      </div>
      <div
        class="mb-4 text-indigo-600 text-lg font-bold font-['DB Heavent'] leading-7 tracking-wide"
      >
        เนื้อหากิจกรรม
      </div>

      <div class="w-96 h-44 rounded-lg border border-neutral-200">
        <div
          class="w-96 mb-4 mt-4 ml-4 w-24 text-base font-medium font-['DB Heavent']"
        >
          หัวข้อกิจกรรม
        </div>
        <div class="mb-4 w-96 h-px border border-neutral-200"></div>
        <div class="text-center">
          <textarea
            class="w-80 h-20 rounded border border-neutral-200"
            placeholder="หัวข้อ..."
          ></textarea>
        </div>
      </div>
      <div
        class="mt-4 mb-4 text-zinc-800 text-lg font-bold font-['DB Heavent'] leading-7 tracking-wide"
      >
        เนื้อหากิจกรรม
      </div>
      <div class="w-96 h-64 rounded-lg border border-neutral-200">
        <div
          class="mb-4 mt-4 ml-4 w-96 text-base font-medium font-['DB Heavent']"
        >
          รายละเอียดกิจกรรม
        </div>
        <div class="mb-4 w-96 h-px border border-neutral-200"></div>
        <div class="text-center">
          <textarea
            class="w-80 h-40 rounded border border-neutral-200"
            placeholder="ใส่ข้อความ"
          ></textarea>
        </div>
      </div>
      <div
        class="mt-4 mb-4 text-zinc-800 text-lg font-bold font-['DB Heavent'] leading-7 tracking-wide"
      >
        เนื้อหาย่อ
      </div>
      <textarea
        class="w-96 h-16 rounded border border-neutral-200"
        placeholder="ใส่ข้อความ"
      ></textarea>
      <div>
        <span
          class="text-zinc-800 text-xl font-bold font-['DB Heavent'] leading-7 tracking-wide"
          >ข้อเสนอแนะ </span
        ><span
          class="text-neutral-500 text-lg font-normal font-['DB Heavent'] leading-normal tracking-wide"
          >(option)</span
        >
      </div>
      <textarea
        class="w-96 h-16 rounded border border-neutral-200"
        placeholder="ใส่ข้อความ"
      ></textarea>

      <!-- left side -->
      <div
        class="left-[700px] top-[195px] absolute flex-col justify-start items-start gap-9 inline-flex"
      >
        <div class="relative">
          <div
            class="w-28 h-6 left-0 top-0 absolute justify-start items-center gap-1.5 inline-flex"
          >
            <div
              class="w-24 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              ผู้จัดกิจกรรม
            </div>
          </div>
          <textarea
            class="mt-10 w-80 h-11 rounded border border-neutral-200"
          ></textarea>
          <div class="mt-4">
            <div
              class="w-52 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              หมวดหมู่
            </div>
            <div class="text-stone-300 text-xl font-normal font-['DB Heavent']">
              <select
                class="mt-4 w-52 h-11 px-2 py-2.5 rounded-md border border-stone-300 justify-start items-center gap-10 inline-flex"
              >
                <option class="default">ทั่วไป</option>
                <option class="default">2</option>
                <option class="default">3</option>
              </select>
            </div>
          </div>
          <div class="mt-4">
            <div
              class="w-52 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              รูปแบบการจัดกิจกรรม
            </div>
            <div class="text-stone-300 text-xl font-normal font-['DB Heavent']">
              <select
                class="mt-4 w-52 h-11 px-2 py-2.5 rounded-md border border-stone-300 justify-start items-center gap-10 inline-flex"
              >
                <option class="default">ทั่วไป</option>
                <option class="default">2</option>
                <option class="default">3</option>
              </select>
            </div>
          </div>
          <div class="mt-4">
            <div
              class="w-52 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              สถานที่
            </div>
            <div class="text-xl font-normal font-['DB Heavent']">
              <textarea
                class="mt-4 w-80 h-11 px-2 py-2.5 rounded-md border border-stone-300 justify-start items-center gap-10 inline-flex"
              >
              </textarea>
            </div>
            <button
              class="w-40 h-10 px-2.5 py-2 rounded border border-indigo-400 justify-start items-start gap-2.5 inline-flex"
            >
              <div class="w-6 h-6 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
                    fill="#937AFF"
                  />
                </svg>
              </div>
              <div
                class="w-40 text-indigo-400 text-xs font-normal font-['DB Heavent']"
              >
                Link Google Map
              </div>
            </button>
          </div>
          <div class="mt-4">
            <div
              class="w-52 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              จำนวนผู้เข้าร่วม
            </div>
            <div class="text-xl font-normal font-['DB Heavent']">
              <input
                type="number"
                class="mt-4 w-80 h-11 px-2 py-2.5 rounded-md border border-stone-300 justify-start items-center gap-10 inline-flex"
              />
            </div>
          </div>
          <div class="mt-4">
            <div
              class="w-52 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              วันที่จัดกิจกรรม
            </div>
            <div class="text-xl font-normal font-['DB Heavent']">
              <input
                type="date"
                class="mt-4 w-80 h-11 px-2 py-2.5 rounded-md border border-stone-300 justify-start items-center gap-10 inline-flex"
              />
            </div>
            <button
              class="mt-2 w-40 h-10 px-2.5 py-2 rounded border border-indigo-400 justify-start items-start gap-2.5 inline-flex"
            >
              <div class="w-6 h-6 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
                    fill="#937AFF"
                  />
                </svg>
              </div>
              <div
                class="w-40 text-indigo-400 text-xs font-normal font-['DB Heavent']"
              >
                วันที่สิ้นสุดกิจกรรม
              </div>
            </button>
          </div>
          <div class="mt-4">
            <div
              class="w-52 text-indigo-600 text-base font-bold font-['DB Heavent'] leading-normal tracking-wide"
            >
              วันที่เปิดรับสมัคร
            </div>
            <div class="text-xl font-normal font-['DB Heavent']">
              <input
                type="date"
                class="mt-4 w-80 h-11 px-2 py-2.5 rounded-md border border-stone-300 justify-start items-center gap-10 inline-flex"
              />
            </div>
            <button
              class="mt-2 w-40 h-10 px-2.5 py-2 rounded border border-indigo-400 justify-start items-start gap-2.5 inline-flex"
            >
              <div class="w-6 h-6 relative">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 12.998H13V18.998H11V12.998H5V10.998H11V4.99805H13V10.998H19V12.998Z"
                    fill="#937AFF"
                  />
                </svg>
              </div>
              <div
                class="w-40 text-indigo-400 text-xs font-normal font-['DB Heavent']"
              >
                วันที่ปิดรับสมัคร
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-28 w-full h-12 bg-stone-50 rounded border border-neutral-200"
    >
      <button class="w-20 h-8 bg-white rounded border border-neutral-200">
        <div
          class="w-14 text-center text-stone-500 text-base font-medium font-['DB Heavent']"
        >
          Cancle
        </div>
      </button>
      <button class="w-20 h-8 bg-blue-600 rounded shadow">
        <div
          class="w-10 text-center text-white text-base font-medium font-['DB Heavent']"
        >
          Save
        </div>
      </button>
    </div>
  </div>
</template>

<style></style>
