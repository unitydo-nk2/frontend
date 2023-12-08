<script setup>
const emit = defineEmits(["createActivity", "updateActivity"]);

const props = defineProps({
  status: {
    type: String,
    default: "create",
  },
  activity: {
    type: Object,
    default: {},
  },
  categories: {
    type: Array,
    default: [],
  },
});

watch(
  () => props.activity,
  () => {
    (newActivity.value.activityName = props.activity.activityName),
      (newActivity.value.activityDescription =
        props.activity.activityDescription),
      (newActivity.value.activityBriefDescription =
        props.activity.activityBriefDescription),
      (newActivity.value.activitySuggestion =
        props.activity.activitySuggestion),
      (newActivity.value.activityOwnerUserName =
        props.activity.activityOwnerUserName),
      (newActivity.value.category = props.activity.categoryId),
      (newActivity.value.activityFormat = props.activity.activityFormat),
      (newActivity.value.locationName = props.activity.locationName),
      (newActivity.value.googleMapLink = props.activity.googleMapLink),
      (newActivity.value.amount = props.activity.amount),
      (newActivity.value.activityDate = props.activity.activityDate),
      (newActivity.value.activityEndDate = props.activity.activityEndDate),
      (newActivity.value.registerStartDate = props.activity.registerStartDate),
      (newActivity.value.registerEndDate = props.activity.registerEndDate),
      (newActivity.value.announcementDate = props.activity.announcementDate),
      (newActivity.value.isGamification =
        props.activity.isGamification == 1 ? true : false);
  }
);

const newActivity = ref({});
</script>
<template>
  <div v-if="newActivity" class="w-full m-4">
    <div>
      <p>เนื้อหากิจกรรม</p>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          หัวข้อกิจกรรม
        </label>
        <input
          v-model="newActivity.activityName"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          เนื้อหากิจกรรม (แบบย่อ)
        </label>
        <input
          v-model="newActivity.activityBriefDescription"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          เนื้อหากิจกรรม
        </label>
        <textarea
          v-model="newActivity.activityDescription"
          class="resize-none h-24 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          ข้อเสนอแนะ (option)
        </label>
        <input
          v-model="newActivity.activitySuggestion"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>
    <hr />
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          ผู้จัดกิจกรรม
        </label>
        <input
          :disabled="status == 'edit'"
          v-model="newActivity.activityOwnerUserName"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          หมวดหมู่กิจกรรม
        </label>
        <select
          v-model="newActivity.category"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
        >
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category.id"
          >
            {{ category.category }} / {{ category.mainCategory }}
          </option>
        </select>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-state"
        >
          รูปแบบการจัดกิจกรรม
        </label>
        <div class="relative">
          <select
            v-model="newActivity.activityFormat"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            <option value="onsite">onsite activity</option>
            <option value="online">online activity</option>
            <option value="onsiteOverNight">over night activity</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          จำนวนคนเข้าร่วม
        </label>
        <input
          v-model="newActivity.amount"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="90210"
        />
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          สถานที่
        </label>
        <input
          v-model="newActivity.locationName"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          google map link
        </label>
        <input
          v-model="newActivity.googleMapLink"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          วันจัดกิจกรรม
        </label>
        <input
          v-model="newActivity.activityDate"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="datetime-local"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          วันสิ้นสุดกิจกรรม
        </label>
        <input
          v-model="newActivity.activityEndDate"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="datetime-local"
          placeholder="Doe"
        />
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          วันเปิดรับสมัคร
        </label>
        <input
          v-model="newActivity.registerStartDate"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="datetime-local"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          วันปิดรับสมัคร
        </label>
        <input
          v-model="newActivity.registerEndDate"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="datetime-local"
          placeholder="Doe"
        />
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          วันประกาศผลผู้เข้าร่วม
        </label>
        <input
          v-model="newActivity.announcementDate"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="datetime-local"
          placeholder="Jane"
        />
        <p class="text-red-500 text-xs italic">Please fill out this field.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          <input
            :disabled="status == 'edit'"
            type="checkbox"
            v-model="newActivity.isGamification"
          />
          this activity support gamification
        </label>
      </div>
    </div>

    <div class="flex justify-center w-full">
      <button
        v-if="props.status == 'create'"
        @click="$emit('createActivity', newActivity)"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Save
      </button>
      <button
        v-else
        @click="$emit('updateActivity', props.activity.activityId, newActivity)"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Update
      </button>
    </div>
  </div>
</template>

<style></style>
