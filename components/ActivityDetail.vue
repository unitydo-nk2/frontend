<!-- @format -->
<script setup>
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
const detailStatus = ref("Description");
const props = defineProps({
  activity: {
    type: Object,
    default: {},
  },
  activityImages: {
    type: Array,
    default: [],
  },
  similarActivities: {
    type: Array,
    default: [],
  },
});

const setDetailStatus = (status) => {
  detailStatus.value = status
}

const setFavorite = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/tracks/favorite/${activityId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
      body: store.getEmail,
    }
  );
  if (res.status === 200) {
    alert("added favorite");
  } else {
    console.log("cannot get data");
  }
};
const getImage = (alt) => {
  const foundObject = props.activityImages.find((obj) => obj.alt === alt);
  return foundObject ? foundObject.imagepath : undefined;
};
</script>

<template>
  <div>
    <div
      class="font-primary grid md:grid-cols-2 w-full h-fit pt-16 pb-16 bg-gradient-to-r from-slate-700 to-fuchsia-950">
      <div class="">
        <div class="m-4">
          <img class="h-96 w-full object-cover" :src="getImage('poster')" v-if="getImage('poster')" />
          <img class="h-96 w-full object-cover" src="../public/image/nophoto.png" v-else />
        </div>

        <div>
          <div class="m-4 flex gap-2 justify-center">
            <div>
              <!-- <img class="h-28 w-full" :src="getImage('activityDetail1')" /> -->
              <img class="h-36 w-36 object-cover" :src="getImage('activityDetail1')"
                v-if="getImage('activityDetail1')" />
              <img class="h-36 w-36 object-cover" src="../public/image/nophoto.png" v-else />
            </div>
            <div>
              <img class="h-36 w-36 object-cover" :src="getImage('activityDetail2')"
                v-if="getImage('activityDetail2')" />
              <img class="h-36 w-36 object-cover" src="../public/image/nophoto.png" v-else />
            </div>
            <div>
              <img class="h-36 w-36 object-cover" :src="getImage('activityDetail3')"
                v-if="getImage('activityDetail3')" />
              <img class="h-36 w-36 object-cover" src="../public/image/nophoto.png" v-else />
            </div>
            <div>
              <img class="h-36 w-36 object-cover" :src="getImage('activityDetail4')"
                v-if="getImage('activityDetail4')" />
              <img class="h-36 w-36 object-cover" src="../public/image/nophoto.png" v-else />
            </div>
            <div>
              <img class="h-36 w-36 object-cover" :src="getImage('activityDetail5')"
                v-if="getImage('activityDetail5')" />
              <img class="h-36 w-36 object-cover" src="../public/image/nophoto.png" v-else />
            </div>
          </div>
        </div>
      </div>
      <!-- ฝั่งขวา -->
      <div>
        <!-- ค้างคืน หรือ วันเดียว -->
        <div class="flex">
          <div class="m-4 w-28 h-8 px-2.5 py-1 bg-white rounded-2xl justify-center items-center gap-2.5 inline-flex">
            <div class="flex text-indigo-600 text-base font-normal leading-none">
              <svg class="mr-4" width="11" height="16" viewBox="0 0 11 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.5 7.6C4.97904 7.6 4.47941 7.38929 4.11104 7.01421C3.74267 6.63914 3.53571 6.13043 3.53571 5.6C3.53571 5.06957 3.74267 4.56086 4.11104 4.18579C4.47941 3.81071 4.97904 3.6 5.5 3.6C6.02096 3.6 6.52058 3.81071 6.88896 4.18579C7.25733 4.56086 7.46429 5.06957 7.46429 5.6C7.46429 5.86264 7.41348 6.12272 7.31476 6.36537C7.21605 6.60802 7.07136 6.8285 6.88896 7.01421C6.70656 7.19993 6.49002 7.34725 6.2517 7.44776C6.01338 7.54827 5.75795 7.6 5.5 7.6ZM5.5 0C4.04131 0 2.64236 0.589998 1.61091 1.6402C0.579463 2.69041 0 4.11479 0 5.6C0 9.8 5.5 16 5.5 16C5.5 16 11 9.8 11 5.6C11 4.11479 10.4205 2.69041 9.38909 1.6402C8.35764 0.589998 6.95869 0 5.5 0Z"
                  fill="#5628FF" />
              </svg>
              <span v-if="activity.activityFormat == 'onsite' ||
            activity.activityFormat == 'onsiteOverNight'
            ">
                On-site
              </span>
              <span v-else>online</span>
            </div>
          </div>
          <div v-if="activity.activityFormat == 'onsiteOverNight'"
            class="m-4 w-60 h-8 px-2.5 py-1 bg-white rounded-2xl justify-center items-center gap-2.5 inline-flex">
            <div class="flex text-indigo-600 font-normal leading-none">
              <svg class="mr-4" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22 17V14M22 14H2M22 14H12V9H19C19.7956 9 20.5587 9.31607 21.1213 9.87868C21.6839 10.4413 22 11.2044 22 12V14ZM2 8V17M5 9C5 9.53043 5.21071 10.0391 5.58579 10.4142C5.96086 10.7893 6.46957 11 7 11C7.53043 11 8.03914 10.7893 8.41421 10.4142C8.78929 10.0391 9 9.53043 9 9C9 8.46957 8.78929 7.96086 8.41421 7.58579C8.03914 7.21071 7.53043 7 7 7C6.46957 7 5.96086 7.21071 5.58579 7.58579C5.21071 7.96086 5 8.46957 5 9Z"
                  stroke="#5628FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

              Stay over nights activity
            </div>
          </div>
        </div>
        <!-- ชื่อ activity -->
        <div class="m-4 text-neutral-100 text-5xl font-bold leading-10 tracking-wide">
          {{ activity.activityName }} {{ activity.format }}
        </div>
        <!-- description -->
        <div class="m-4 text-neutral-100 text-2xl font-normal leading-normal tracking-wide">
          {{ activity.activityDescription }}
        </div>
        <!-- รายละเอียด -->
        <div>
          <!-- <div class="m-4 w-full h-px border border-neutral-50"></div> -->
          <div class="grid grid-cols-2 grid-rows-7 gap-y-0 w-4/5 border-t border-b">
            <div class="m-4 w-36 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              ActivityOwner
            </div>
            <div class="m-4 text-white text-xl font-bold leading-normal tracking-wide">
              {{ activity.activityOwnerUserName }}
            </div>
            <div class="m-4 w-36 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Category
            </div>
            <div class="m-4 text-white text-xl font-bold leading-normal tracking-wide">
              {{ activity.mainCategory }} / {{ activity.category }}
            </div>
            <div class="m-4 w-24 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Location
            </div>
            <div class="m-4 text-white text-xl font-bold leading-normal tracking-wide">
              {{ activity.locationName }}
            </div>
            <div class="m-4 w-24 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Amount
            </div>
            <div class="m-4 text-white text-xl font-bold leading-normal tracking-wide">
              {{ activity.amount }} participants
            </div>
            <div class="m-4 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Activity Date
            </div>
            <div class="m-4 text-white text-xl font-bold line-clamp-1 leading-normal tracking-wide">
              {{ Date(activity.activityDate) }}
            </div>
            <div class="m-4 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Registration between :
            </div>
            <div class="m-4 text-white text-xl font-bold line-clamp-1 leading-normal tracking-wide">
              {{ Date(activity.registerStartDate) }} -
              {{ Date(activity.registerEndStartDate) }}
            </div>
          </div>
          <!-- <div class="m-4 w-full h-px border border-neutral-50"></div> -->
          <!-- buttons -->
          <div class="flex m-4 justify-cenetr">
            <div v-if="store.role == 'User' || store.role == 'Guest'">
              <nuxt-link :to="`/ActivityRegistration/${activity.activityId}`">
                <button
                  class="w-[196px] h-[60px] ml-4 bg-white rounded-xl border border-indigo-600 text-indigo-600 text-2xl font-bold">
                  Register !
                </button>
              </nuxt-link>
            </div>

            <div v-if="store.role == 'User'">
              <button @click="setFavorite(activity.activityId)"
                class="w-[196px] h-[60px] ml-4 bg-white rounded-xl border border-indigo-600 text-indigo-600 text-2xl font-bold">
                Save as favorite
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>


    <div class="w-full  bg-white">
      <div class="text-center text-indigo-600 text-3xl font-bold m-12">Activity Details</div>
      <div class="w-full p-4">
        <!--Tabs navigation-->
        <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0" role="tablist" data-twe-nav-ref>
          <li role="presentation">
            <a v-if="detailStatus=='Description'"
              data-twe-nav-active
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-home" role="tab"
              aria-controls="tabs-home" aria-selected="true" @click="setDetailStatus('Description')">Description</a>
              <a v-else
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-home" role="tab"
              aria-controls="tabs-home" aria-selected="true" @click="setDetailStatus('Description')">Description</a>
          </li>
          <li role="presentation">
            <a v-if="detailStatus=='Suggestion'"
              data-twe-nav-active
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
              aria-selected="true" @click="setDetailStatus('Suggestion')">Suggestion</a>
              <a v-else
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
              aria-selected="true" @click="setDetailStatus('Suggestion')">Suggestion</a>
          </li>
        </ul>

        <!--Tabs content-->
        <div class="border-b">
          <div v-if="detailStatus=='Description'" class="text-center m-16">
            {{ activity.activityDescription }}
          </div>
          <div v-if="detailStatus=='Suggestion'" class="text-center m-16">
            {{ activity.suggestionNotes }}
          </div>
        </div>
      </div>
    </div>

    <div class="w-full  bg-white">
      <div class="text-center text-indigo-600 text-3xl font-bold m-12">You may also like</div>
      <div class="overflow-x-scroll hide-scrollbar w-full lg:col-span-9">
        <ImageSlider :activities="similarActivities" />
      </div>
    </div>


  </div>
</template>

<style></style>
0
