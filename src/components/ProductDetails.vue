<template>
  <div class="product-details">
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p class="product-price">$ {{ product.price }}</p>
    <p class="product-rating">
      Rating: {{ product.rating }}
      {{ product.rating >= 4 ? "⭐️⭐️⭐️⭐️" : "⭐️⭐️⭐️" }}
    </p>
  </div>
</template>

<script>
export default {
  name: "product-details",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      productDetails: {},
    };
  },
};
</script>
