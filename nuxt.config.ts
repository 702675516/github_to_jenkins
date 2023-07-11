
export default defineNuxtConfig({
    css: [
        '@/assets/common.scss',
        '@/assets/main.scss',
        'normalize.css'
    ],
    app: {
      head: {
        title: '',
        meta: [
          {
            name: '',
            content: 'width=device-width, initial-scale=1, maximum-scale=1',
          },
          {
            name: 'renderer',
            content: 'webkit',
          },
        ],
        script: [],
      },
    },
})

