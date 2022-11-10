import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import user from './stores/user'

import './assets/main.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { assert } from '@vue/compiler-core'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(user)

router.beforeEach((to, from, next) => {

    let getFlag = localStorage.getItem("Flag");

    if (getFlag === "isLogin") {
        next()

        if (!to.meta.isLogin) {
            // iView.Message.error('您已登录')
            // assert("您已登录！");
            next({
                path: '/home'
            })
        }
    } else {

        if (to.meta.isLogin) {
            next({
                path: '/',
            })
            // assert("您尚未登录！");
        } else {
            next()
        }
    }
});

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
