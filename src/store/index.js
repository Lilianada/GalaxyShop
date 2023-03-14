import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
    password: "",
    displayName: "",
  },
  getters: {},
  mutations: {
    signin(state, { email, password, displayName }) {
      state.email = email;
      state.password = password;
      state.displayName = displayName;
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("displayName", displayName);
      alert("Succesfully logged in!");
    },
    logout(state) {
      state.email = "";
      state.password = "";
      state.displayName = "";
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("displayName");
      alert("You are logged out!");
    },
    initializeStore(state) {
      if (localStorage.getItem("email") && localStorage.getItem("password") && localStorage.getItem("displayName")) {
        state.email = localStorage.getItem("email");
        state.password = localStorage.getItem("password");
        state.displayName = localStorage.getItem("displayName");
      }
    }
  },
  actions: {},
  modules: {},
});

