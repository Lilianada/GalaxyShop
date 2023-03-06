<template>
  <main class="logoutWrap">
    <div class="logoutForm">
      <form>
        <h2>Logout</h2>
        
        <div class="form-group">
          <button type="submit" @click.prevent="Logout">Logout</button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    Logout() {
      // your Logout logic here
    },
  },
};
</script>

<style scoped>
.logoutWrap {
  background: url(../assets/Images/404Bg.png);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.logoutForm {
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
