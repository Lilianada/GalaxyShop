<template>
  <main class="signupWrap">
    <div v-if="loading" class="loader"></div>
    <div class="signup-form" v-if="!loading">
      <form>
        <h2>Signup</h2>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="formField"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="formField"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
            required
          />
          <div class="error-message" v-if="passwordErrorMsg">
            {{ passwordErrorMsg }}
          </div>
        </div>
        <div class="form-group">
          <button type="submit" @click.prevent="handleSignup">Signup</button>
        </div>
        <div class="form-links">
          <router-link to="/">Already a user? Login</router-link> |
          <router-link to="/not-found">Forgot password</router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const router = useRouter();
const loading = ref(false);
const passwordErrorMsg = ref("");

const handleSignup = () => {
  loading.value = true;
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      alert("Succesfully Registered!");
      const user = data.user;
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/shop");
      console.log(data);
    })
    .catch((error) => {
      alert(error.message);
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
</script>

<style scoped>
.signupWrap {
  background: url(../assets/Images/404Bg.png) #060606 no-repeat bottom;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.signup-form {
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
  margin-bottom: 20px;
}
.form-group {
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
.form-links {
  margin-top: 20px;
  font-size: 14px;
}
.form-links a {
  color: #4caf50;
}
.form-links a:hover {
  text-decoration: underline;
}
.error-message {
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
  left: 50%;
  transform: translateY(-50%, -50%);
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
