<!-- @format -->
<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
import { tokenUtil } from '../functions/jwtTokenUtils'
import { useCounterStore } from '../stores/counter'

const store = useCounterStore();
const emit = defineEmits(["userLogInClick"]);
const router = useRouter();
const usercredential = ref();
// const emit = defineEmits(["success", "error"]);

const getTokenbyEmail = async (email: string) => {
    let emailValidate = new FormData();
    emailValidate.append("email", email);

    const res = await fetch(
      `${import.meta.env.VITE_BASE_URL}/auth/getGoogleToken`,
      {
        method: "POST",
        body: emailValidate,
      }
    );
    if (res.status === 200 || res.status === 201) {
      const jwttoken = await res.json();
      store.googleLogin(tokenUtil.paresJWT(jwttoken.accessToken).role,jwttoken.accessToken,jwttoken.refreshToken);
      router.push({path: '/'})
    } else if (res.status == 204) {
      alert(`no data go to registration`);
      store.changeEmail(tokenUtil.paresJWT(usercredential.value).email )
      store.changeIsGoogleLogin(true)
      router.push({path: '/UserRegistration/'})
    } else {
      alert(`error loging in unityDo with google`);
    }
};

// handle success event
const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  let parseToken = tokenUtil.paresJWT(credential);
  usercredential.value = credential;
  getTokenbyEmail(parseToken.email);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};

const userLogin = computed(() => {
  return {
    email: "",
    password: "",
  };
});

</script>

<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div
        class="container flex items-center justify-center min-h-screen px-6 mx-auto"
      >
        <div class="w-full max-w-md">
          <img
            class="w-auto h-16 sm:h-16"
            src="../public/unityDoicologo.ico"
            alt=""
          />

          <h1
            class="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white"
          >
            sign In
          </h1>

          <div class="relative flex items-center mt-8">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              v-model="userLogin.email"
              type="email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              @keyup.enter="$emit('userLogInClick', userLogin)"
              v-model="userLogin.password"
              type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
            />
          </div>

          <div class="mt-6">
            <button
              @click="$emit('userLogInClick', userLogin)"
              class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            >
              Sign in
            </button>

            <p class="mt-4 text-center text-gray-600 dark:text-gray-400">
              or sign in with
            </p>
            <div class="relative flex justify-center mt-4">
              <GoogleSignInButton
                @success="handleLoginSuccess"
                @error="handleLoginError"
              ></GoogleSignInButton>
            </div>
            <div class="mt-6 text-center">
              <a @click="navigateTo('/UserRegistration/')">
                <button
                  class="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Don’t have an account yet? Sign up
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style></style>
