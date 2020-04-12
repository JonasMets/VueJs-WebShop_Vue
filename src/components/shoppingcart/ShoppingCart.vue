<template>
  <!-- ShoppingCart.vue  -->
  <!-- anropas från Navbar.vue som en dropdown -->
  <div>
    <h4>Dina Produkter</h4>

    <div v-if="shoppingCart.length <1 ">
      <h4>Inga Produkter</h4>
    </div>
    <div v-else>
      <!-- v-for="product in shoppingCart" :key="product.id" v-bind:item="product" -->
      <!-- visar de valda produkterna med  shoppingCart i store som returnerar objekten i state.cart -->
      <!-- cartItem skickas in i ShoppingcartProduct som en props -->
      <ShoppingcartProduct
        v-for="cartItem in shoppingCart"
        :key="cartItem._id"
        v-bind:cartItem="cartItem"
      />
    </div>

    <div class="p-2 d-flex justify-content-between align-items-center">
      <div>
        <div class="total-price">
          Totalt:
          <!-- shoppingCartTotal visar det totala beloppet genom att multiplicera antal(item.quantity) av en produkt med priset (item.product.price) -->
          <span class="ml-1">{{ shoppingCartTotal }} sek</span>
        </div>
        <small class="text-muted">inkl.moms</small>
      </div>

      <!-- v-on:click.stop=""  -->
      <!-- <button class="btn btn-default" v-on:click.stop>Gå till kassan</button> -->
      <div>
        <div v-if="user.id">

          <router-link v-if="shoppingCartTotal > 0" to="/checkout" class="btn btn-default">Gå till kassan</router-link>
          <div v-else class="btn">Varukorg tom </div>
        </div>
        <div v-else> 
          <p class="text-muted">Logga in för att beställa</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingcartProduct from "../shoppingcart/ShoppingcartProduct";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Shoppingcart",
  components: {
    ShoppingcartProduct
  },
  data() {
    return {
      // shoppingcart: [{id:1,name:'TV'},{id:2,name:'TV'},{id:3,name:'TV'}],
      // shoppingCartTotal:500
    };
  },
  methods:{
    ...mapActions(['setShoppingCart'])
  },
  computed: {
    ...mapGetters([
      "shoppingCart",
      "shoppingCartTotal",
      "shoppingCartItemCount",
      "isUserLoggedIn",
      "user"
    ])
  },
  created(){
    this.setShoppingCart()
  }
};
</script>

<style>
</style>