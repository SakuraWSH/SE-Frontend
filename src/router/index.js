import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/UserView.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('../views/user/ChatView.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/modules/ListView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/modules/DetailView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/modules/PostView.vue')
    },
  ]
})

export default router
