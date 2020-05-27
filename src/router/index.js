import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
    },
    {
      path: '/user/:id',
      name: 'User',
      redirect: '/user/:id/guide',
      component: () => import('@/views/userinfo/index.vue'),
      children: [
        {
          path: 'guide',
          name: 'UserGuides',
          component: () => import('@/views/userinfo/components/guides.vue')
        },
        {
          path: 'comments',
          name: 'UserComments',
          component: () => import('@/views/userinfo/components/comments.vue')
        },
        {
          path: 'dynamic',
          name: 'UserDynamic',
          component: () => import('@/views/userinfo/components/dynamic.vue')
        },
        {
          path: 'fans',
          name: 'UserFans',
          component: () => import('@/views/userinfo/components/fans.vue')
        },
      ]
    },
    {
      path: 'editUserInfo',
      name: 'EditUserInfo',
      component: () => import('@/views/userinfo/components/edituserinfo.vue')
    },
    {
      path: '/guide/:id',
      name: 'Guide',
      component: () => import('@/views/guide/index.vue'),
    }]
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
    redirect: 'editor/images',
    component: () => import('@/views/editor/index.vue'),
    children: [{
      path: 'images',
      name: 'Images',
      component: () => import('@/views/editor/components/images')
    }]
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import("@/views/test/index.vue"),
  },
  {
    path: 'imgcache',
    name: 'imgcache',
    component: () => import("@/views/test/imagecache.vue")
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
