<script setup>
const route = useRoute()

// {"Response":"False","Error":"Incorrect IMDb ID."}

// const status500Url = computed(() => 'https://httpbin.org/status/500')

const movieUrl = computed(() => `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`)

const { data } = await useFetch(movieUrl.value,
    {
        pick: ["Plot", "Title", "Poster" ,"Error"],
        key: `/movies/${route.params.id}`,
        // onResponseError() {
        //     showError({statusCode: 500, statusMessage:'Oh noes!'})
        // }
    }
)

if (data.value.Error === "Incorrect IMDb ID.") {
    showError({statusCode: 404, statusMessage:'Page Not Found'})
}

useHead({
    title: data.value.Title,
    meta: [
        { name: "description", content: data.value.Plot },
        { property: "og:description", content: data.value.Plot },
        { property: "og:image", content: data.value.Poster },
        { name: "twitter:card", content: `summary_large_image` },
    ],
})

</script>

<template>
  <div>
      <pre>{{ data }}</pre>
  </div>
</template>