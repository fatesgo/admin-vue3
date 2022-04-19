import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Layout from "@/layout/index.vue";
/**
 * 固定路由
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login.vue'),
  },
  {
    path: '',
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        component: () => import('@/views/index.vue'),
        name: "index",
        meta: { title: "首页", icon: "index" },
      }
    ]
  },
  {
    path: "/system",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "user",
        component: () => import('@/views/system/user.vue'),
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