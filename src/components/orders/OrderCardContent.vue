<template>
  <div>
    <div class="d-flex">
      <!-- <p>varje produkt i ordern visas här</p> -->
      <img class="image-width" :src="Item.product[0].image" alt="produkt bild" />
      <div>
        <p>{{ Item.product[0].name }}</p>
        <p>{{ Item.product[0].shortdesc }}</p>
      </div>
      <div class="ml-auto mr-2">
        <p>Pris: {{ Item.product[0].price }}</p>
        <p>Antal: {{ Item.quantity }}</p>
      </div>
      <!-- <hr> -->
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "OrderCardContent",
  props: ["Item"]
};
</script>

<style scoped>
.image-width {
  max-width: 90px;
}
</style>