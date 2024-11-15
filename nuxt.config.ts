// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  imports: {
    presets: [
      {
        from: 'tailwind-merge',
        imports: ['twMerge', 'twJoin']
      }
    ]
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@primevue/nuxt-module',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/icon',
  ],

  css: ['assets/styles/tailwind.css', 'assets/styles/base.css'],

  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  primevue: {
    usePrimeVue: true,
    options: {
      theme: 'none',
    },
    components: {
      prefix: 'Prime'
    },
    directives: {
      include: '*',
      // exclude: ['Ripple']
    }
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'local',
        dir: './app/assets/icons'
      },
    ]
  }
})