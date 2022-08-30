<template>
  <div>
    <div class="container mt-5">
      <div class="row g-3">
        <div v-for="product in products" :key="product.id" class="col-md-3">
          <div class="card">
            <img class="card-img-top" :src="product.image" alt="" />
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
            </div>
            <div
              class="
                card-footer
                d-flex
                justify-content-between
                align-items-center
              "
            >
              <button
                @click="addToCart(product)"
                class="btn btn-outline-success btn-sm"
              >
                Add To Cart
              </button>
              <span>{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { storeToRefs } from "pinia";

import { usePiniaStore } from "../../store/pinia.js";
export default {
  setup() {
    const loading = ref(false);
    const store = useStore();
    // Vue X
    //  const products = computed(() => store.getters["product/allProducts"]);

    //Pinian//
    const psiniaStore = usePiniaStore();
    // const { products } = storeToRefs(psiniaStore);
    const products = computed(() => psiniaStore.allProducts);
    function addToCart(product) {
      store.dispatch("cart/addToCart", product);
    }

    return {
      store,
      products,
      addToCart,
      psiniaStore,
    };
  },
};
</script>

<style>
</style>
