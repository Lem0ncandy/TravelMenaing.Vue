import Cookies from "js-cookie";
const TokenKey = 'travel_meaning_token';
const IdKey = 'travelmeaning_admin_UserId'
export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
export function getId() {
    return Cookies.get(IdKey);
}

export function setId(id) {
    return Cookies.set(IdKey, id)
}

export function removeId() {
    return Cookies.remove(Id)
}