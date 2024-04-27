<script setup>
import { useCounterStore } from "../stores/counter";

const router = useRouter();
const store = useCounterStore();
const categories = ref([]);

onBeforeMount(async () => {
  await getCategories();
});

const getCategories = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/categories`,
    { method: "GET" }
  );
  if (res.status === 200) {
    categories.value = await res.json();
  } else {
    console.log("cannot get data");
  }
};

const setUserFavoriteCategory = async (categories) => {

await categories.forEach(async (category, index) => {
  const formData = new FormData();

  let favoriteCategoryJson = JSON.stringify({
    userEmail: store.email,
    mainCategoryId: category.id,
    categoryRank: index + 1
  });

  const blob = new Blob([favoriteCategoryJson], { type: "application/json" });
  formData.append("favoriteCategory", blob);

  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}/auth/favoriteCategory`,
    { method: "POST", body: formData }
  );

  if (res.ok) {
  } else if (res.status === 400) {
    const data = await res.json();
    alert("Cannot sending the request. Please try again.");
  } else {
    throw new Error("Failed to fetch");
  }

});
alert("You have successfully set your favorite category!");
router.push({ path: "/" });
};

</script>
 
<template>
      <UserFavoriteCategoriesSelector :categories="categories" @sendFavoriteCategory="setUserFavoriteCategory"/>
</template>
 
<style>

</style>