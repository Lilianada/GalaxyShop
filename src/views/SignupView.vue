<template>
    <main class="signupWrap">
      <div class="signup-form">
        <form  @submit.prevent="handleSubmit">
            <h2>Signup</h2>
            <div class="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" required>
            </div>
            <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" required>
            </div>
            <div class="form-group">
            <button type="submit" @click.prevent="signup">Signup</button>
            </div>
            <div class="form-links">
                <router-link to="/login">Already a user? Login</router-link> | 
                <router-link to="/not-found">Forgot password</router-link>
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
    handleSubmit() {
      this.$store.dispatch('signup', {
        email: this.email,
        username: this.username,
        password: this.password,
      });
      
      // Clear form fields
      this.email = '';
      this.username = '';
      this.password = '';
    },
  },
  };
  </script>
  
  <style scoped>
  .signupWrap {
    background: url(../assets/Images/404Bg.png) #0e0e0e no-repeat center center;
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
  