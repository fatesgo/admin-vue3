import request from "@/utils/request";
export interface LoginPojo {
    url: String;
    password: String;
}
export function login(data: LoginPojo) {
    return request({
        url: `/api/login`,
        method: 'post',
        data: data
    })
}