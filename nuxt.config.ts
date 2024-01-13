// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false }, 
  ssr:true,
  app:{
    head:{
      title:"Smart-market.uz | Pro",
      viewport: 'width=device-width, initial-scale=1',
      link: [{rel: 'icon', type: 'image/x-icon', href: '/logo.png'}],
    }
  },
  nitro: {
    devProxy: {
      '/api/': {
        target: 'https://api.cabinet.smart-market.uz/',
        changeOrigin: true
      }
    },
    
  },
  css:[
    '@/assets/css/main.css',
    '@/assets/scss/global.scss',
    '@/assets/scss/f-ui.scss',
    '@/assets/css/profile.scss',
  ],
  modules:[   
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    'nuxt-swiper',
    '@element-plus/nuxt'
   
  ],  
  vite: {
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@use "@/assets/scss/main.scss" as *;'
              }
          }
      }, 
      server:{
        proxy:{
          '/api/': {
            target: 'https://api.cabinet.smart-market.uz/', 
            changeOrigin:true
          }
        }
      }, 
  },
  devServer: {
    port: 8081,
  },
 
  elementPlus: {  
    icon: 'ElIcon',
    importStyle: 'scss'
  },
  plugins:[ 
    
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  svgo: { 
    svgo: false,
    autoImportPath: './assets/icons/', 
    componentPrefix: 'icon'
  },
  i18n: {
    locales: [
      { code:'la', file:'la.json'},
      { code:'en', file:'en.json'}
    ],
    defaultLocale: 'la',  
    langDir: 'locales',
  }
})
