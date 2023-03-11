import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwGjROLRHa55d2K8980Hl7-Y1rgWh43LI",
  authDomain: "designsbylilian.firebaseapp.com",
  projectId: "designsbylilian",
  storageBucket: "designsbylilian.appspot.com",
  messagingSenderId: "734436328985",
  appId: "1:734436328985:web:bd61b7307f366dfb254c88"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
