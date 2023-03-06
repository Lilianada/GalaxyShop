<template>
  <div class="home">
    
    <Header/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    Header: () => import("@/components/HeaderView.vue")
  },
};
</script>
