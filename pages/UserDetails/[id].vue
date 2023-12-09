<!-- @format -->

<script setup>
const user = ref({})

onBeforeMount(async () => {
  const route = useRoute()
  const id = route.params.id
  await getUserByID(id)
})

const getUserByID = async (id) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${id}`, {method: 'GET'})
  if (res.status === 200) {
    user.value = await res.json()
    console.log('value '+user.value)
  } else {
    console.log('cannot get data')
  }
}
</script>

<template>
  <div class="flex flex-row">
    <SideBareDemo />
    <ManageUserDetail :user="user" />
  </div>
</template>

<style></style>
