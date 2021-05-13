import { Module } from "vuex";
import { constantRoutes } from '@/router'
import layout from "@/layout/index.vue";
import permissionModuleType from "./interface";
import rootStateType from "@/store/interface";
const permissionModule: Module<permissionModuleType, rootStateType> = {
  state: {
    routes: new Array,
    addRoutes: new Array,
  },
  mutations: {
    SET_ROUTES: (state: any, routes: Array<any>) => {
      state.addRoutes = routes
      state.routes = constantRoutes.concat(routes);
    }
  },
  actions: {
    generateRoutes({ commit }, routes: Array<any>) {
      return new Promise(resolve => {
        commit('SET_ROUTES', filterRoute(routes))
        resolve(filterRoute(routes))
      })
    }
  }
};
export default permissionModule;
function getViews(path: string) {
  return () => import(`@/views/${path}.vue`);
}
function filterRoute(routes: Array<any>) {
  routes.forEach((item: any) => {
    if (item.component === '无父级') {
      item.component = layout;
      item.children.forEach((e: any) => {
        if (e.component) {
          e.component = getViews(e.component.replace(/(^\/\/*)|(\/\/*$)/g, ""))
        }
      })
    }
  })
  return routes
}
















