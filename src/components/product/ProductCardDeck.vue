<template>
<!-- ProductCardDeck.vue anropas från Products.vue-->
  <div>
    <div class="row row-cols-1 row-cols-md-3">
          <!-- visar alla produkter som finns i store state.products -->
          <!-- skickar med product som en props till ProductCard -->
          <ProductCard v-for="product in products.data" v-bind:key="product._id" v-bind:product="product" />

        <!-- {{ products.data }} -->

    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    ProductCard
  },
  methods:{
    ...mapActions(['getAllProducts'])
  },
  created(){
    this.getAllProducts();
  },
  computed:{
    ...mapGetters(['products'])
  }
};
</script>

<style>
</style>