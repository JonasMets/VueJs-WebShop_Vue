<template>
  <div class="container">
    <h4 class="mb-4">Dina ordrar visas här</h4>

    <OrdersCardDeck></OrdersCardDeck>

  </div>
</template>

<script>
import OrdersCardDeck from '../components/orders/OrdersCardDeck';

export default {
  name:'CustomerOrders',
  components:{
    OrdersCardDeck
  }
}
</script>

<style>

</style>