<script setup>
const emit = defineEmits(["sendFavoriteCategory"]);
const props = defineProps({
  categories: {
    type: Array,
    default: [],
  },
});

const favCategories = ref([]);

const removeObjectFromArray = (object) => {
  const index = favCategories.value.findIndex((item) => item === object);
  if (index !== -1 ) {
    favCategories.value.splice(index, 1);
    return true; // Object found and removed
  }
  return false; // Object not found
};

const setFavoriteCategories = (category) => {
  if (!removeObjectFromArray(category) && favCategories.value.length <= 2) {
    favCategories.value.push(category);
  }else{
    alert('you can only choose 3 categories')
  }
};

</script>

<template>
  <div>
    <div>
      <div>
        <section class="bg-white dark:bg-gray-900">
          <div class="flex justify-center min-h-screen">
            <div
              class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5"
            >
              <div class="w-full">
                <img
                  class="w-auto h-18 sm:h-16"
                  src="/image/unityDoLogo.png"
                  alt=""
                />
                <h1
                  class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white pt-4"
                >
                  Almost Done !
                </h1>

                <p class="mt-4 text-gray-500 dark:text-gray-400">
                  Let’s UnityDo know you more.
                </p>
                <div>
                  <!-- <div class="w-96 h-80 relative"> -->
                  <div class="container mx-auto">
                    <div
                      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                      <div v-for="(category, index) in categories" :key="index">
                        <CategoriesCard
                          :category="category"
                          @click="setFavoriteCategories(category)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h1
                    class="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white pt-4"
                  >
                    favorite activities (required 3)
                  </h1>
                  <div class="container mx-auto">
                    <div
                      class="grid h-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                    >
                      <div
                        v-for="(category, index) in favCategories"
                        :key="index"
                      >
                        <CategoriesCard
                          :category="category"
                          @click="setFavoriteCategories(category)"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex justify-end gap-3 pt-2 col-span-2">
                <button
                  @click="$emit('sendFavoriteCategory', favCategories)"
                  class="hover:bg-unityDo-primary text-unityDo-primary hover:text-white font-semibold font-bold py-2 px-4 border border-unityDo-primary rounded"
                >
                  Done
                </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style></style>
