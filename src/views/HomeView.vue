<template>
  <div class="home">
    <Header/>
    <div class="homeWrap">
      <div class="homeForm">
        <h2>Home</h2>
        <p>Welcome to the home page</p>
      </div>
    </div>
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
