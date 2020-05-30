import request from"@/utils/request"

export function changeRelationshipState(data)
{
    return request({
        url:"/relationship",
        method:'patch',
        data,
    })

}