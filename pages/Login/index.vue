<!-- @format -->

<script setup>
import { tokenUtil } from '../../functions/jwtTokenUtils'
import { validateUtil } from '../../functions/ValidateUtils'
import { useCounterStore } from '../../stores/counter'

onBeforeMount(async () => {
  console.log('b4 mounted')
  const store = useCounterStore();
  store.logout();
})

const router = useRouter();
const store = useCounterStore();
const userLoginAuthentication = async (user) => {
  // const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/login`, {
  if (validateUtil.email(user.email)) {
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
    alert("please insert email format")
  }
}
</script>

<template>
<!-- <Login @success="handleLoginSuccess" @error="handleLoginError"/> -->
<Login @userLogInClick="userLoginAuthentication"/>
</template>

<style></style>
