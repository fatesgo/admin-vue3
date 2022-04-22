import Layout from "@/layout/index.vue";
const modules = import.meta.glob("../../views/**/**.vue");//无法使用@/views也无法直接import.meta.glob("../../views/${component}.vue") 
const routes = {
    state: {
        defaultRoutes: [],//前端默认路由
        userRoutes: [],//用户路由
        allRoutes: [],//默认路由加用户路由

    },
    actions: {
        //构建路由
        buildRoutes({ commit }: any, menuList: Array<any>) {
            return new Promise((resolve, reject) => {
                try {
                    const Routes = filterRouter(menuList);
                    commit("SetUserRoutes", menuList)
                    resolve(Routes)
                } catch (error) {
                    reject(error)
                }
            })
        },
    },
    mutations: {
        SetUserRoutes(state: { userRoutes: Array<any>; }, routes: Array<any>) {
            state.userRoutes = routes;
        }
    }
}

function filterRouter(routes: Array<any>) {
    return routes.filter(route => {
        if (route.component && route.component != 0) {
            route.component = modules[`../../views${route.component}.vue`]
        } else {
            route.component = Layout
        }
        if (Array.isArray(route.children) && route.children.length > 0) {
            route.children = filterRouter(route.children);
        }
        return true
    })
}
export default routes