import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import user from './modules/user'
import test from './modules/test'
import editor from './modules/editor'
import viewer from './modules/viewer'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    test,
    editor,
    viewer,
  },
  getters
})
export default store
