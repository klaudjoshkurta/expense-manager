import '@/assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import application from './App.vue'

const app = createApp(application)

app.use(createPinia())

app.mount('#app')