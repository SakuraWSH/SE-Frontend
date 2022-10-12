import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import user from './stores/user'

import './assets/main.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(user)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
