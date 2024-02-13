// nuxt.config.{js,ts}
export default defineNuxtConfig({

    modules: [
        '@nuxtjs/tailwindcss',
        "nuxt-vue3-google-signin"
    ],
    // Google sign in
    googleSignIn: {
        clientId: "13010651370-m27hl09kfndvo81ldnmj5mmk68ai0vcs.apps.googleusercontent.com",
    },

    app: {
        head: {
            title: 'unity Do - Uniting for a Better YOU',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/unityDoicologo.ico' },
            ],
            script: [{ src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' }]
        },
        baseURL: '/nk2/',
    },
})
