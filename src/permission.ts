import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from './router'
import store from "./store";
import { getToken } from "@/utils/auth";
import { ElMessage } from 'element-plus'
import { RouteRecordRaw } from "vue-router";


const whiteList = ["/login"];
NProgress.configure({ showSpinner: false });
router.beforeEach(async (to: any, from: any, next: any) => {
    NProgress.start();
    if (getToken()) {
        if (to.path === "/login") {
            next({ path: "/" });
            NProgress.done();
        } else {
            if (store.getters.roles.length === 0) {
                try {
                    const menuList = await store.dispatch("getUserInfo");
                    const routes = await store.dispatch("buildRoutes", menuList);
                    routes.forEach((route: RouteRecordRaw) => {
                        router.addRoute(route)
                    });
                    next({ ...to, replace: true }); // hack方法 确保addRoutes已完成

                } catch (error) {
                    store.dispatch("LogOut").then(() => {
                        ElMessage.error(err);
                        next({ path: "/login" });
                    });
                }

            } else {
                next();
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next();
        } else {
            next("/login"); // 否则全部重定向到登录页
            NProgress.done();
        }
    }
});

router.afterEach(() => {
    NProgress.done();
});


