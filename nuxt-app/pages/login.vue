<script setup lang="ts">
const userStore = useUserStore()

definePageMeta({
    layout: "plain"
})
</script>

<template>
    <form @submit.prevent="userStore.login">
        <h1>Login</h1>
        <label>
            Username
            <input type="text" />
        </label>
        <label>
            Password
            <input type="password" />
        </label>
        <button>Login</button>
    </form>
</template>

<style scoped>

</style>