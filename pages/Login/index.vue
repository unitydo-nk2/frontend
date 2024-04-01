<!-- @format -->

<script setup>
import { tokenUtil } from '../../functions/jwtTokenUtils'
import { useCounterStore } from '../../stores/counter'

onBeforeMount(async () => {
  console.log('b4 mounted')
  const store = useCounterStore();
  store.logout();
})

let errorDetails = ref([]);
const router = useRouter();
const store = useCounterStore();

const validatePassWord = (password) => {
    if (password.length < 8 || password.length > 14) {
      errorDetails.value.push("Password Incorrect");
    }
};

const userLoginAuthentication = async (user) => {
  validatePassWord(user.password)
  // const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/login`, {
  if (errorDetails.value.length == 0) {
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/login`, {
      // const res = await fetch(`http://localhost:8080/api/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password
      })
    })
    if (res.status === 200 || res.status === 201) {
      const jwttoken = await res.json()
      console.log(jwttoken.accessToken);
      store.systemLogin(tokenUtil.paresJWT(jwttoken.accessToken).role,jwttoken.accessToken,jwttoken.refreshToken)
      alert('login success')
      router.push({ path: '/' });
    } else if (res.status == 401) {
      alert(`Password Incorrect`)
    } else if (res.status == 404) {
      alert(`A user with the specified email DOES NOT exist`)
    }
  }else{
    alert(errorDetails.value)
  }
}
</script>

<template>
<!-- <Login @success="handleLoginSuccess" @error="handleLoginError"/> -->
<Login @userLogInClick="userLoginAuthentication"/>
</template>

<style></style>
