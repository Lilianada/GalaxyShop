<template>
  <div class="home">
    <HeaderComponent />
    <h1>Welcome to the home page!</h1>
    <p>This is the content of the home page.</p>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent
},
};
</script>

<style>
/* add your home page styles here */
</style>
