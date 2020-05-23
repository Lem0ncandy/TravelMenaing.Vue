import request from '@/utils/request'
export function uploadContent(data){
    return request({
        url:'/TravleGuide/post',
        method:'post',
        data:data
    })
}