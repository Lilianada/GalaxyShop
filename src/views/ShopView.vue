<template>
  <div class="shop">
    <HeaderComponent />
    <h1>Welcome to the shop page!</h1>
    <p>This is the content of the shop page.</p>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  name: 'ShopView',
  components: {
    HeaderComponent,
},
};
</script>

<style>
/* add your home page styles here */
</style>
