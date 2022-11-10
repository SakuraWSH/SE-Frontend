import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        isLogin: false
      },
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        isLogin: true
      },
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/user',
      name: 'user',
      meta: {
        isLogin: true
      },
      component: () => import('../views/user/UserView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        isLogin: true
      },
      component: () => import('../views/user/ChatView.vue')
    },
    {
      path: '/list',
      name: 'list',
      meta: {
        isLogin: true
      },
      component: () => import('../views/modules/ListView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      meta: {
        isLogin: true
      },
      component: () => import('../views/modules/DetailView.vue')
    },
    {
      path: '/post',
      name: 'post',
      meta: {
        isLogin: true
      },
      component: () => import('../views/modules/PostView.vue')
    },
  ]
})

export default router
