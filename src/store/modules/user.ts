import { getToken, setToken } from '@/utils/auth'
import { login } from "@/api/login";
const user = {
    state: {
        token: getToken(),
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
    },
    mutations: {
        SetToken(state: any, token: String) {
            state.token = token
        }
    }
}

export default user