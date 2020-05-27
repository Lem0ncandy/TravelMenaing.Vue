import request from '@/utils/request'

export function getOneGuide(id) {
    return request({
        url: '/TravleGuide/' + id,
        method: 'get',
    })
}
export function getAllGuide() {
    return request({
        url: '/TravleGuide/',
        method: 'get',
    })
}
export function getAllGuideByUserId(id) {
    return request({
        url: '/TravleGuide/GetGuideByUserId',
        method: 'get',
        params: {
            id,
        }
    })
}
export function getGuideComment(id, page, size) {
    return request({
        url: '/Comment/GetGuideComments/' + id,
        method: 'get',
        params: {
            page,
            size
        }
    })
}
export function ReplyGuide(guideId, content) {
    return request({
        url: '/Comment/ReplyGuide',
        method: 'post',
        data: {
            guideId,
            content
        }
    })
}