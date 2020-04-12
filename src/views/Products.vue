
<template>
<!-- Products.vue anropas som default route i router/index.js-->
<!-- här visar vi alla produkter från /components/product/ProductCardDeck -->

  <div>
    <h2 class="mb-4">Våra produkter</h2>

    <!-- visar produkter från  components/product/ProductCardDeck -->
    <appProducts />

  </div>
</template>

<script>
import appProducts from "../components/product/ProductCardDeck";

export default {
  name: "Products",
  components: {
    //
    appProducts
  }
};
</script>

<style>
</style>