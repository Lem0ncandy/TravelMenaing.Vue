import request from '@/utils/request'
export function uploadContent(data){
    return request({
        url:'/test/MdEditorContent',
        method:'post',
        data:data
    })
}