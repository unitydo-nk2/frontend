<!-- @format -->
<script setup>
import NavBar from '~/components/NavBar.vue';
// import Carousel from '~/components/Carousel.vue';


import { onBeforeMount, ref } from 'vue'

const activities = ref([])


const getActivities = async () => {
  // const res = await fetch(``)
  const res = await fetch(``, {
    method: 'GET',
    headers: {

    }
  })
  if (res.status === 200) {
    activities.value = await res.json()
  } else if (res.status === 401) {
    const resf = await fetch(``, {
      headers: {

      }
    })
  } else {
    console.log('cannot get data')
  }
}
</script>

<template>
  <div class="font-primary">
    <div>
      <NavBar />
    </div>
    <div>
      <!-- <Carousel /> -->
    </div>
    <div class="ml-16 mb-8 overflow-x-scroll">
      <div
        class="w-52 text-neutral-500 text-xl font-medium font-['DB Heavent'] leading-7 tracking-wide"
      >
        Recommend activity
      </div>
      <div
        class="text-indigo-600 text-3xl font-bold font-['DB Heavent'] leading-10 tracking-wide"
      >
        แนะนำสำหรับคุณ
      </div>
    </div>
    <div class="ml-16 overflow-x-scroll flex flex-row">
      <Cards />
    </div>
  </div>
</template>

<style></style>
