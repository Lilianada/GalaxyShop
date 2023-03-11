<template>
  <main class="loginWrap">
    <div class="login-form">
      <form @submit.prevent="login">
        <h2>Login</h2>
        <p class="welcomeText">Welcome back to Galaxy Shop!</p>
        <div class="form-group">
          <label for="username">Email</label>
          <input type="text" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="form.password" required />
        </div>
        <div class="form-group">
          <button type="submit" @click.prevent="login">Login</button>
        </div>
        <div class="form-links">
          <div class="form-links">
            <router-link to="/signup">New user? Signup</router-link> |
            <router-link to="/not-found">Forgot password</router-link>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        rememberMe: false,
      },
    };
  },
  methods: {
    login () {
      this.$store.commit('login',
        this.form.email,
        this.form.password
      )
      this.$router.push("/");
    }
  },
  mounted() {
    this.$store.commit("initializeStore");
  },
};
</script>

<style scoped>
.loginWrap {
  background: url(../assets/Images/404Bg.png) #0e0e0e no-repeat center center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.login-form {
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
input[type="text"],
input[type="password"] {
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
</style>
