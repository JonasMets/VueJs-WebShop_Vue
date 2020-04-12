<template>
<!-- ProductCard.vue anropas från ProductCardDeck.vue-->
<!-- Här visas den produkt som skickas med in som props: ["product"] från ProductCardDeck  -->
  <div>
    <div class="col mb-4">
      <!-- Card -->
      <div class="card">
        <!--Card image     src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" -->

        <!-- {{ product._id }} -->

        <div class="view overlay">
          <img class="card-img-top" :src="product.image" alt="Card image cap" />

          <!-- när man trycker på bilden skickas man till Product.vue -->
          <!-- vi skickar med vilken produkt som ska visas mha params id -->
          <router-link :to="{name:'Product',params:{id: product._id}}">
            <div class="mask rgba-white-slight"></div>
          </router-link>

        </div>

        <!--Card content-->
        <div class="card-body">
          <!--Title-->
          <h4 class="card-title">{{ product.name }}</h4>
          <!--Text  short -->
          <p class="card-text">{{ product.description }}</p>
          <!-- -->
          <!-- <button type="button" class="btn btn-light-blue btn-md">Läs mer</button> -->

          <!-- när man trycker på knappen skickas man till Product.vue -->
          <!-- vi skickar med vilken produkt som ska visas mha params id -->
          <router-link :to="{name:'Product',params:{id: product._id}}">
            <div class="mask rgba-white-slight btn btn-light-blue btn-md">Läs mer</div>
          </router-link>

        </div>
      </div>
      <!-- Card -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style>
</style>