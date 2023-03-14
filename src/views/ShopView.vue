<template>
  <section class="shop">
    <HeaderComponent />
    <h1>Welcome back {{ name }}</h1>
    <div class="productWrap">
      <div class="product-list">
        <ProductCard
          v-for="(product) in paginatedProducts"
          :key="product.id"
          :product="product"
        />
    </div>
    <div class="pagination">
      <button
        :disabled="currentPage === 1"
        @click="currentPage--"
      >
        Previous
      </button>
      <button
        :disabled="currentPage === totalPages"
        @click="currentPage++"
      >
        Next
      </button>
    </div>
    </div>
  </section>
</template>
<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import { computed, ref, watchEffect } from "vue";
import axios from "axios";
import { getAuth } from "firebase/auth";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "ShopView",
  components: {
    HeaderComponent,
    ProductCard,
  },
  setup() {
    const auth = getAuth();
    const name = computed(() => {
      const user = auth.currentUser;
      if (user) {
        return user.email.split("@")[0];
      }
      return "";
    });

    const products = ref([]);
    const currentPage = ref(1);
    const pageSize = 1;

    const fetchProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products");
      products.value = response.data;
      console.log(products.value.products);
    };

    const paginatedProducts = computed(() => {
      return products.value.products;
    });

    const totalPages = computed(() => {
      return Math.ceil(products.value.length / pageSize);
    });

    watchEffect(() => {
  if (products.value.length > 0) {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    paginatedProducts.value = products.value.length > 0 ? products.value.slice(startIndex, endIndex) : [];
  }
});

    fetchProducts();

    return {
      products,
      currentPage,
      pageSize,
      paginatedProducts,
      totalPages,
      name,
    };
  },
};
</script>

<style scoped>
/* add your shop page styles here */
.shop h1 {
    font-size: 30px;
    margin: 2rem;
  }

.productWrap {
  height: 100%;
  width: 100%;
  padding: 2rem;
}

.product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 1rem;
}
.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.pagination button {
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button:hover {
  background-color: #000;
  color: #fff;
}


</style>