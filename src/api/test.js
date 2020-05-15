import request from '@/utils/request.js'

export function testAxios(data) {
    return request({
        url: '/test/ReturnOk',
        method: 'get',
        data: data
    })
}