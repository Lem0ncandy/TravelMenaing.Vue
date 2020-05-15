import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // component:() => import('@/views/Home'),
    component: Layout,
    children: [{
      path: '',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
    }]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user',
    component: Layout,
    children: [{
      path: '',
      component: () => import('@/views/userinfo/index.vue'),
    }]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/test',
    component: () => import("@/views/test/index.vue"),
  }
]

const router = new VueRouter({
  routes
})

export default router
