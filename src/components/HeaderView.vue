<template>
    <header>
      <div class="logo">
        <router-link to="/">Galaxy Shop</router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Signup</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #4CAF50;
    color: white;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
  }
  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  nav li {
    margin-right: 20px;
  }
  nav li:last-child {
    margin-right: 0;
  }
  nav a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  