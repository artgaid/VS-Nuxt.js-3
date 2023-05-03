export default defineNuxtRouteMiddleware((to, from) => {
    console.log(to, from, 'logger middleware')
})
