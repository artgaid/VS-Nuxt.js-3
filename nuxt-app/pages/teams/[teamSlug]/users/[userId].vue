<script setup lang="ts">
  import { useRoute } from "vue-router";

  const route = useRoute()
  const message = computed(() => `I am on team ${route.params.teamSlug } and my user id is ${ route.params.userId }`)
</script>

<template>
  <p>
    {{ message }}
  </p>
</template>
