<template>
  <div class="product-details" :product="parsedProduct" >
    <h2>{{ parsedProduct.title }}</h2>
    <p>{{ parsedProduct.description }}</p>
    <p class="product-price">$ {{ parsedProduct.price }}</p>
    <p class="product-rating">
      Rating: {{ parsedProduct.rating }}
      {{ parsedProduct.rating >= 4 ? "⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️" }}
    </p>
  </div>
</template>

<script>
export default {
  name: "product-details",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      parsedProduct: {}
    };
  },
  mounted() {
    if (this.product) {
      this.parsedProduct = JSON.parse(this.product);
    }
  }
};
</script>

  <style scoped>
  .product-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
  }
  
  .product-images img {
    max-width: 100%;
    height: auto;
  }
  
  .product-info {
    margin-left: 20px;
  }
  
  .product-info h2 {
    font-size: 24px;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    color: #4caf50;
  }
  
  .product-info .product-price {
    font-size: 20px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: #333;
    margin-top: 10px;
  }
  
  .product-info .product-rating {
    font-size: 18px;
    font-weight: 500;
    font-family: "Inter", sans-serif;
    color: #333;
    margin-top: 10px;
  }
  
  .product-info .product-description {
    font-size: 16px;
    font-weight: 400;
    font-family: "Inter", sans-serif;
    color: #333;
    margin-top: 10px;
  }
  </style>