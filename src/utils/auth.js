import Cookies from "js-cookie";
const TokenKey = 'travel_meaning_token';
const Id = 'UserId';
export function getToken(){
    return Cookies.get(TokenKey);
}

export function setToken(token){
    return Cookies.set(TokenKey,token)
}

export function removeToken(){
    return Cookies.remove(TokenKey)
}
export function getId(){
    return Cookies.get(Id);
}

export function setId(id){
    return Cookies.set(Id,id)
}

export function removeId(){
    return Cookies.remove(Id)
}