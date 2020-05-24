import { uploadContent } from '@/api/editor.js'

const actions = {
    uploadGuide({ commit }, data) {
        return new Promise((resolve, reject) => {
            uploadContent(data).then(response => {
                const { data } = response;
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
}
export default {
    namespaced: true,
    actions,
}