// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Comforter+Brush&family=Devonshire&display=swap"
        }
      ]
    }
  },
  ssr: true, // Make sure SSR is enabled
  router: {
    options: {
      hashMode: false // Ensure you're not in hash mode
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@vueuse/motion/nuxt', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      // Example: add your font(s) here
      Inter: true,
      'Comforter Brush': [700, 700]
    },
    display: 'swap'
  },
  tailwindcss: {
    config: {
      darkMode: 'class', // 👈 this is key
      theme: {
        extend: {
          // Your custom theme settings (optional)
        }
      }
    }
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },
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