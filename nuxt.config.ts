// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    vite: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData: '@import "assets/styles/variable.scss";',
          }
        }
      }
    },
    app: {
      head: {
        title: '网站标题',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
        meta: [
          {
            name: '网站',
            content: 'wewewewe'
          },
          { hid: 'keywords', name: 'keywords', content: '前端, keywords' }
        ]
      }
    }
})
