import { createRouter, createWebHistory } from 'vue-router'

import DetailPaginaView from "../views/DetailPaginaView.vue";
//import LoginView from "../views/LoginView.vue";
//import OverzichtsPaginaView from "../views/OverzichtsPaginaView.vue";
//import App from "../App";

//import HomeView from '../components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/Detail',
      name: 'detail',
      component: DetailPaginaView.vue
      //route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../components/AboutView.vue')
    },
    {
      path: '/Login',
      name: 'login',
      component: LoginView.vue
      //route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../components/AboutView.vue')
    },
    {
      path: '/Overzicht',
      name: 'overzicht',
      component: OverzichtsPaginaView.vue
      //route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../components/AboutView.vue')
    },
    {
      path: '/:notFound(.*)',
      name: 'notFound',
      component: NotFound
      //route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../components/AboutView.vue')
    }
  ]
})

export default router
