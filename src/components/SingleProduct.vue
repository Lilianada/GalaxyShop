<template>
    <div class="product-page">
      <div class="product-images">
        <img :src="product.images[0]" alt="" />
        <div class="thumbnails">
          <img v-for="(image, index) in product.images" :key="index" :src="image" alt="" />
        </div>
      </div>
      <div class="product-info">
        <h2>{{ product.title }}</h2>
        <p class="product-price">$ {{ product.price }}</p>
        <p class="product-rating">
          Rating: {{ product.rating }}
          {{ product.rating >= 4 ? "⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️" }}
        </p>
        <p class="product-description">{{ product.description }}</p>
        <button @click="addToCart">Add to cart</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SingleProduct",
    data() {
      return {
        product: null,
      };
    },
    created() {
      const productId = this.$route.params.id;
      this.product = getProductById(productId); 
    },
  };
  </script>
  