<!-- @format -->
<script setup>
import { useCounterStore } from "../stores/counter";
import { dateTimeUtil } from "../functions/dateTimeUtils";

const emit = defineEmits(["createNewReview"]);

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
  reviews: {
    type: Array,
    default: [],
  },
  isUserRegistered: {
    type: Boolean,
    default: false,
  },
  isFavorite: {
    type: Boolean,
    default: false,
  },
});

const reviewLists = ref(props.reviews)
const isFavoriteStatus = ref(props.isFavorite)
const isUserValidForReview = ref(props.isUserRegistered)

const setDetailStatus = (status) => {
  detailStatus.value = status;
};

const setFavorite = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/tracks/favorite/${activityId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      }
    }
  );
  if (res.status === 200) {
    isFavoriteStatus.value = true;
  } else {
  }
};

const unFavorite = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/tracks/unFavorite/${activityId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      }
    }
  );
  if (res.status === 200) {
    isFavoriteStatus.value = false;
  } else {
  }
};



const createNewReview = async (createReview) => {
  if (
    createReview.description.length == 0 ||
    createReview.description == undefined
  ) {
    createReview.description = "-";
  }

  const formData = new FormData();

  const newReview = {
    rates: createReview.rates,
    description: createReview.description,
  };

  formData.append(
    "review",
    new Blob([JSON.stringify(newReview)], { type: "application/json" })
  );

  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/review/${props.activity.activityId
    }`,
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + store.token,
      },
      body: formData,
    }
  );

  if (res.ok) {
    alert("You successfully reviewed the activity!");
    await getReviews(props.activity.activityId);
  } else if ((res = 404)) {
    alert("Only Participants can review this activity");
  } else if ((res = 400)) {
    alert("You already reviewed this activity");
  } else {
    alert(
      "Problems occurs while create new review please try again already later."
    );
  }
};

const getReviews = async (activityId) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/activities/review/${activityId}`,
    {
      method: "GET",
      headers: {
      Authorization: "Bearer " + store.token,
    },
    }
  );
  if (res.status === 200) {
    reviewLists.value = await res.json();
    isUserValidForReview.value = false;
  } else {
    console.log("cannot get reviews");
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
      class="font-primary grid md:grid-cols-2 
      w-full h-fit pt-16 pb-16 bg-gradient-to-r from-slate-700 to-fuchsia-950">
      <div class="h-full content-center">
        <div>
          <div class="m-4">
            <img class="h-96 w-full object-cover" :src="getImage('poster')" v-if="getImage('poster')" />
            <img class="h-96 w-full object-cover" src="../public/image/nophoto.png" v-else />
          </div>
          <div class="flex justify-center">
            <div class="m-4 flex gap-2 justify-start">
              <div>
                <img class="h-36 w-36 object-cover" :src="getImage('activityDetail1')"
                  v-if="getImage('activityDetail1')" />
              </div>
              <div>
                <img class="h-36 w-36 object-cover" :src="getImage('activityDetail2')"
                  v-if="getImage('activityDetail2')" />
              </div>
              <div>
                <img class="h-36 w-36 object-cover" :src="getImage('activityDetail3')"
                  v-if="getImage('activityDetail3')" />
              </div>
              <div>
                <img class="h-36 w-36 object-cover" :src="getImage('activityDetail4')"
                  v-if="getImage('activityDetail4')" />
              </div>
              <div>
                <img class="h-36 w-36 object-cover" :src="getImage('activityDetail5')"
                  v-if="getImage('activityDetail5')" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ฝั่งขวา -->
      <div>
        <!-- ค้างคืน หรือ วันเดียว -->
        <div class="inline-flex">
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
          <div>
            <div
              class="my-4 w-auto h-8 px-2.5 py-1 bg-white rounded-2xl justify-center items-center gap-2.5 inline-flex">
              <div class="flex text-indigo-600 text-base font-normal leading-none">
                <span>{{ activity.mainCategory }} / {{ activity.category }}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- ชื่อ activity -->
        <div class="m-4 text-neutral-100 text-5xl font-bold leading-10 tracking-wide">
          {{ activity.activityName }} {{ activity.format }}
        </div>
        <!-- description -->
        <div class="m-4 text-neutral-100 text-2xl font-normal leading-normal tracking-wide line-clamp-3 w-4/5">
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
            <div class="m-4 w-24 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Location
            </div>
            <a :href="activity.googleMapLink" class="m-4 text-white text-xl font-bold leading-normal tracking-wide hover:underline underline-offset-4">
              {{ activity.locationName }}
            </a>
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
              {{ dateTimeUtil.getDateTime(activity.activityDate) }}
            </div>
            <div class="m-4 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Registration Start :
            </div>
            <div class="m-4 text-white text-xl font-bold line-clamp-1 leading-normal tracking-wide">
              {{ dateTimeUtil.getDateTime(activity.registerStartDate) }}
            </div>
            <div class="m-4 text-violet-100 text-xl font-bold leading-normal tracking-wide">
              Registration End :
            </div>
            <div class="m-4 text-white text-xl font-bold line-clamp-1 leading-normal tracking-wide">
              {{ dateTimeUtil.getDateTime(activity.registerEndDate) }}
            </div>
          </div>
          <div class="w-4/5 m-4 flex justify-center items-center gap-8">
            <div v-if="(store.role == 'user' || store.role == 'Guest') &&
              (new Date(activity.activityDate) > new Date())
              ">
              <div @click="
              navigateTo(`/ActivityRegistration/${activity.activityId}/`)
              ">
                <button
                  class="w-[196px] h-[60px] bg-white hover:bg-indigo-600  hover:text-white rounded-xl border border-indigo-600 text-indigo-600 text-2xl font-bold">
                  Register !
                </button>
              </div>
            </div>
            <div v-else>
              <button 
                  class="w-full h-[60px] p-4 bg-indigo-600  text-white rounded-xl border border-indigo-600 text-2xl font-bold">
                  Registeration closed
                </button>
            </div>
            <div v-if="store.role == 'user'">
              <button v-if="isFavoriteStatus" @click="unFavorite(activity.activityId)"
                class=" bg-white hover:bg-indigo-600  hover:fill-white fill-indigo-600  item-center rounded-full  ">

                <svg xmlns="http://www.w3.org/2000/svg" class="h-[52px] m-4" viewBox="0 0 512 512">
                  <path
                    d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>

              </button>
              <button v-else @click="setFavorite(activity.activityId)"
                class=" bg-white hover:bg-indigo-600  hover:fill-white fill-indigo-600  item-center rounded-full  ">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-[52px] m-4">
                  <path
                    d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>

              </button>
            </div>


            <!-- <div v-else-if="store.role == 'user'">
              <div>
                <div @click="setFavorite(activity.activityId)" class="rounded-xl p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="#562cff"
                      d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </div>
              </div>
              <div>
                <div @click="setFavorite(activity.activityId)" class="rounded-xl bg-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="m-2">
                    <path fill="#562cff"
                      d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                  </svg>
                </div>
              </div>
            </div> -->

          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white">
      <div class="text-center text-indigo-600 text-3xl font-bold m-12">
        Activity Details
      </div>
      <div class="w-full p-4">
        <!--Tabs navigation-->
        <ul class="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0" role="tablist" data-twe-nav-ref>
          <li role="presentation">
            <a v-if="detailStatus == 'Description'" data-twe-nav-active
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-home" role="tab" aria-controls="tabs-home"
              aria-selected="true" @click="setDetailStatus('Description')">Description</a>
            <a v-else
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-home" role="tab" aria-controls="tabs-home"
              aria-selected="true" @click="setDetailStatus('Description')">Description</a>
          </li>
          <li role="presentation">
            <a v-if="detailStatus == 'Suggestion'" data-twe-nav-active
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
              aria-selected="true" @click="setDetailStatus('Suggestion')">Suggestion</a>
            <a v-else
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
              aria-selected="true" @click="setDetailStatus('Suggestion')">Suggestion</a>
          </li>
          <li role="presentation">
            <a v-if="detailStatus == 'Reviews'" data-twe-nav-active
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
              aria-selected="true" @click="setDetailStatus('Reviews')">Reviews</a>
            <a v-else
              class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary"
              data-twe-toggle="pill" data-twe-target="#tabs-profile" role="tab" aria-controls="tabs-profile"
              aria-selected="true" @click="setDetailStatus('Reviews')">Reviews</a>
          </li>
        </ul>
        <!--Tabs content-->
        <div class="border-b">
          <div v-if="detailStatus == 'Description'" class="text-center m-16">
            {{ activity.activityDescription }}
          </div>
          <div v-if="detailStatus == 'Suggestion'" class="text-center m-16">
            {{ activity.suggestionNotes }}
          </div>
          <div v-if="detailStatus == 'Reviews'" class="text-center m-16">
            <UserReview @createNewReview="createNewReview" :reviews="reviewLists" :isUserRegistered="isUserValidForReview"
              :isActivityDone="activity.activityStatus == 'Done'" />
          </div>
        </div>
      </div>
    </div>

    <div class="w-full bg-white">
      <div class="text-center text-indigo-600 text-3xl font-bold m-12">
        You may also like
      </div>
      <div class="overflow-x-scroll hide-scrollbar w-full lg:col-span-9">
        <div v-if="similarActivities.length == 0" class="text-center text-xl font-bold">
          Oops ! seem like there is no similar activities to show.
        </div>
        <div v-else>
          <ImageSlider :activities="similarActivities" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
