import { testAxios } from '@/api/test.js';
const actions = {
    testAxios({ commit }, data) {
        return new Promise((resolve, reject) => {
            testAxios(data).then(response => {
                const { data } = response;
                resolve();
            }).catch(error => {
                reject(error)
            })
        })
    }
}
export default {
    namespaced:true,
    actions,
}