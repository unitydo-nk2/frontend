// nuxt.config.{js,ts}
export default defineNuxtConfig({
    
    modules: [
        '@nuxtjs/tailwindcss'
    ],
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
