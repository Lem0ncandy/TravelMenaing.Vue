import request from '@/utils/request'

export function getOneGuide(id){
    return request({
        url: '/TravleGuide/'+id,
        method: 'get',
    })
}