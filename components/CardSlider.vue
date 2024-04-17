<script setup>
import { dateTimeUtil } from "../functions/dateTimeUtils";

const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <div>
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
                <nuxt-link :to="`/Activities/${props.activities[0].activityId}`">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                href="#0"
                >Read more</a
              >
              </nuxt-link>
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
                <nuxt-link :to="`/Activities/${props.activities[1].activityId}`">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                >Read more</a
              >
              </nuxt-link>
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
                <nuxt-link :to="`/Activities/${props.activities[2].activityId}`">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                >Read more</a
              >
              </nuxt-link>
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
                <nuxt-link :to="`/Activities/${props.activities[3].activityId}`">
              <a
                class="text-sm font-medium text-indigo-500 hover:underline"
                >Read more</a
              >
                </nuxt-link>
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
                <nuxt-link :to="`/Activities/${props.activities[4].activityId}`">
                <a class="text-sm font-medium text-indigo-500 hover:underline"
                  >Read more</a
                >
              </nuxt-link>
            </footer>
          </article>
        </div>
      </div>
    </div>
    <!-- End: Card slider -->
  </div>
</template>

<style></style>
