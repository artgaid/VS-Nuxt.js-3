<script setup>
const route = useRoute()

const { data } = await useFetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`,
    {
      pick: ["Plot", "Title"],
      key: `/movies/${route.params.id}`
    }
)

// const { data } = await useAsyncData(`/movies/${route.params.id}` ,() => {
//     return $fetch(`http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`)
// }, {
//     pick: ["Plot", "Title"],
// })
</script>

<template>
  <div>
      <pre>{{ data }}</pre>
  </div>
</template>