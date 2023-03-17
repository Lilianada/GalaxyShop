<template>
    <div v-if="product">
      <div class="product-images">
        <img :src="product.images[0]" alt="" />
      </div>
      <div class="product-info">
        <h2>{{ product.title }}</h2>
        <p class="product-price">$ {{ product.price }}</p>
        <p class="product-rating">
          Rating: {{ product.rating }}
          {{ product.rating >= 4 ? "⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️" }}
        </p>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "SingleProduct",
    props: {
      productId: {
        type: String,
        required: true,
      },
    },
    computed: {
      product() {
        return this.$store.getters.getProductById(this.productId);
      },
    },
  };
  </script>
  