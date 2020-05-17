import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

import user from './modules/user'
import test from './modules/test'
import editor from './modules/editor'

Vue.use(Vuex)

export default new Vuex.Store({
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
  },
  getters
})
