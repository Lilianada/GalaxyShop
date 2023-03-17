<template>
  <header>
    <!-- Desktop Menu -->
    <div class="desktopHeader">
      <div class="logo">
        <router-link to="/">Galaxy Shop</router-link>
      </div>
      <nav class="navbar">
        <ul class="navList">
          <li class="navItem"><router-link to="/home" class="navLink">Home</router-link></li>
          <li class="navItem"><router-link to="/products" class="navLink">Shop</router-link></li>
          <li class="navItem">
            <button @click="showSignoutModal = true" class="signoutBtn">
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Mobile Menu  -->
    <div class="mobileHeader">
      <div class="logo">
        <router-link to="/">Galaxy Shop</router-link>
      </div>

      <button class="toggleBtn" @click="toggleNav">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav :class="{ navbar: show-navbar }">
        <ul class="navList">
          <li class="navItem">
            <h6 class="navTitle">Galaxy Shop</h6>
          </li>
        </ul>

         <!-- Navigation Lis -->
        <ul class="navList">
          <li class="navItem"><router-link to="/home" class="navLink">Home</router-link></li>
          <li class="navItem"><router-link to="/products" class="navLink">Shop</router-link></li>
          <li class="navItem">
            <button @click="showSignoutModal = true" class="signoutBtn">
              Sign out
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <signout-modal
      :show="showSignoutModal"
      @close="showSignoutModal = false"
      @signout="handleSignout"
    ></signout-modal>
  </header>
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
      navbar: false,
    };
  },
  methods: {
    handleSignout() {
      this.$store.commit("signout");
      this.$router.push("/");
    },
    toggleNav() {
      this.navbar = !this.navbar;
    },
  },
};
</script>

<style scoped lang="scss">
header {
  width: 100vw;
  background-color: #0e0e0e;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;

  .mobileHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem;

    @media screen and (min-width: 500px) {
      padding: 1rem;
    }

    @media screen and (min-width: 768px) {
      padding: 1.5rem;
    }

    @media screen and (min-width: 1020px) {
      display: none;
    }

    .menuButton {
      height: -webkit-fit-content;
      height: -moz-fit-content;
      height: fit-content;
      background: none;
      border: none;
      outline: none;
    }

    .closebar{
      display: flex;
    }
    .navbar {
      display: grid;
      height: 100vh;
      width: 100vw;
      position: fixed;
      overflow: scroll;
      z-index: 2;
      top: 0;
      left: -120%;
      background: #0e0e0e;
      text-align: left;
      padding: 1.5rem 1rem 1rem;
      transition: all 800ms ease-in-out;

      @media screen and (min-width: 414px) {
        display: flex;
        flex-direction: column;
      }
      .navList {
        margin-top: 2.35rem;

        &:nth-of-type(3) {
          li {
            &:first-child {
              h6 {
                font-size: 18px;
              }
            }
          }
        }

        .navItem {
          padding-bottom: 1.35rem;

          .navTitle {
            color: #4caf50;
            font-size: 16px;
            font-family: "Work Sans", sans-serif;
            font-weight: 500;
            text-transform: none;
          }

          .navLink {
            color: #fff;
            font-size: 24px;
            font-family: "Inter", sans-serif;
            font-weight: 500;
            text-transform: capitalize;

            &:hover {
              color: #4caf50;
            }
          }
        }
      }
    }
    .logo a {
      color: #4caf50;
      font-size: 24px;
      font-family: "Inter", sans-serif;
      font-weight: 500;
      text-transform: capitalize;
    }
    .show-navbar {
      left: 0;
      transition: left 0.8s ease-in-out;
    }

    .signoutBtn {
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

    .toggleBtn {
      display: block;
      position: relative;
      width: 35px;
      height: 25px;
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;

      span {
        display: block;
        position: absolute;
        height: 2px;
        width: 100%;
        background-color: #fff;
        border-radius: 2px;
        transition: all 0.3s ease;

        &:first-child {
          top: 0;
        }

        &:nth-child(2) {
          top: 50%;
          transform: translateY(-50%);
        }

        &:last-child {
          bottom: 0;
        }
      }
    }
  }
  .desktopHeader {
    display: none;

    @media screen and (min-width: 1021px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 90%;
      margin: 1.5rem auto;

      .navbar {
        .navList {
          display: flex;

          .navLink {
            color: #fff;
            font-size: 16px;
            font-family: "Inter", sans-serif;
            font-weight: 500;
            text-transform: none;
            padding: 0 1rem;
            transition: all 300ms ease-in-out;
          }

          .activeLink {
            color: #4caf50;
            font-size: 16px;
            font-family: "Inter", sans-serif;
            font-weight: 500;
            text-transform: none;
            padding: 0 1rem;
            transition: all 300ms ease-in-out;
          }
        }
      }

      .signoutBtn {
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
