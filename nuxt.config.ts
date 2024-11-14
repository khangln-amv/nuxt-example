// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module'
  ],

  css: ['assets/styles/tailwind.css', 'assets/styles/base.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // tailwindcss: {
  //   config: {
  //     theme: {
  //       extend: {
  //         // colors: { primary: colors.green }
  //       }
  //     },
  //     plugins: [require('tailwindcss-primeui')]
  //   }
  // },

  primevue: {
    options: {
      theme: 'none'
    }
  },
})