<template>
  <header>
    <div class="logo">
      <router-link to="/">Galaxy Shop</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li>
          <button @click="showLogoutModal = true" class="logoutBtn">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </header>
    <logout-modal
      :show="showLogoutModal"
      @close="showLogoutModal = false"
      @logout="handleLogout"
    ></logout-modal>
</template>

<script>
import LogoutModal from "./LogoutModal.vue";

export default {
  components: {
    LogoutModal,
  },
  data() {
    return {
      showLogoutModal: false,
      handleLogout() {
        this.$store.commit("logout");
        this.$router.push("/login");
      },
    };
  },
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0e0e0e;
  .logo {
    font-size: 24px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    color: #ff9100;
  }

  nav ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;

     li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
      
      a {
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        font-size: 16px;
        font-family: "Inter", sans-serif;

        &:hover {
          text-decoration: underline;
        }
      }
  
      .logoutBtn{
        background: none;
        border: none;
        color: #fff;
        font-weight: 500;
        font-size: 16px;
        font-family: "Inter", sans-serif;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
