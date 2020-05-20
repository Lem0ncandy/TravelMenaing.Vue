import { login, signup, logout } from '@/api/user.js'
import { getToken, setToken, removeToken } from '@/utils/auth'
const getDefaultState = () => {
    return {
        name: '',
        avatar: '',
        token: getToken(),
        // isLogin:state.token != null && state.token != '',
    }
}

const state = getDefaultState()

const getters = {
    // token: state => state.user.token,
    avatar: state => state.user.avatar,
    isLogin: state => {
        var result = state.token != null && state.token != '';
        return result;
    }
}

const mutations = {
    RESET_STATE: (state) => {
        Object.assign(state, getDefaultState())
    },
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    }
}

const actions = {
    login({ commit }, data) {
        const { username, password } = data;
        return new Promise((resolve, reject) => {
            login({ username: username.trim(), password: password }).then(response => {
                const { data } = response;
                setToken(data.token);
                commit('SET_TOKEN', data.token);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
    signup({ commit }, data) {
        return new Promise((resolve, reject) => {
            signup(data).then(response => {
                const { data } = response;
                console.log(data);
                resolve();
            }).catch(error => {
                reject(error);
            })
        })
    },
    logout({ commit, state }) {
        return new Promise((resolve, reject) => {
            setToken(null);
            removeToken();
            // resetRouter();
            commit('RESET_STATE');
            resolve();
        }).catch(error => {
            reject(error);
        })
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
            removeToken();
            commit('RESET_STATE');
            resolve();
        })
    },
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}