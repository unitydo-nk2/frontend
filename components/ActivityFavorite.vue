<!-- @format -->

<script setup>
import { useCounterStore } from "../stores/counter";
const store = useCounterStore();

const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
  activityImages: {
    type: Array,
    default: [],
  },
  isRegistered:{
    type:Boolean,
    default:false
  }
});

const statusSelected = ref('all');
const filterRegisteration = (status)=> {
  statusSelected.value = status;
}

const searchActivities = computed(() => {
  const filteredActivities = ref(props.activities);
  if(props.isRegistered){
    if(statusSelected.value == 'all'){
      return filteredActivities.value
    } else {
      filteredActivities.value = filteredActivities.value.filter((activity) => {
      if (statusSelected.value.includes(activity.status))
        return activity;
    });
    }
  }else{
    return filteredActivities.value;
  }
  return filteredActivities.value;
});

const trackHistory = async (activityId) => {
  console.log(store.getEmail);
  let email =
    store.getEmail == null || store.getEmail == "" ? "guest" : store.getEmail;
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/tracks/${activityId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
        Authorization: "Bearer " + store.token,
      },
      body: email,
    }
  );
  if (res.status === 200) {
  } else {
    console.log("cannot get data");
  }
};

    const getTabClass =(status)=> {
      return {
        'inline-block': true,
        'w-full': true,
        'p-4': true,
        'bg-gray-100': statusSelected.value === status,
        'text-gray-900': statusSelected.value === status,
        'border-r': true,
        'border-gray-200': true,
        'dark:border-gray-700': true,
        'tab-link': !statusSelected.value === status,
        'bg-white': !statusSelected.value === status,
        'hover:text-gray-700': !statusSelected.value === status,
        'hover:bg-gray-50': !statusSelected.value === status,
        'focus:ring-4': !statusSelected.value === status,
        'focus:ring-blue-300': !statusSelected.value === status,
        'focus:outline-none': !statusSelected.value === status,
        'dark:hover:text-white': !statusSelected.value === status,
        'dark:bg-gray-800': !statusSelected.value === status,
        'dark:hover:bg-gray-700': !statusSelected.value === status
      }};

</script>

<template>
  <p v-if="isRegistered" class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
    Registered Activities
  </p>
  <p v-else class="py-2 pt-5 text-xl text-unityDo-primary font-semibold">
    Favorite Activities
  </p>

  <div v-if="isRegistered">

    <div class="sm:hidden">
    <label for="tabs" class="sr-only">Select your country</label>
    <select id="tabs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>All registration</option>
        <option>Registered</option>
        <option>Selected</option>
        <option>Under Review</option>
        <option>Successful</option>
        <option>Declined</option>
    </select>
</div>
<ul class="hidden text-sm my-4 font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400" id="tabList">
    <li @click="filterRegisteration('all')" class="w-full focus-within:z-10" >
      <a :class="getTabClass('all')">All registration</a>
    </li>  
    <li @click="filterRegisteration('registered')" class="w-full focus-within:z-10">
        <a :class="getTabClass('registered')" >Registered</a>
    </li>
    <li @click="filterRegisteration('selected')" class="w-full focus-within:z-10">
        <a :class="getTabClass('selected')">Selected</a>
    </li>
    <li @click="filterRegisteration('success')" class="w-full focus-within:z-10">
        <a :class="getTabClass('success')">Under Review</a>
    </li>
    <li @click="filterRegisteration('review')" class="w-full focus-within:z-10">
        <a :class="getTabClass('review')">Successful</a>
    </li>
    <li @click="filterRegisteration('declined')" class="w-full focus-within:z-10">
        <a :class="getTabClass('declined')">Declined</a>
    </li>
</ul>
  </div>


  <div class="space-y-1">
    <div class="rounded-md border bg-white">
      <div>
        <div class="m-16 text-center" v-if="searchActivities.length == 0"><div class="text-2xl">No activity</div><div>        <div>
          <ViewAllActivityButton/>
        </div></div></div>
        <div v-else>
          <div class="container mx-auto">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 py-2 pt-8 pb-8">
              <div
                v-for="(activity, index) in searchActivities"
                :key="index"
                class="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <nuxt-link :to="`/Activities/${activity.id}`">
                  <div @click="trackHistory(activity.id)">
                    <img
                      v-if="activity.imagePath == null"
                      src="../public/image/nophoto.png"
                      alt="Sunset in the mountains"
                      class="w-full h-60 object-cover"
                    />
                    <img
                      v-else
                      :src="activity.imagePath"
                      alt="Sunset in the mountains"
                      class="w-full h-60 object-cover"
                    />

                    <div class="px-6 py-4">
                      <div class="font-bold text-xl mb-2">
                        {{ activity.activityName }}
                      </div>
                      <p class="text-gray-700 text-base">
                        {{ activity.activityBriefDescription }}
                      </p>
                    </div>

                    <div v-if="isRegistered" class="px-6 pt-4 pb-2">
                      <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {{ activity.status == 'review' ? "reviewed" : activity.status }}</span
                      >
                    </div>
                    <div v-else="isRegistered" class="px-6 pt-4 pb-2">
                      <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {{ activity.mainCategory }}</span
                      >
                      <span
                        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      >
                        {{ activity.category }}</span
                      >
                    </div>
                    
                  </div>
                </nuxt-link>
     
                <!--  -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
