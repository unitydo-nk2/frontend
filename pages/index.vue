<!-- @format -->
<script setup >
const activities = ref([])

onBeforeMount(async () => {
  await getActivities()
})

const getActivities = async () => {
  const res = await fetch(`http://localhost:8080/api/activities/recommends`, {method: 'GET'})
  if (res.status === 200) {
    activities.value = await res.json()
    console.log('value '+activities.value)
  } else {
    console.log('cannot get data')
  }
}
</script>

<template>
  <div>
    <div>
      <Carousel />
    </div>
    <div class="ml-16 mb-8 overflow-x-scroll">
      <div
        class="w-52 text-neutral-500 text-xl font-medium leading-7 tracking-wide"
      >
        Recommend activity
      </div>
      <div
        class="text-indigo-600 text-3xl font-bold leading-10 tracking-wide"
      >
        แนะนำสำหรับคุณ
      </div>
    </div>
    <div class="ml-16 overflow-x-scroll flex flex-row">
      <Cards :activities="activities"/>
    </div>
  </div>
</template>

<style></style>
