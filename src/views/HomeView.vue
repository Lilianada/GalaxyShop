<template>
  <div class="home">
    <HeaderComponent />
    <h1>Welcome, {{ user.username }}!</h1>
    <p>Your email is {{ user.email }}.</p>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  created() {
    // Check if user is authenticated
    if (!this.$store.state.token) {
      // Redirect to login page
      this.$router.push('/login');
    }
  },
};
</script>

<style>
/* add your home page styles here */
</style>
