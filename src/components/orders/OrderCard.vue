<template>
  <div>
    <!-- <h4>här skapar vi en order med det kunden beställt som ska visas i OrdersCardDeck</h4> -->
    <div class="col mb-4">
      <!-- Card -->
      <div class="card">
        <h4>Ordernummer: {{ order._id }}</h4>
        <!-- {{ order.orderItems }} -->

        <OrderCardContent
          v-for="Item in order.orderItems"
          v-bind:key="Item.orderItems"
          v-bind:Item="Item"
        ></OrderCardContent>

        <hr>

        <div class="ml-auto mr-2">
          <div class="total-price ">
            Totalt:
            <!-- shoppingCartTotal visar det totala beloppet genom att multiplicera antal(item.quantity) av en produkt med priset (item.product.price) -->
            <span class="ml-1">{{ order.orderTotalAmount }} sek</span>
          </div>
          <small class="text-muted">inkl.moms</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OrderCardContent from "./OrderCardContent";

export default {
  name: "OrderCard",
  props: ["order"],
  components: {
    OrderCardContent
  }
};
</script>

<style>
</style>