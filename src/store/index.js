import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: null,
    token: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    signup({ commit }, userData) {
      // Simulate API call to create user account
      const newUser = { id: 1, ...userData };
      commit('setUser', newUser);
      
      // Simulate API call to get authentication token
      const authToken = 'abc123';
      commit('setToken', authToken);
    },
  },
});

export default store;
