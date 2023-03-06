<template>
  <main class="loginWrap">
    <div class="login-form">
    <form>
      <h2>Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit" @click.prevent="login">Login</button>
      </div>
      <div class="form-links">
        <a href="#">New user? Signup</a> | <a href="#">Forgot password</a>
      </div>
    </form>
  </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    };
  },
  methods: {
    login() {
      // your login logic here
    }
  }
};
</script>

<style scoped>
.loginWrap {
  background-color: #f1f1f1;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  background-color: #4CAF50;
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
  color: #4CAF50;
}
.form-links a:hover {
  text-decoration: underline;
}
</style>
