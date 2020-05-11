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
    name: 'Home',
    children:[{
      path:'',
      name:'index',
      component: () => import(''),
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
    path:'/user',
    component:Layout,
    name:'UserInfo',
  }
]

const router = new VueRouter({
  routes
})

export default router
