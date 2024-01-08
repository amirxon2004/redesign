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
  modules: [
    '@nuxtjs/tailwindcss',
  '@nuxt/image',
  '@vee-validate/nuxt',
  ],
  devtools: { enabled: true },
  
  
})
