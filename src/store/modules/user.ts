import { getToken, setToken, removeToken } from "@/utils/auth"
import { login } from "@/api/login";
import { getUserInfo, logout } from "@/api/user";
const user = {
    state: {
        token: getToken(),
        roles: [],
        permissions: [],
        user: {},
    },
    actions: {
        // 登录
        Login({ commit }: any, userInfo: any) {
            return new Promise((resolve, reject) => {
                login(userInfo).then((res: any) => {
                    setToken(res.data.token)
                    commit('SetToken', res.data.token)
                    resolve(res.data)
                }).catch((error: any) => {
                    reject(error)
                })
            })
        },
        // 获取用户信息
        getUserInfo({ commit }: any) {
            return new Promise((resolve, reject) => {
                getUserInfo().then((res: any) => {
                    const { user, roles, permissions } = res.user
                    commit('SetUserInfo', user)
                    commit('SetRoles', roles)
                    commit('SetPermissions', permissions)
                    resolve(res)
                }).catch((error: any) => {
                    reject(error)
                })
            })
        },

        // 退出系统
        LogOut({ commit }: any) {
            return new Promise<void>((resolve, reject) => {
                logout().then(() => {
                    commit('SetToken', '')
                    commit('SetUserInfo', {})
                    commit('SetRoles', [])
                    commit('SetPermissions', [])
                    removeToken()
                    resolve()
                }).catch((error: any) => {
                    reject(error)
                })
            })
        },
    },
    mutations: {
        SetToken(state: any, token: String) {
            state.token = token
        },
        SetUserInfo(state: { user: any; }, user: any) {
            state.user = user;
        },
        SetRoles(state: { roles: Array<any>; }, roles: Array<any>) {
            state.roles = roles;
        },
        SetPermissions(state: { permissions: Array<any>; }, permissions: Array<any>) {
            state.permissions = permissions;
        }
    }
}

export default user