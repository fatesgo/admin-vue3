import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from './router'
import store from "./store";
import { getToken } from "@/utils/auth";
import { ElMessage } from 'element-plus'


const whiteList = ["/login"];
NProgress.configure({ showSpinner: false });
router.beforeEach((to: any, from: any, next: any) => {
    NProgress.start();
    if (getToken()) {
        if (to.path === "/login") {
            next({ path: "/" });
            NProgress.done();
        } else {
            if (store.getters.roles.length === 0) {
                store
                    .dispatch("getUserInfo")
                    .then(() => {
                        next({ ...to, replace: true }); // hack方法 确保addRoutes已完成
                    })
                    .catch(err => {
                        store.dispatch("LogOut").then(() => {
                            ElMessage.error(err);
                            next({ path: "/login" });
                        });
                    });
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
  

