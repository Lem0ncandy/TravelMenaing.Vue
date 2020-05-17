import { testConnect } from '@/api/test.js';
const actions = {
    testConnect({ commit }, data) {
        return new Promise((resolve, reject) => {
            testConnect(data).then(response => {
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