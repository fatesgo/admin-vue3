import Cookies from 'js-cookie'
import { Module } from "vuex";
import appModuleType from "./interface";
import rootStateType from "@/store/interface";
const appModule: Module<appModuleType, rootStateType> = {
  state: {
    sidebar: {
      opened: Cookies.get('sidebarStatus') ? !!Cookies.get('sidebarStatus') : false,
      withoutAnimation: false
    },
    device: 'desktop',
    size: Cookies.get('size') || 'medium',
  },
  mutations: {
    TOGGLE_SIDEBAR: (state: any) => {
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', "1")
      } else {
        Cookies.set('sidebarStatus', "0")
      }
    },
    CLOSE_SIDEBAR: (state: any, withoutAnimation: boolean) => {
      Cookies.set('sidebarStatus', "0")
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state: any, device: string) => {
      state.device = device
    },
    //打开
    OPEN_SIDEBAR: (state: any) => {
      state.sidebar.opened = true
      state.sidebar.withoutAnimation = false
      Cookies.set('sidebarStatus', "1")
    },
  
  },
  actions: {
    toggleSideBar({commit}) {
      commit('TOGGLE_SIDEBAR')
    },
  
    closeSideBar({commit}, withoutAnimation: boolean) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({commit},device: string) {
      commit('TOGGLE_DEVICE', device)
    },
    setSize({commit}, size: number) {
      commit('SET_SIZE', size)
    },
    openSideBar({commit}) {
      commit('OPEN_SIDEBAR')
    },
  }
};
export default appModule;