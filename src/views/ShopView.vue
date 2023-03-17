<template>
  <div v-if="loading" class="loader"></div>
  <section class="shop" v-if="!loading">
    <HeaderComponent />
    <h1>Welcome back {{ user.displayName }}</h1>
    <div class="productWrap">
      <div class="product-list">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">
          Previous
        </button>
        <button :disabled="currentPage === totalPages" @click="currentPage++">
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
import ProductCard from "@/components/ProductCard.vue";
import { useCurrentUser } from "@/composables/index.js";

export default {
  name: "ShopView",
  components: {
    HeaderComponent,
    ProductCard,
  },
  setup() {
    const products = ref([]);
    const currentPage = ref(1);
    const pageSize = 1;
    const loading = ref(false);
    const { user } = useCurrentUser();


    const fetchProducts = async () => {
      loading.value = true;
      try {
        const response = await axios.get("https://dummyjson.com/products");
        products.value.products = response.data.products;
      } catch (error) {
        console.log(error);
      } finally {
        loading.value = false;
      }
    };

    const paginatedProducts = computed(() => {
      return products.value.products;
    });

    const totalPages = computed(() => {
      return Math.ceil(products.value.length / pageSize);
    });

    watchEffect(() => {
      if (products.value.length > 0) {
        const startIndex = (currentPage.value) * pageSize;
        const endIndex = startIndex + pageSize;
        paginatedProducts.value =
          products.value.products.length > 0
            ? products.value.products.slice(startIndex, endIndex)
            : [];
      }
      console.log(paginatedProducts.value)
    });

    fetchProducts();

    return {
      products,
      currentPage,
      pageSize,
      paginatedProducts,
      totalPages,
      user,
      loading,
    };
  },
};
</script>
<style scoped>
/* add your shop page styles here */
.shop h1 {
  font-size: 24px;
  margin: 2rem;
  line-height: 32px;
}

.productWrap {
  height: 100%;
  width: 100%;
  padding: 2rem;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
}

@media screen and (min-width: 576px) {
  /* Small screen size */
  .product-list {
    flex-direction: column;
  }
}

@media screen and (min-width: 768px) {
  /* Tablet screen size */
  .product-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media screen and (min-width: 992px) {
  /* Desktop screen size */
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  /* Large desktop screen size */
  .product-list {
    grid-template-columns: repeat(4, 1fr);
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
}

.pagination button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  width: 8rem;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination button:hover {
  background-color: #000;
  color: #fff;
}

.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: auto;
  margin-top: 50px;
  position: absolute;
  top: 40%;
  left: 40%;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
