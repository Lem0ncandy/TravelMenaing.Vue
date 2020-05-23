import { uploadContent } from '@/api/editor.js'

const state = {
    content: '',
}
const mutations = {
}
const getters = {
    content: state => state.content
}
const actions = {
    uploadGuide({ commit }, data) {
        return new Promise((resolve, reject) => {
            uploadContent(data).then(response => {
                const { data } = response;
                console.log(data);
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
    mutations,
    state,
    getters,
}