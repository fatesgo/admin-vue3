import { Module } from "vuex";
import userModuleType from "./interface";
import rootStateType from "@/store/interface";
import {
  getToken,
  removeToken,
} from '@/utils/auth'
import service from '@/utils/request'
const userModule: Module<userModuleType, rootStateType> = {
  state: {
    token: "",
    userInfo: {}

  },
  mutations: {
    SET_TOKEN: (state: any, token: string) => {
      state.token = token
    },
    SET_USER_INFO: (state: any, userInfo: any) => {
      state.userInfo = userInfo
    },
  },
  actions: {
    getInfo({commit}) {
      return new Promise((resolve, reject) => {
        try {
          service.get('api/getUserInfoByToken').then(res => {
            commit('SET_USER_INFO', res.data.user)
            resolve(res.data.menuList)
          }).catch(error => {
            reject(error)
          })
        } catch (error) {
        }

      })
    },

    logout(
      commit: any
    ) {
      return new Promise<void>((resolve) => {
        commit('SET_TOKEN', null)
        commit('SET_USER_INFO', null)
        removeToken()
        resolve()
      })
    },
  }
};
export default userModule;




















