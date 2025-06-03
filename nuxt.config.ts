// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  ssr: true, // Make sure SSR is enabled
  router: {
    options: {
      hashMode: false // Ensure you're not in hash mode
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt', '@nuxt/image', '@nuxtjs/tailwindcss'],
  nitro: {
    publicAssets: [
      {
        baseURL: '/fonts',
        dir: 'public/fonts',
        maxAge: 60 * 60 * 24 * 365 // 1 year
      }
    ]
  }
})