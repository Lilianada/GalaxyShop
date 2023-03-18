<template>
  <main class="signinWrap">
    <div v-if="loading" class="loader"></div>
    <div class="signinForm" v-if="!loading">
      <form @submit.prevent="handleSubmit">
        <h2>Sign in</h2>
        <p class="welcomeText">Welcome back to Galaxy Shop!</p>
        <div class="formGroup">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="formField"
            required
          />
        </div>
        <div class="formGroup">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="formField"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            required
          />
          <div class="errorMessage" v-if="passwordErrorMsg">
            {{ passwordErrorMsg }}
          </div>
        </div>
        <div class="formGroup">
          <button type="submit" :disabled="isSigninDisabled" @click.prevent="handleSignin">Sign in</button>
        </div>
        <div class="formLinks">
          <div class="formLinks">
            <router-link to="/signup">New user? Signup</router-link> |
            <router-link to="/not-found">Forgot password</router-link>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";
import { watchEffect } from "@vue/runtime-core";
import { computed } from "vue";

const email = ref("");
const password = ref("");
const router = useRouter();
const loading = ref(false);
const passwordErrorMsg = ref("");
const auth = getAuth();

const handleSignin = () => {
  loading.value = true;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      alert("Successfully signed in!");
      const user = data.user;
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/home");
      console.log(data);
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          alert("Invalid email address.");
          break;
        case "auth/user-not-found":
          alert("User not found.");
          break;
        case "auth/wrong-password":
          alert("Incorrect password.");
          break;
        default:
          alert(error.message);
          break;
      }
    })
    .finally(() => {
      loading.value = false;
    });
};


const validatePassword = () => {
  if (password.value === "") {
    passwordErrorMsg.value = "Password is required";
  } else if (password.value.length < 8) {
    passwordErrorMsg.value = "Password must be at least 8 characters long";
  } else if (
    !password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  ) {
    passwordErrorMsg.value =
      "Password must contain at least one lowercase letter, one uppercase letter, and one number";
  } else {
    passwordErrorMsg.value = "";
  }
};

watchEffect(() => {
  validatePassword();
});

const isSigninDisabled = computed(() => {
  return passwordErrorMsg.value !== "";
  
});

</script>

<style scoped>
.signinWrap {
  background: url(../assets/Images/404Bg.png) #0e0e0e no-repeat center center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.signinForm {
  max-width: 22rem;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  text-align: center;
}

h2 {
  font-size: 24px;
}
.welcomeText {
  margin-bottom: 24px;
}
.formGroup {
  margin-bottom: 20px;
  text-align: left;
}
label {
  display: block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}
.formField {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 100%;
}
button[type="submit"]:hover {
  background-color: #3e8e41;
}
button[type="submit"]:disabled {
  background-color: #588a5a;
  cursor: not-allowed;
}
button
.formLinks {
  margin-top: 20px;
  font-size: 14px;
}
.formLinks a {
  color: #4caf50;
}
.formLinks a:hover {
  text-decoration: underline;
}

.errorMessage {
  color: #e22b2b;
  margin-top: 5px;
  font-size: 12px;
}
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;
  margin-top: 50px;
  position: absolute;
  top: 40%;
  left: 40%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
