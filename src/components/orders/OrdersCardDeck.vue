<template>
  <div>
    <!-- <h4>Här ska alla ordrar för en kund visas</h4> -->
    <!-- {{ orders.data.data[0]._id }} -->
    <!-- {{ orders.data.data[0].orderItems }}  <div v-if="orders.data.data">-->
    <div v-if="orders">
      <OrderCard v-for="order in orders.data.data" v-bind:key="order._id" v-bind:order="order">order</OrderCard>
      
    </div>

  </div>
</template>

<script>
// importerar OrderCard från OrderCard.vue
import OrderCard from "./OrderCard";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "OrdersCardDeck",
  components: {
    OrderCard
  },
  methods: {
    ...mapActions(["getOrdersByCustomer"])
  },
  created() {
    this.getOrdersByCustomer(this.user.id);
  },
  computed: {
    ...mapGetters(["orders", "user"])
  }
};
</script>

<style>
</style>