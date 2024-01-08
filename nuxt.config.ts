// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      
    }
  },
  image: {
    inject: true,
    format: ['webp']
  },
  css:['~/assets/css/main.css'],
  svgo: {
    autoImportPath: './assets/svg',
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-svgo',
    '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  
  
})
