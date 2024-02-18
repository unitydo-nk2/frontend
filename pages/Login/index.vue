<!-- @format -->

<script setup>
import { tokenUtil } from '../../functions/jwtTokenUtils'
import { validateUtil } from '../../functions/validateUtils'
import { useCounterStore } from '../../stores/counter'

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
      // localStorageUtil.set('loginByMicrosoft', false)
      // localStorageUtil.set('token', jwttoken.accessToken)
      // localStorageUtil.set('refreshToken', jwttoken.refreshToken)
      // localStorageUtil.set('role', tokenUtil.paresJWT(jwttoken.accessToken).role)
      // localStorageUtil.set('isLogin', true)
      alert('login success')
      router.push({ path: '/' });
    } else if (res.status == 401) {
      const jwttoken = await res.json()
      // alert(jwttoken.message)
            // clearError()
      errorDetail.value.push(`Password Incorrect`)
      errorStatus.value = true
    } else if (res.status == 404) {
      clearError()
      errorDetail.value.push(`A user with the specified email DOES NOT exist`)
      errorStatus.value = true
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
