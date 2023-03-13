<template>
    <div class="shop">
      <HeaderComponent />
      <h1>Welcome back {{ name }}</h1>
      <p>This is the content of the shop page.</p>
    </div>
  </template>
  
  <script>
  import HeaderComponent from '@/components/HeaderComponent.vue';
  import { computed } from 'vue';
  import { getAuth } from 'firebase/auth';
  
  export default {
    name: 'ShopView',
    components: {
      HeaderComponent,
    },
    setup() {
      const auth = getAuth();
  
      const name = computed(() => {
        const user = auth.currentUser;
        if (user) {
          return user.email.split('@')[0];
        }
        return '';
      });
  
      return {
        name,
      };
    },
  };
  </script>
  
  <style>
  /* add your home page styles here */
  </style>
  