// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        ["@pinia/nuxt", {
            autoImports: [
                // automatically imports `usePinia()`
                "defineStore",
                // automatically imports `usePinia()` as `usePiniaStore()`
                "acceptHMRUpdate"
            ]
        }]
    ],

    imports: {
        // Auto-import pinia stores defined in `~/stores`
        dirs: ['stores'],
    },

    // alias: {
    //     pinia: '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs'
    // },
})
