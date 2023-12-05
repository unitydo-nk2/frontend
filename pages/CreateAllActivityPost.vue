<!-- @format -->

<script setup>
import { onBeforeMount, ref } from 'vue'

const activities = ref([])
const addSuccessStatus = ref(false)

const errorDetail = ref([])
const errorStatus = ref(false)

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


const createNewActivity = async (newActivity) => {
  let newActivityJson = JSON.stringify({
  })
  // if (
  // validation 
  // )
  {
    // const res = await fetch(``, {
    const res = await fetch(``, {
      method: 'POST',
    })
    if (res.status === 200 || res.status === 201) {
      addSuccessStatus.value = true
    } else if (res.status == 400) {
      errorDetail.value = []
      let e = await res.json()
      for (let i = 0; i < e.errors.length; i++) {
        var obj = e.errors[i].defaultMessage
        errorDetail.value.push(obj)
      }
      errorStatus.value = true
    }
  }
}
</script>

<template>
  <div>
    <NavBar />
    <SideBar />
    <CreateActivityPost />
  </div>
</template>

<style></style>
