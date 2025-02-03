import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import unfonts from 'unplugin-fonts/vite'

// import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    plugins: [
        vue(),
        unfonts({
            google: {
                families: [
                    { name: 'Inter', styles: 'ital,opsz,wght@0,14..32,100..900;1,14..32,100..900' }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
