import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
    password: "",
  },
  getters: {},
  mutations: {
    login(state, email, password, ) {
      state.email = email;
      state.password = password;
      localStorage.setItem(("email", email),( password, "password"));
      alert("You are logged in!");
    },
    logout(state) {
      state.email = "";
      state.password = "";
      localStorage.removeItem("email", "password");
      alert("You are logged out!");
    },
    initializeStore(state) {
      if (localStorage.getItem("email", "password")) {
        state.email = localStorage.getItem("email");
        state.password = localStorage.getItem("password");
      }
    }
  },
  actions: {},
  modules: {},
});
