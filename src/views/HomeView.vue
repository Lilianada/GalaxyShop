<template>
  <div class="shop">
    <HeaderComponent />
    <h1>Welcome back {{ user.displayName }}!</h1>
    <p>This is the content of the shop page.</p>
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

<style>
/* add your home page styles here */
</style>
