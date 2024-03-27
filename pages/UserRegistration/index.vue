<!-- @format -->

<script setup>
import { useCounterStore } from "../stores/counter";

const router = useRouter();
const store = useCounterStore();
const step = ref(0);
const categories = ref([]);

let errorDetails = ref([]);
let formData = new FormData();

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
    console.log("categories value " + categories.value);
  } else {
    console.log("cannot get data");
  }
};

const validateEmail = (email) => {
  console.log("email = " + email);
  let validRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(validRegex)) {
  } else {
    errorDetails.value.push("email is not in email format");
  }
};

const validateLength = (string, label, length = 0) => {
  if (label == "email") {
    validateEmail(string);
  }
  if (string.length > length) {
    errorDetails.value.push(
      label + " cannot more than " + length + " characters"
    );
  } else if (string.length == 0 || string == undefined || string == null) {
    errorDetails.value.push(label + " is requied");
  }
};

const validateUser = (user) => {
  console.log("checking");
  validateLength(user.name, "name", 50);
  validateLength(user.surName, "surname", 50);
  validateLength(user.email, "email", 100);
  validateLength(user.religion, "religion", 100);
  validateLength(user.gender, "gender", 50);
  validateLength(user.address, "address", 500);
  validateLength(user.telephoneNumber, "telephone number", 10);
  validateLength(user.emergencyPhoneNumber, "emergency phone number", 10);
  validatePassWord(user.password, user.confirmedPassword);
};

const validatePassWord = (password, confirmedPassword) => {
  if (store.isGoogleLogin == false) {
    if (password.length < 8 || password.length > 14) {
      errorDetails.value.push("password must be between 8 - 14 characters");
    }
    if (password != confirmedPassword) {
      errorDetails.value.push("confirmed password miss match");
    }
  }
};

const createUser = async (user) => {
  // alert("hello world")
  errorDetails.value = [];
  validateUser(user);
  if (errorDetails.value.length == 0) {
    let userJson = JSON.stringify({
      name: user.name,
      surName: user.surName,
      username: user.email,
      password: user.password,
      nickName: user.nickName,
      email: user.email,
      gender: user.gender,
      role: user.role,
      dateOfBirth: user.dateOfBirth,
      religion: user.religion,
      telephoneNumber: user.telephoneNumber,
      address: user.address,
      emergencyPhoneNumber: user.emergencyPhoneNumber,
    });

    const blob = new Blob([userJson], { type: "application/json" });
    formData.append("user", blob);
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/auth/registration`,
      { method: "POST", body: formData }
    );

    if(user.role == "ActivityOwner"){
      if (res.status === 200 || res.status === 201) {
      alert("you successfully create user !!");
      store.changeIsGoogleLogin(false);
      router.push({ path: "/Login" });
    } else if (res.status === 400) {
      alert("this email have been registered in unitydo !!");
      console.log("cannot get data");
    }
    }else if(user.role=='User'){
      if (res.status === 200 || res.status === 201) {
      alert("you successfully create user !!");
      store.changeIsGoogleLogin(false);
      store.email = user.email;
      step.value = 1;
    } else if (res.status === 400) {
      alert("this email have been registered in unitydo !!");
      console.log("cannot get data");
    }
    }

  } else {
    alert(errorDetails.value);
  }
};

const setUserFavoriteCategory = async (categories) => {

  await categories.forEach(async (category, index) => {
    const formData = new FormData();

    console.log(index + ') category '+category)
    console.log('email '+store.email)

    let userJson = JSON.stringify({
      userEmail: store.email,
      mainCategoryId: category.id,
      categoryRank: index + 1
    });

    const blob = new Blob([userJson], { type: "application/json" });
    formData.append("favoriteCategory", blob);

    try {
    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/auth/favoriteCategory`,
      { method: "POST", body: formData }
    );

    if (res.ok) {
      alert("You have successfully set your favorite category!");
      router.push({ path: "/Login" });
    } else if (res.status === 400) {
      const data = await res.json();
      alert(data.message || "Bad request");
    } else {
      throw new Error("Failed to fetch");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
  
  });

};


</script>

<template>
  <div>
    <div v-if="step == 0">
      <UserRegistration @userRegistration="createUser" />
    </div>
    <div v-else-if="step == 1">
      <UserFavoriteCategoriesSelector :categories="categories" @sendFavoriteCategory="setUserFavoriteCategory"/>
    </div>
  </div>
</template>

<style></style>
