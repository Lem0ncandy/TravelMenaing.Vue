import request from '@/utils/request.js'

export function testConnect(data) {
    return request({
        url: '/test/TestConnect',
        method: 'post',
        data: data
    })
}