<!-- @format -->

<script setup>
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
}</script>

<template>
  <div>
    <div class="">
      <NavBar />
    </div>
    <div
      class="font-primary flex flex-col justify-center items-center w-full h-auto bg-gradient-to-r from-slate-700 to-fuchsia-950"
    >
      <div
        class="m-4 text-center text-stone-300 text-base font-bold leading-normal tracking-wide"
      >
        ส. 30 พ.ย. | โรงเรียนวัดหนองจอกใหญ อ.บางแค จังหวัดสระบุรี
      </div>
      <div
        class="m-4 text-center text-white text-6xl font-bold leading-14 tracking-wide"
      >
        Youth Nique Camp :<br />พัฒนาตัวเองและช่วยผู้พิการ<br />ทางสายตาด้วยกัน
      </div>
      <div
        class="m-4 text-white text-base font-bold leading-normal tracking-wide"
      >
        ผู้จัดกิจกรรม : We Volunteer Spirit Thailand
      </div>
    </div>
    <RegisterForm />
  </div>
</template>

<style></style>
