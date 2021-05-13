import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  let title = '后台权限管理系统'
  if(to.meta.title){
    title = to.meta.title +' - '+"后台权限管理系统"
  }
  // 页面标题
  document.title = title;
  // start progress bar
  NProgress.start()
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done() 
    }else if(to.path === '/'){
      next({ path: '/index' })
      NProgress.done() 
    } else {
      if (store.getters.routes.length === 0) {
        try {
          const muen = await store.dispatch('getInfo')
          store.dispatch('generateRoutes',muen)
          console.log(muen);
          router.addRoute(muen) // 动态添加可访问路由表
          next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
        } catch (error) {
          console.log(error);
          await store.dispatch("logout");
          next(`/login`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      //无权限跳转登陆
      next(`/login`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
