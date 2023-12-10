<!-- @format -->

<script setup>
const props = defineProps({
  activities: {
    type: Array,
    default: [],
  },
  mainCategories: {
    type: Array,
    default: [],
  },
});

const curNameSearch = ref("");
const categoriesSelected = ref([]);
const clearAllFilter = () => {
  curNameSearch.value = "";
  categoriesSelected.value = [];
};

const searchData = computed(() => {
  const filteredActivities = ref(props.activities);
  if (curNameSearch.value.length != 0) {
    filteredActivities.value = filteredActivities.value.filter((activity) => {
      return activity.activityName.toLowerCase().includes(curNameSearch.value);
    });
  }
  if (categoriesSelected.value.length != 0) {
    filteredActivities.value = filteredActivities.value.filter((activity) => {
      if (categoriesSelected.value.includes(activity.mainCategoryId))
        return activity;
    });
  }
  return filteredActivities.value;
});
</script>

<template>
  <div class="bg-white">
    <div>
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24"
        >
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">
            All activities
          </h1>
          <p>{{ searchData.length }} activities available</p>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-6">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <!-- Filters -->
            <form class="hidden lg:block">
              <div class="mb-4">
                การเข้าร่วมกิจกรรมมีประโยชน์ต่อทั้งร่างกายและ
                จิตใจของผู้เข้าร่วม มันช่วยให้คนได้พบปะกับผู้คนใหม่
              </div>
              <div class="relative w-full min-w-[200px] h-10">
                <input
                  v-model="curNameSearch"
                  class="peer w-full h-full bg-transparent text-blue-gray-700 font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                /><label
                  class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900"
                >
                  ค้นหากิจกรรม
                </label>
              </div>
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <!-- Expand/collapse section button -->
                  <div
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Category</span>
                  </div>
                </h3>
                <!-- Filter section, show/hide based on section state. -->
                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div
                      v-for="(mainCategory, index) in mainCategories"
                      :key="index"
                      class="flex items-center"
                    >
                      <input
                        :id="mainCategory.id"
                        :name="mainCategory.id"
                        :value="mainCategory.id"
                        v-model="categoriesSelected"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        for="filter-category-0"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {{ mainCategory.mainCategory }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex items-center mt-4">
                <div
                  @click="clearAllFilter()"
                  class="cursor-pointer bg-unityDo-light-grey hover:bg-unityDo-primary text-unityDo-primary hover:text-unityDo-light-grey py-2 px-4 rounded-full"
                >
                  clear filter
                </div>
              </div>
            </form>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <ActivityListCard :activities="searchData" />
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style></style>
