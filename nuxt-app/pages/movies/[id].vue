<script setup>
const route = useRoute()

// {"Response":"False","Error":"Incorrect IMDb ID."}

// const status500Url = computed(() => 'https://httpbin.org/status/500')

const movieUrl = computed(() => `http://www.omdbapi.com/?apikey=8e3f600b&i=${route.params.id}`)

const { data } = await useFetch(movieUrl.value,
    {
        pick: ["Plot", "Title", "Error"],
        key: `/movies/${route.params.id}`,
        // onResponseError() {
        //     showError({statusCode: 500, statusMessage:'Oh noes!'})
        // }
    }
)

if (data.value.Error === "Incorrect IMDb ID.") {
    showError({statusCode: 404, statusMessage:'Page Not Found'})
}

</script>

<template>
  <div>
      <pre>{{ data }}</pre>
  </div>
</template>