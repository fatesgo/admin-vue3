import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
/**
 * 固定路由
 */
export const constantRoutes = [



  {
    path: '/',
    component: () => import('@/views/login.vue'),
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