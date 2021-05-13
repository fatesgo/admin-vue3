import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue';
/**
 * 固定路由
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    hidden:true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden:true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden:true
  },
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/index',
    component: Layout,
    redirect: '/index',
    name: '首页',
    meta: {
      title: '首页',
    },
    children: [{
      path: '/index',
      component: () => import('@/views/index.vue'), 
      meta: {
        title: '首页',
      },
    },
  ]},

]

const routes: Array<RouteRecordRaw> = [
...constantRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

