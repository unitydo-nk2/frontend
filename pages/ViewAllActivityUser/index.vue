<!-- @format -->

<script setup>

const activities = ref([])

onBeforeMount(async () => {
  await getActivities()
})

const getActivities = async () => {
  const res = await fetch(`http://localhost:8080/api/activities/userRegistration`, {method: 'GET'})
  if (res.status === 200) {
    activities.value = await res.json()
    console.log('value '+activities.value)
  } else {
    console.log('cannot get data')
  }
}


</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <ViewActivityUser :activities="activities"/>
  </div>
</template>

<style></style>
