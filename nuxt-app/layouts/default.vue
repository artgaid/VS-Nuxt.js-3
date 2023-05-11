<script setup lang="ts">
const userStore = useUserStore()
</script>

<template>
    <nav style="display: flex; gap: 10px">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/movies">Movies</NuxtLink>
        <NuxtLink v-if="!userStore.isLoggedIn" to="/login">Login</NuxtLink>
        <a href="#" v-else @click.prevent="userStore.isLoggedIn = false">Logout</a>
    </nav>
  <slot></slot>
</template>

<style scoped>

</style>