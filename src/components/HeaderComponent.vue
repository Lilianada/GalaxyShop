<template>
    <header>
      <div class="logo">
        <router-link to="/">Galaxy Shop</router-link>
      </div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
          <!-- <li><router-link to="/signup">Signup</router-link></li> -->
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
    background-color: #0e0e0e;
    color: #ff9100;
  }
  .logo {
    font-size: 24px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
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
    font-weight: 500;
    font-size: 16px;
    font-family: 'Inter', sans-serif;
  }
  nav a:hover {
    text-decoration: underline;
  }
  </style>
  