import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './00-default-app/App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
