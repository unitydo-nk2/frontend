<!-- @format -->
<script setup>
import { tokenUtil } from '../../functions/jwtTokenUtils'

const router = useRouter();
const store = useCounterStore();
let errorDetails = ref([]);
let formData = new FormData();

const validateEmail = (email) => {
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

    if (user.role == "activityOwner") {
      if (res.status === 200 || res.status === 201) {
        alert("you successfully create user !!");
        const jwttoken = await res.json()
        store.systemLogin(tokenUtil.paresJWT(jwttoken.accessToken).role, jwttoken.accessToken, jwttoken.refreshToken)
        router.push({ path: '/' });
      } else if (res.status === 400) {
        alert("this email have been registered in unitydo !!");
        console.log("cannot get data");
      }
    } else if (user.role == "user") {
      if (res.status === 200 || res.status === 201) {
        alert("you successfully create user !!");
        store.changeIsGoogleLogin(false);
        const jwttoken = await res.json()
        store.systemLogin(tokenUtil.paresJWT(jwttoken.accessToken).role, jwttoken.accessToken, jwttoken.refreshToken)
        alert("almost done lets unitydo know you more !!");
        router.push({ path: "/UserRegistration/CategoriesFavorite" });
      } else if (res.status === 400) {
        alert("this email have been registered in unitydo !!");
        console.log("cannot get data");
      }
    }
  } else {
    alert(errorDetails.value);
  }
};
</script>

<template>
  <div>
    <div>
      <UserRegistration @userRegistration="createUser" />
    </div>
  </div>
</template>

<style></style>
