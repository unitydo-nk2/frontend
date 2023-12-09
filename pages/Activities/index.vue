<!-- @format -->

<script setup>

const activities = ref([])
const mainCategories = ref([])

onBeforeMount(async () => {
  await getActivities()
  await getMainCategories()
})

const getActivities = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/activities/list`, {method: 'GET'})
  if (res.status === 200) {
    activities.value = await res.json()
    console.log('value '+activities.value)
  } else {
    console.log('cannot get data')
  }
}

const getMainCategories = async () => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/categories`, {method: 'GET'})
  if (res.status === 200) {
    mainCategories.value = await res.json()
    console.log('mainCategories value '+mainCategories.value)
  } else {
    console.log('cannot get data')
  }
}
</script>

<template>
  <div>
    <div
      class="flex flex-col justify-center items-center w-full h-auto bg-gradient-to-r from-slate-700 to-fuchsia-950"
    >
      <div
        class="m-4 text-center text-stone-300 text-3xl font-bold leading-normal tracking-wide"
      >
        เตรียมตัวพบกับ
      </div>
      <div
        class="m-4 text-center text-white text-6xl font-bold leading-14 tracking-wide"
      >
        COMING SOON
      </div>
      <div
        class="m-4 text-white text-3xl font-bold leading-normal tracking-wide"
      >
        กิจกรรมที่น่าสนใจเร็ว ๆ นี้
      </div>
    </div>
    <div class="flex flex-col justify-center items-center">
      <div
        class="m-4 w-52 text-center text-neutral-500 text-2xl font-medium leading-7 tracking-wide"
      >
        Recommend activity
      </div>
      <div
        class="text-center text-indigo-600 text-5xl font-bold leading-10 tracking-wide"
      >
        กิจกรรมสำหรับคุณ
      </div>
      <div>some thing</div>
    </div>
    <div>
      <div>
        <div element-name="filter"></div>
        <div element-name="activity-list">
          <div>
            <ActivityListWithFilter
              :activities="activities"
              :mainCategories="mainCategories"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
