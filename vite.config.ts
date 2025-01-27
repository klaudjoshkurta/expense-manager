import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import unfonts from 'unplugin-fonts/vite'

export default defineConfig({
	plugins: [
		vue(),
		tailwindcss(),
		unfonts({
			google: {
				families: [
					{ name: 'Inter',  styles: 'ital,opsz,wght@0,14..32,100..900;1,14..32,100..900' },
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
