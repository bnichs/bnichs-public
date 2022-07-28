import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/resume',
      name: 'resume',
      component: () => import('../views/ResumeView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
  ],
  // scrollBehavior(to, from, savedPosition) {
  // @ts-ignore <- ignore it
  scrollBehavior: function(to, from, savedPosition){
    if (to.hash) {
      return {el: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
})

export default router
