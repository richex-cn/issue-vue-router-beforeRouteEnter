import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:id', component: () => import('./views/detail.vue') },
    { path: '/', component: () => import('./views/home.vue') }
  ]
})

export default router
