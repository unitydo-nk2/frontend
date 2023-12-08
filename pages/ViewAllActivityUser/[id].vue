<script setup>
const users = ref([])

onBeforeMount(async () => {
  const route = useRoute()
  const activityId = route.params.id
  await getActivityByID(activityId)
})

const getActivityByID = async (activityId) => {
  const res = await fetch(`http://localhost:8080/api/activities/${activityId}/registrants`, {method: 'GET'})
  if (res.status === 200) {
    users.value = await res.json()
    console.log('value '+users.value)
  } else {
    console.log('cannot get data')
  }
}
</script>
 
<template>
      <div class="flex flex-row">
    <SideBareDemo />
<ViewSpecificActivityRegistrant :users="users"/>
</div>
</template>
 
<style>

</style>