import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authenticated: false,
    user: null
  },
  mutations: {
    setAuthenticated (state, isAuthenticated) {
      state.authenticated = isAuthenticated
    },
    setUser (state, user) {
      state.user = user
    }
  },
  actions: {
    login ({ commit }, user) {
      // Perform authentication logic here
      commit('setAuthenticated', true)
      commit('setUser', user)
    },
    logout ({ commit }) {
      // Perform logout logic here
      commit('setAuthenticated', false)
      commit('setUser', null)
    }
  }
})

export default store
