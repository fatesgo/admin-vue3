import { createStore, Store, useStore as baseUseStore } from "vuex";
import appModule from "./modules/app";
import permissionModule from "./modules/permission";
import tagsViewModule from "./modules/tagsView";
import userModule from "./modules/user";
import RootStateTypes, { AllStateType } from "./interface";
import { InjectionKey } from "vue";
export default createStore<RootStateTypes>({
  getters:{
    sidebar: (state:any)=>state.appModule.sidebar,
    size:  (state:any) => state.appModule.size,
    device:  (state:any) => state.appModule.device,
    visitedViews:  (state:any) => state.tagsViewModule.visitedViews,
    cachedViews:  (state:any) => state.tagsViewModule.cachedViews,
    token:  (state:any) => state.userModule.token,
    userInfo:  (state:any) => state.userModule.userInfo,
    routes:  (state:any) => state.permissionModule.routes,
  },
  mutations: {},
  actions: {},
  modules: {
    appModule, permissionModule, tagsViewModule, userModule
  },
});
export const key: InjectionKey<Store<RootStateTypes>> = Symbol("vue-store");
export function useStore<T = AllStateType>() {
  return baseUseStore<T>(key);
}