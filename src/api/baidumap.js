import request from '@/utils/request'

export function getsomething(){
    return request({
        url:"http://api.map.baidu.com/directionlite/v1/driving?origin=40.01116,116.339303&destination=39.936404,116.452562&ak=2IEbVc6uPkna2XcGPlXE2QdAUHcrMzZC",
        method:"get",
    })
}