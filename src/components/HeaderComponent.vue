<template>
  <header>
    <div class="logo">
      <router-link to="/">Galaxy Shop</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/shop">Shop</router-link></li>
        <li>
          <button @click="showSignoutModal = true" class="signoutBtn">
            Sign out
          </button>
        </li>
      </ul>
    </nav>
  </header>
  <signout-modal
    :show="showSignoutModal"
    @close="showSignoutModal = false"
    @signout="handleSignout"
  ></signout-modal>
</template>

<script>
import SignoutModal from "./SignoutModal.vue";

export default {
  name: "HeaderComponent",
  components: {
    SignoutModal,
  },
  data() {
    return {
      showSignoutModal: false,
    };
  },
  methods: {
    handleSignout() {
      this.$store.commit("signout");
      this.$router.push("/");
    },
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
    color: #4caf50;
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
  
      .signoutBtn{
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
