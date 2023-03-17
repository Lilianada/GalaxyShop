<template>
  <router-link :to="{ name: 'Product', params: { id: product.id }}">
    <div class="product">
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
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style scoped>
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin: 10px;
  height: 370px;
  width: 300px;
  overflow: hidden;
}


@media screen and (min-width: 900px) {
    
}
.product-images{
    width: 100%;
}
.product-images img{
  width: 100%;
  height: 220px;
  background-size: cover;
  margin-bottom: 10px;
}
.product-info{
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
}
.product-info h2 {
  font-size: 20px;
  margin: 0;
  line-height: 24px;
}
.product-info p {
    margin: 8px 0;
    max-height: 80px;
    overflow: hidden;
    line-height: 17px;
}
.product-price {
  font-weight: bold;
}
</style>
