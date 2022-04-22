import request from "@/utils/request";

export function getUserInfo() {
    return request({
        url: `/api/getUserInfo`,
        method: 'get',
    })
}
export function logout() {
    return request({
        url: `/api/logout`,
        method: 'get',
    })
}