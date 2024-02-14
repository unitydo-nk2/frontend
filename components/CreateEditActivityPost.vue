<!-- @format -->

<script setup>
const emit = defineEmits(["createActivity", "updateActivity"]);

const props = defineProps({
  status: {
    type: String,
    default: "create",
  },
  activity: {
    type: Object,
    default: { category: 1, activityFormat: "onsite" },
  },
  categories: {
    type: Array,
    default: [],
  },
  activityImages: {
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
      (newActivity.value.suggestionNotes = props.activity.suggestionNotes),
      (newActivity.value.activityOwnerUserName =
        props.activity.activityOwnerUserName),
      (newActivity.value.category = props.activity.categoryId),
      (newActivity.value.activityFormat = props.activity.activityFormat),
      (newActivity.value.locationName =
        props.activity.locationName == null ? "" : props.activity.locationName),
      (newActivity.value.googleMapLink =
        props.activity.googleMapLink == null
          ? ""
          : props.activity.locationName),
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

const newActivity = ref({
  activityName: "",
  activityBriefDescription: "",
  activityDescription: "",
  activityOwnerUserName: "",
  category: props.activity.category, // Set the default value here
  activityFormat: props.activity.activityFormat,
  locationName: "",
  googleMapLink: "",
  amount: 0,
  activityDate: "",
  activityEndDate: "",
  registerStartDate: "",
  registerEndDate: "",
  announcementDate: "",
  isGamification: false,
});

const clearFile = () => {
  fileUpload.value = null;
  document.getElementById("fileUpload").value = "";
  isFileSelected.value = false;
};

const clearAll = () => {
  fileUpload.value = null;
  document.getElementById("fileUpload").value = "";
  isFileSelected.value = false;
  selectedCourseName.value = "";
  fileDescription.value = "";
  title.value = "";
};

const getImage = (alt) => {
  const foundObject = props.activityImages.find((obj) => obj.alt === alt);
  return foundObject ? foundObject.imagepath : undefined;
};

const getImageId = (alt) => {
  const foundObject = props.activityImages.find((obj) => obj.alt === alt);
  return foundObject ? foundObject.id : 0;
};

const fileUpload = ref([
  { name: "",
  label: "poster",
  alt: "poster",
  file: "",
  imageId: 0 },
  {
    name: "",
    label: "activityDetail1",
    alt: "activityDetail1",
    file: "",
    imageId: 0,
  },
  {
    name: "",
    label: "activityDetail2",
    alt: "activityDetail2",
    file: "",
    imageId: 0,
  },
  {
    name: "",
    label: "activityDetail3",
    alt: "activityDetail3",
    file: "",
    imageId: 0,
  },
  {
    name: "",
    label: "activityDetail4",
    alt: "activityDetail4",
    file: "",
    imageId: 0,
  },
  {
    name: "",
    label: "activityDetail5",
    alt: "activityDetail5",
    file: "",
    imageId: 0,
  },
]);



const findIndexByAlt = (arr, alt) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].alt === alt) {
      return i; // Return the index if found
    }
  }
  return -1; // Return -1 if not found
};

const uploadImage = async (event, alt, imgId) => {
  const maxSize = 15 * 1024 * 1024; // 15 MB
  const allowedTypes = ['image/jpeg', 'image/png']; // Allowed file types

  let index = findIndexByAlt(fileUpload.value, alt);
  console.log("index " + index);

  const file = event.target.files[0];

  // Check if file type is allowed
  if (!allowedTypes.includes(file.type)) {
    console.log("Invalid file type. Only JPEG and PNG files are allowed.");
    alert("Invalid file type. Only JPEG and PNG files are allowed.");
    return; // Stop further execution
  }

  fileUpload.value[index].file = file;
  fileUpload.value[index].name = file.name;
  fileUpload.value[index].imageId = imgId;

  if (file.size > maxSize) {
    console.log("File size exceeds 15 MB. Clearing file...");
    alert("File size exceeds 15 MB. Please select a smaller file.");
    clearFile();
    // fileUpload.value = null;
  } else {
    console.log("File size within limits.");
  }
}
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="กรุณากรอก"
        />
        <span
          v-show="newActivity.activityName.length == 0"
          class="text-red-500 text-xs italic"
        >
          *Please fill out this field.</span
        >
        <span
          v-show="newActivity.activityName.length > 50"
          class="text-red-500 text-xs italic"
        >
          *Name cannot longer than 50 charaters.</span
        >
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
          placeholder="กรุณากรอก"
        />
        <span
          v-show="newActivity.activityBriefDescription.length == 0"
          class="text-red-500 text-xs italic"
        >
          *Please fill out this field.</span
        >
        <span
          v-show="newActivity.activityBriefDescription.length > 100"
          class="text-red-500 text-xs italic"
        >
          *Name cannot longer than 100 charaters.</span
        >
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
          placeholder="กรุณากรอก"
        />
        <span
          v-show="newActivity.activityDescription.length == 0"
          class="text-red-500 text-xs italic"
        >
          *Please fill out this field.</span
        >
        <span
          v-show="newActivity.activityDescription.length > 500"
          class="text-red-500 text-xs italic"
        >
          *Name cannot longer than 500 charaters.</span
        >
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
          v-model="newActivity.suggestionNotes"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          type="text"
          placeholder="กรุณากรอก"
        />
      </div>
    </div>
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="กรุณากรอก"
        />
        <span
          v-show="newActivity.activityOwnerUserName.length == 0"
          class="text-red-500 text-xs italic"
        >
          *Please fill out this field.</span
        >
        <span
          v-show="newActivity.activityOwnerUserName.length > 50"
          class="text-red-500 text-xs italic"
        >
          *Name cannot longer than 50 charaters.</span
        >
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
          placeholder="กรุณากรอก"
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
        <labelf
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-zip"
        >
          จำนวนคนเข้าร่วม
        </labelf>
        <input
          v-model="newActivity.amount"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="number"
          placeholder="กรุณากรอก"
          min="0"
        />
        <span
          v-show="newActivity.amount == 0"
          class="text-red-500 text-xs italic"
        >
          *Please fill out this field.</span
        >
      </div>
    </div>

    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          v-if="newActivity.activityFormat == 'online'"
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          ช่องทางเข้าร่วมกิจกรรม เช่น zoom
        </label>
        <label
          v-else
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          สถานที่
        </label>
        <input
          v-model="newActivity.locationName"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="กรุณากรอก"
        />
        <span
          v-show="newActivity.locationName.length == 0"
          class="text-red-500 text-xs italic"
        >
          *Please fill out this field.</span
        >
        <span
          v-show="newActivity.locationName.length > 300"
          class="text-red-500 text-xs italic"
        >
          *Name cannot longer than 300 charaters.</span
        >
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          v-if="newActivity.activityFormat == 'online'"
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-last-name"
        >
          ลิงก์เข้าร่วมกิจกรรม
        </label>
        <label
          v-else
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
          placeholder="กรุณากรอก"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          รูปภาพโปสเตอร์ {{ fileUpload[0].name }}
        </label>
        <div class="flex bg-grey-lighter">
          <div v-if="status == 'edit' && getImage('poster') !== undefined">
            <div>
              <img :src="getImage('poster')" />
            </div>
          </div>

          <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base text-center leading-normal"
              >Drop files anywhere to upload <br />
              Select files</span
            >
            <input
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0"
              @change="
                (event) => uploadImage(event, 'poster', getImageId('poster'))
              "
            />
          </label>
          <div></div>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3"></div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          รูปภาพรายละเอียด(1) *ถ้ามี {{ fileUpload[1].name }}
        </label>
        <div class="flex bg-grey-lighter">
          <div
            v-if="status == 'edit' && getImage('activityDetail1') !== undefined"
          >
            <div>
              <img :src="getImage('activityDetail1')" />
            </div>
          </div>
          <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base text-center leading-normal"
              >Drop files anywhere to upload <br />
              Select files</span
            >
            <input
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0"
              @change="
                (event) =>
                  uploadImage(
                    event,
                    'activityDetail1',
                    getImageId('activityDetail1')
                  )
              "
            />
          </label>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <div
          v-if="status == 'edit' && getImage('activityDetail2') !== undefined"
        >
          <div>
            <img :src="getImage('activityDetail2')" />
          </div>
        </div>
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          รูปภาพรายละเอียด(2) *ถ้ามี {{ fileUpload[2].name }}
        </label>
        <div class="flex bg-grey-lighter">
          <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base text-center leading-normal"
              >Drop files anywhere to upload <br />
              Select files</span
            >
            <input
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0"
              @change="
                (event) =>
                  uploadImage(
                    event,
                    'activityDetail2',
                    getImageId('activityDetail2')
                  )
              "
            />
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          รูปภาพรายละเอียด(3) *ถ้ามี {{ fileUpload[3].name }}
        </label>
        <div class="flex bg-grey-lighter">
          <div
            v-if="status == 'edit' && getImage('activityDetail3') !== undefined"
          >
            <div>
              <img :src="getImage('activityDetail3')" />
            </div>
          </div>
          <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base text-center leading-normal"
              >Drop files anywhere to upload <br />
              Select files</span
            >
            <input
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0"
              @change="
                (event) =>
                  uploadImage(
                    event,
                    'activityDetail3',
                    getImageId('activityDetail3')
                  )
              "
            />
          </label>
        </div>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          รูปภาพรายละเอียด(4) *ถ้ามี {{ fileUpload[4].name }}
        </label>
        <div class="flex bg-grey-lighter">
          <div
            v-if="status == 'edit' && getImage('activityDetail4') !== undefined"
          >
            <div>
              <img :src="getImage('activityDetail4')" />
            </div>
          </div>
          <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base text-center leading-normal"
              >Drop files anywhere to upload <br />
              Select files</span
            >
            <input
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0"
              @change="
                (event) =>
                  uploadImage(
                    event,
                    'activityDetail4',
                    getImageId('activityDetail4')
                  )
              "
            />
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >
          รูปภาพรายละเอียด(5) *ถ้ามี {{ fileUpload[5].name }}
        </label>
        <div class="flex bg-grey-lighter">
          <div
            v-if="status == 'edit' && getImage('activityDetail5') !== undefined"
          >
            <div>
              <img :src="getImage('activityDetail5')" />
            </div>
          </div>
          <label
            class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white"
          >
            <svg
              class="w-8 h-8"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
              />
            </svg>
            <span class="mt-2 text-base text-center leading-normal"
              >Drop files anywhere to upload <br />
              Select files</span
            >
            <input
              type="file"
              multiple
              class="cursor-pointer relative block opacity-0"
              @change="
                (event) =>
                  uploadImage(
                    event,
                    'activityDetail5',
                    getImageId('activityDetail5')
                  )
              "
            />
          </label>
        </div>
      </div>
      <!-- <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          รูปภาพ
        </label>
        <div class="flex bg-grey-lighter">
        <label
          class="w-full flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-dashed border-gray-500 relative cursor-pointer hover:bg-gray-300 hover:text-white">
          <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span class="mt-2 text-base text-center leading-normal">Drop files anywhere to upload <br> Select files</span>
          <input type='file' multiple class="cursor-pointer relative block opacity-0 " />
        </label>
      </div> 
      </div> -->
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="datetime-local"
          placeholder="กรุณากรอก"
        />
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
          placeholder="กรุณากรอก"
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="datetime-local"
          placeholder="กรุณากรอก"
        />
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
          placeholder="กรุณากรอก"
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
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="datetime-local"
          placeholder="กรุณากรอก"
        />
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
        @click="$emit('createActivity', newActivity, fileUpload)"
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Save
      </button>
      <button
        v-else
        @click="
          $emit(
            'updateActivity',
            props.activity.activityId,
            newActivity,
            fileUpload
          )
        "
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        Update
      </button>
    </div>
  </div>
</template>

<style></style>
