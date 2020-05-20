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
    name: 'Layout',
    children: [{
      path: '',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
    },
    {
      path: '/user',
      name: 'User',
      component: () => import('@/views/userinfo/index.vue'),
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
    path: '/',
    component: () => import('@/layout/LoginAndSignup.vue'),
    name: 'Loginlayout',
    children: [{
      path: 'login',
      name: 'Login',
      component: () => import('@/views/login/components/login.vue'),
    },
    {
      path: 'signup',
      name: 'Signup',
      component: () => import('@/views/login/components/signup.vue'),
    },
    ]
  },
  {
    path: '/editor',
    name: 'Editor',
    component: () => import('@/views/markdowned/index.vue')
  },
  {
    path: '/editortest',
    name: 'EditorTest',
    component: () => import('@/views/markdowned/indextest.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import("@/views/test/index.vue"),
  }
]

const router = new VueRouter({
  routes
})

export function namedRoutes(name, pramas) {
  return {
    name: name,
    params: pramas
  }
}

export default router
