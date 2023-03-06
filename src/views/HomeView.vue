<template>
  <div class="home">
    <HeaderComponent />
    <h1>Welcome to the home page!</h1>
    <p>This is the content of the home page.</p>
    <button @click="showLogoutModal = true">Logout</button>
    <logout-modal :show="showLogoutModal" @logout="logout" @close="showLogoutModal = false" />
  </div>
</template>

<script>
import LogoutModal from '@/components/LogoutComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    LogoutModal,
},
};
</script>

<style>
/* add your home page styles here */
</style>
