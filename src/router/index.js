import { createRouter, createWebHistory } from 'vue-router'

import ViewSingin from '@/views/ViewSingin.vue'
import ViewSingup from '@/views/ViewSingup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Singin',
      component: ViewSingin,
      meta: { title: 'Singin' }
    },
    {
      path: '/singup',
      name: 'Singup',
      component: ViewSingup,
      meta: { title: 'Singup' }
    },
  ]
})

export default router
