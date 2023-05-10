import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import About from './views/about.vue'
import Kegiatan from './views/kegiatan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/kegiatan',
      name: 'kegiatan',
      component: Kegiatan
    },
  ]
})

export default router