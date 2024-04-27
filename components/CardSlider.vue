<script setup>
import { dateTimeUtil } from "../functions/dateTimeUtils";

const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
  loadStatus: {
    type: Boolean,
    default: true
  }
});
</script>

<template>
      <div v-if="activities.length == 0">
      <div v-if="loadStatus" role="status" class="flex justify-center my-8">
        <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
          viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>

      </div>
      <div v-else role="status" class="flex justify-center my-8">
        No activity to show
      </div>
    </div>
  <div v-else>
    <!-- Card slider -->
    <div v-if="props.activities.length > 0" class="px-12">
      <div class="max-w-lg mx-auto relative">
        <input
          id="article-01"
          type="radio"
          name="slider"
          class="sr-only peer/01"
        />
        <input
          id="article-02"
          type="radio"
          name="slider"
          class="sr-only peer/02"
        />
        <input
          id="article-03"
          type="radio"
          name="slider"
          class="sr-only peer/03"
          checked
        />
        <input
          id="article-04"
          type="radio"
          name="slider"
          class="sr-only peer/04"
        />
        <input
          id="article-05"
          type="radio"
          name="slider"
          class="sr-only peer/05"
        />

        <div
          class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/01:[&_article]:ring peer-focus-visible/01:[&_article]:ring-indigo-300 peer-checked/01:relative peer-checked/01:z-50 peer-checked/01:translate-x-0 peer-checked/01:scale-100 peer-checked/01:[&>label]:pointer-events-none peer-checked/02:-translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:-translate-x-40 peer-checked/03:z-30 peer-checked/04:-translate-x-40 peer-checked/04:opacity-0 peer-checked/05:-translate-x-40"
        >
          <label class="absolute inset-0" for="article-01"
            ><span class="sr-only">{{
              props.activities[0].activityName
            }}</span></label
          >
          <article class="bg-white p-6 rounded-lg shadow-2xl">
            <header class="mb-2">
              <img
                v-if="props.activities[0].imagePath == null"
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                src="../public/image/nophoto.png"
                style="width: 378px; height: 354px"
              />
              <img
                v-else
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                :src="props.activities[0].imagePath"
                alt="Icon"
                style="width: 378px; height: 354px"
              />
              <h1 class="text-xl font-bold text-slate-900">
                {{ props.activities[0].activityName }}
              </h1>
            </header>
            <div class="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                {{ props.activities[0].activityBriefDescription }}
              </p>
              <p>
                {{ dateTimeUtil.getDateTime(props.activities[0].activityDate) }} -
                {{ dateTimeUtil.getDateTime(props.activities[0].activityEndDate) }}
              </p>
              <p>{{ props.activities[0].userCount }} views</p>
            </div>
            <footer class="text-right">
                <div @click="navigateTo(`/Activities/${props.activities[0].activityId}/`)">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
                >Read more</a
              >
              </div>
            </footer>
          </article>
        </div>

        <div
          class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/02:[&_article]:ring peer-focus-visible/02:[&_article]:ring-indigo-300 peer-checked/01:translate-x-20 peer-checked/01:scale-[83.75%] peer-checked/01:z-40 peer-checked/02:relative peer-checked/02:z-50 peer-checked/02:translate-x-0 peer-checked/02:scale-100 peer-checked/02:[&>label]:pointer-events-none peer-checked/03:-translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:-translate-x-40 peer-checked/04:z-30 peer-checked/05:-translate-x-40 peer-checked/05:opacity-0"
        >
          <label class="absolute inset-0" for="article-02"
            ><span class="sr-only">{{
              props.activities[1].activityName
            }}</span></label
          >
          <article class="bg-white p-6 rounded-lg shadow-2xl">
            <header class="mb-2">
              <img
                v-if="props.activities[1].imagePath == null"
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                src="../public/image/nophoto.png"
                style="width: 378px; height: 354px"
              />
              <img
                v-else
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                :src="props.activities[1].imagePath"
                alt="Icon"
                style="width: 378px; height: 354px"
              />
              <h1 class="text-xl font-bold text-slate-900">
                {{ props.activities[1].activityName }}
              </h1>
            </header>
            <div class="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                {{ props.activities[1].activityBriefDescription }}
              </p>
              <p>
                {{  dateTimeUtil.getDateTime(props.activities[1].activityDate) }} -
                {{  dateTimeUtil.getDateTime(props.activities[1].activityEndDate) }}
              </p>
              <p>{{ props.activities[1].userCount }} views</p>
            </div>
            <footer class="text-right">
                <div @click="navigateTo(`/Activities/${props.activities[1].activityId}/`)">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                >Read more</a
              >
              </div>
            </footer>
          </article>
        </div>

        <div
          class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/03:[&_article]:ring peer-focus-visible/03:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:z-30 peer-checked/02:translate-x-20 peer-checked/02:scale-[83.75%] peer-checked/02:z-40 peer-checked/03:relative peer-checked/03:z-50 peer-checked/03:translate-x-0 peer-checked/03:scale-100 peer-checked/03:[&>label]:pointer-events-none peer-checked/04:-translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:-translate-x-40 peer-checked/05:z-30"
        >
          <label class="absolute inset-0" for="article-03"
            ><span class="sr-only">{{
              props.activities[2].activityName
            }}</span></label
          >
          <article class="bg-white p-6 rounded-lg shadow-2xl">
            <header class="mb-2">
              <img
                v-if="props.activities[2].imagePath == null"
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                src="../public/image/nophoto.png"
                style="width: 378px; height: 354px"
              />
              <img
                v-else
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                :src="props.activities[2].imagePath"
                alt="Icon"
                style="width: 378px; height: 354px"
              />
              <h1 class="text-xl font-bold text-slate-900">
                {{ props.activities[2].activityName }}
              </h1>
            </header>
            <div class="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                {{ props.activities[2].activityBriefDescription }}
              </p>
              <p>
                {{  dateTimeUtil.getDateTime(props.activities[2].activityDate) }} -
                {{  dateTimeUtil.getDateTime(props.activities[2].activityEndDate) }}
              </p>
              <p>{{ props.activities[2].userCount }} views</p>
            </div>
            <footer class="text-right">
                <div @click="navigateTo(`/Activities/${props.activities[2].activityId}/`)">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                >Read more</a
              >
              </div>
            </footer>
          </article>
        </div>

        <div
          class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/04:[&_article]:ring peer-focus-visible/04:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/01:opacity-0 peer-checked/02:translate-x-40 peer-checked/02:z-30 peer-checked/03:translate-x-20 peer-checked/03:scale-[83.75%] peer-checked/03:z-40 peer-checked/04:relative peer-checked/04:z-50 peer-checked/04:translate-x-0 peer-checked/04:scale-100 peer-checked/04:[&>label]:pointer-events-none peer-checked/05:-translate-x-20 peer-checked/05:scale-[83.75%] peer-checked/05:z-40"
        >
          <label class="absolute inset-0" for="article-04"
            ><span class="sr-only">{{
              props.activities[3].activityName
            }}</span></label
          >
          <article class="bg-white p-6 rounded-lg shadow-2xl">
            <header class="mb-2">
              <img
                v-if="props.activities[3].imagePath == null"
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                src="../public/image/nophoto.png"
                style="width: 378px; height: 354px"
              />
              <img
                v-else
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                :src="props.activities[3].imagePath"
                alt="Icon"
                style="width: 378px; height: 354px"
              />
              <h1 class="text-xl font-bold text-slate-900">
                {{ props.activities[3].activityName }}
              </h1>
            </header>
            <div class="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                {{ props.activities[3].activityBriefDescription }}
              </p>
              <p>
                {{  dateTimeUtil.getDateTime(props.activities[3].activityDate) }} -
                {{  dateTimeUtil.getDateTime(props.activities[3].activityEndDate) }}
              </p>
              <p>{{ props.activities[3].userCount }} views</p>
            </div>
            <footer class="text-right">
                <div @click="navigateTo(`/Activities/${props.activities[3].activityId}/`)">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                >Read more</a
              >
                </div>
            </footer>
          </article>
        </div>

        <div
          class="absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] peer-focus-visible/05:[&_article]:ring peer-focus-visible/05:[&_article]:ring-indigo-300 peer-checked/01:translate-x-40 peer-checked/02:translate-x-40 peer-checked/02:opacity-0 peer-checked/03:translate-x-40 peer-checked/03:z-30 peer-checked/04:translate-x-20 peer-checked/04:scale-[83.75%] peer-checked/04:z-40 peer-checked/05:relative peer-checked/05:z-50 peer-checked/05:translate-x-0 peer-checked/05:scale-100 peer-checked/05:[&>label]:pointer-events-none"
        >
          <label class="absolute inset-0" for="article-05"
            ><span class="sr-only">{{
              props.activities[4].activityName
            }}</span></label
          >
          <article class="bg-white p-6 rounded-lg shadow-2xl">
            <header class="mb-2">
              <img
                v-if="props.activities[4].imagePath == null"
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                src="../public/image/nophoto.png"
                style="width: 378px; height: 354px"
              />
              <img
                v-else
                class="inline-flex rounded-md w-full shadow mb-2 object-cover"
                :src="props.activities[4].imagePath"
                alt="Icon"
                style="width: 378px; height: 354px"
              />
              <h1 class="text-xl font-bold text-slate-900">
                {{ props.activities[4].activityName }}
              </h1>
            </header>
            <div class="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
              <p>
                {{ props.activities[4].activityBriefDescription }}
              </p>
              <p>
                {{  dateTimeUtil.getDateTime(props.activities[4].activityDate) }} -
                {{  dateTimeUtil.getDateTime(props.activities[4].activityEndDate) }} 
              </p>
              <p>{{ props.activities[4].userCount }} views</p>
            </div>
            <footer class="text-right">
                <div @click="navigateTo(`/Activities/${props.activities[4].activityId}/`)">
                <a class="text-sm font-medium text-indigo-500 hover:underline"
                  >Read more</a
                >
              </div>
            </footer>
          </article>
        </div>
      </div>
    </div>
    <!-- End: Card slider -->
  </div>
</template>

<style></style>
