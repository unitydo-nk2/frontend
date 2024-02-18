<!-- @format -->

<script setup>
import { useCounterStore } from '../stores/counter'

const router = useRouter();

const store = useCounterStore();
onBeforeMount(async () => {
  await getUserDetails()
})

const getUserDetails = () => {
  if(store.token == '' ){
    console.log('token is null')
    if(localStorage.getItem('token') != null || localStorage.getItem('token') != undefined ){
      console.log('get token')
      store.setFromToken(localStorage.getItem('token') , localStorage.getItem('refreshToken'))
    }else{
      router.push({path: '/Login'})
    }
  }
}

</script>
<template>
  <nav class=" reletive bg-white border-gray-200 ">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <nuxt-link to="/">
        <a href="#" class="flex items-center">
          <img
            src="/image/unityDoLogo.png"
            class="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span
            class="self-center text-2xl font-semibold whitespace-nowrap text-unityDo-primary"
            >UnityDo</span
          >
        </a>
      </nuxt-link>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class=" hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white"
        >
          <nuxt-link to="/">
            <li>
              <!-- <a
                href="#"
                class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                >หน้าหลัก</a
              > -->
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >หน้าหลัก</a
              >
            </li>
          </nuxt-link>
          <!-- <nuxt-link to="/Activities/"> -->
          <!-- <li> -->
          <!-- <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto "
              >
                กิจกรรม
              </button> -->

          <!-- <button
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                กิจกรรม
              </button> -->
          <li>
            <a
              @click="navigateTo('/Activities/')"
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >กิจกรรม</a
            >
          </li>
          <!-- </li> -->
          <!-- </nuxt-link> -->
          <!-- <nuxt-link to="/ViewAllActivityPost"> -->
          <li v-if="store.role == 'Admin' || store.role == 'ActivityOwner'">
            <a
              @click="navigateTo('/ViewAllActivityPost/')"
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >ข้อมูลหลังบ้าน</a
            >
          </li>
          <!-- </nuxt-link> -->
          <li v-if="store.isLogin == true">
            <a
              @click="navigateTo('/ProfilePage/')"
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              > {{ store.username }} </a
            >
          </li>
          <li v-if="store.isLogin == false">
            <a
              @click="navigateTo('/Login/')"
              href="#"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >เข้าสู่ระบบ</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style></style>
