<script setup>
const route = useRoute()

const { data } = await useAsyncData(`/movies/${route.params.id}` ,() => {
    return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`)
}, {
    pick: ["Plot", "Title"],
    // transform(data) {
    //     return {
    //       Plot: data.Plot,
    //       Title: data.Title
    //     }
    // }
})
</script>

<template>
  <div>
      <pre>{{ data }}</pre>
  </div>
</template>