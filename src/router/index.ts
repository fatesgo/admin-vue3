import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue";
/**
 * 固定路由
 */
export const constantRoutes = [
  {
    path: '/',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '/index',
    component: Layout
  },
  {
    path: "/system",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "user",
        component: () => import('@/views//system/user.vue'),
        name: "user",
        meta: { title: "用户管理" }
      }
    ]
  },
]

const routes: Array<RouteRecordRaw> = [
  ...constantRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router