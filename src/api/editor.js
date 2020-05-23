import request from '@/utils/request'
export function uploadContent(data){
    return request({
        url:'/TravleGuide',
        method:'post',
        data:data
    })
}