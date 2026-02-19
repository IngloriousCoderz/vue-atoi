import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')

// import './00-default-app/main'
