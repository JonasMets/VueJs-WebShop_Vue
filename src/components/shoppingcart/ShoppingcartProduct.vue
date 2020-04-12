<template>
<!-- ShoppingCartProduct.vue -->
<!-- anropas från ShoppingCart får in en props: ["cartItem"] -->
  <div>
    <div class="cart-item">
      <div class="p2-d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center">
          <img class="image-width" :src="cartItem.product[0].image" alt="produkt bild" />
          <div>
            <div>
              <!-- Produkt namn:  -->
              <strong>{{ cartItem.product[0].name }}</strong>
            </div>
            <div>
              <!-- {{ shoppingCartItemCount }}    {{shoppingCart.quantity}} -->
              <small> {{cartItem.quantity}} x {{ cartItem.product[0].price }} SEK</small>
            </div>
          </div>

          <div class="ml-3 d-flex align-items-center">
            <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">

              <!-- när man trycker på +/- ska antal för produkt öka/minska -->
              <!-- kallar på decreaseQuantity i store actions -->
              <button type="button" class="btn btn-grey btn-sm px-3" 
              v-on:click.stop="decreaseQuantity(cartItem.product)">-</button>
              <!-- kallar på increaseQuantity i store actions -->
              <button type="button" class="btn btn-grey btn-sm px-3" 
              v-on:click.stop="increaseQuantity(cartItem.product)" >+</button>

            </div>

            <div>
              <!-- deleteProductFromCart kallar på funktion i store som tar bort den valda produkten -->
              <!-- skickar med cartItem.product.id -->
              <button
                class="btn btn-sm btn-danger"
                v-on:click.stop="deleteProductFromCart(cartItem.product[0]._id)"
              >
                <i class="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown-divider"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["cartItem"],
  methods: {
    ...mapActions(["deleteProductFromCart","increaseQuantity","decreaseQuantity"])
  },
  computed: {
    ...mapGetters([
      "shoppingCart",
      "shoppingCartTotal",
      "shoppingCartItemCount",
      "product"
    ])
  }
};
</script>

<style scoped>
.image-width {
  max-width: 90px;
}
</style>