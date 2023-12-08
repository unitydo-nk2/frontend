<script setup>
const activity = ref([])

onBeforeMount(async () => {
  const route = useRoute()
  const id = route.params.id
  await getActivityByID(id)
})

const getActivityByID = async (id) => {
  const res = await fetch(`http://localhost:8080/api/activities/${id}`, {method: 'GET'})
  if (res.status === 200) {
    activity.value = await res.json()
    console.log('value '+activity.value)
  } else {
    console.log('cannot get data')
  }
}
</script>

<template>
  <div>
    <ActivityDetail :activity="activity"/>
  </div>
</template>

<style></style>
