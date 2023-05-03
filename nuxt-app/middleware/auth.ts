export default defineNuxtRouteMiddleware(() => {
    const userIsLoggedIn = false

    if (!userIsLoggedIn){
        // return abortNavigation("Error abortNavigation to /admin!")
        return navigateTo({name: "login", path: "/login"})
    }
})