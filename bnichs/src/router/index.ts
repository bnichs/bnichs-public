import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {PAGE_TITLE} from "@/config";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      path: '/blog/',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/blog/:ref',
      name: 'blog_post',
      component: () => import('../views/BlogPostView.vue'),
      props: true
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue'),
      // meta: {
      // template: 'bare',
      props: {
        bare: true
      }
      // }
    },
  ],
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0,
      el: "body"
    };
  }
  // @ts-ignore <- ignore it
  // scrollBehavior: function(to, from, savedPosition){
  //   if (to.hash) {
  //     return {el: to.hash}
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // },
})


function toProperCase(s: string) {
  return s.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

router.beforeEach((to, from, next) => {
  const name = toProperCase(String(to.name))
  document.title = `${PAGE_TITLE} - ${name}`
  next()
});

export default router
