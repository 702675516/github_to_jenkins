import {defineNuxtConfig} from "nuxt/config";

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
                {
                    name: 'description',
                    content: '星魅生物、美丽、科学、健康、技术团队、全新减脂解决方案、溶脂针、去除多余脂肪、靶向药物、再塑身材'
                },
                {
                    name: 'keywords',
                    content: '星魅生物、美丽、科学、健康、技术团队、减脂、溶脂针、去除脂肪、再塑身材、减肥'
                }
            ],
            script: [],
        },
    },
})



