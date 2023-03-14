<template>
    <HeaderComponent />
  <div class="home">
    <h1>Welcome back {{ user.displayName }}!</h1>
    <p>Pick up from where you left off.</p>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { useCurrentUser } from "@/composables/index.js";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
  },
  setup() {
    const { user, logout } = useCurrentUser();

    const handleLogout = async () => {
      await logout();
      '/'
    };

    return { user, handleLogout };
  },
};
</script>

<style  lang="scss" scoped>
  .home{
    background: url(../assets/Images/404Bg.png) #0e0e0e no-repeat center center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
  
  h1{
    color: white;
    font-size: 3rem;
    margin-top: 5rem;
  }

  p{
    color: white;
    font-size: 1.5rem;
  }
}

</style>
