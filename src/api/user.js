import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/user/Login',
        method: 'post',
        data: data
    })
}
export function signup(data){
    return request({
        url: '/user/',
        method: 'post',
        data: data
    })
}
export function getUserInfo(id) {
    return request({
        url: '/user/'+id,
        method: 'get',
    })
}
export function getUserDetailInfo(id) {
    return request({
        url: '/user/GetUserDetailInfoById',
        method: 'get',
        params:{
            id,
        }
    })
}
export function modifyUserInfo(data)
{
    return request({
        url:'user/ModifyUserInfo',
        method:'post',
        data,
    })
}