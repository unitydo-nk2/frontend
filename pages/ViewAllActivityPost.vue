<!-- @format -->

<script setup>

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

// DELETE
const deleteActivity = async (deleteActivityId) => {
  if (deleteActivityId > 0) {
    const res = await fetch(
      ``,
      {
        method: 'DELETE',
        headers: {

        }
      }
    )
    if (res.status === 200) {

    } else if (res.status === 401) {
      const resf = await fetch(
        ``,
        {
          headers: {

          }
        }
      )

    }
  } else {
    alert('no event to delete')

  }
}


//PATCH
const updateActivity = async (updateActivity) => {
  let updateEventJson = JSON.stringify({

  })

  {
    const res = await fetch(
      ``,
      {
        // const res = await fetch(
        // ``,
        // {
        method: 'PATCH',
        headers: {

        },

      }
    )
    if (res.status === 200) {


    } else if (res.status === 401) {
      const resf = await fetch(
        ``,
        {
          headers: {

          }
        }
      )
      if (resf.status === 200) {

      }
    } else {
      alert('error cannot add')
    }
  }
}
</script>

<template>
  <div>
    <SideBar />
    <ViewActivityPostList />
  </div>
</template>

<style></style>
