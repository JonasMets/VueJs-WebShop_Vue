<template>
  <div>

    <!--   <div v-if="!isUserLoggedIn"> -->
      <!-- {{ user }} -->
    <div v-if="!user.id">
      <!-- <a class="dropdown-item" href="#">Logga in</a> -->
      <router-link to="/login" class="dropdown-item">Logga in</router-link>
      <!-- <a class="dropdown-item" href="#">Skapa konto</a> -->
      <router-link to="/register" class="dropdown-item">Skapa konto</router-link>
    </div>
    <div v-else>
      <!-- <a class="dropdown-item" href="#">Ditt konto</a> -->
      <router-link to="/customerprofile" class="dropdown-item">Ditt konto</router-link>
      <!-- <a class="dropdown-item" href="#">Dina ordrar</a> -->
      <router-link to="/customerorders" class="dropdown-item">Dina ordrar</router-link>
      <hr>
      <!-- <a class="dropdown-item" href="#" v-on:click.prevent="logOutUser" >Logga ut</a> -->
      <!-- <btn class="dropdown-item" v-on:click.prevent="logOutUser">Logga ut</btn> -->
      <button class="dropdown-item" v-on:click.prevent="onClickLogOut">Logga ut</button>
    </div>


  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex"; 


export default {
  data() {
    return {
      // isUserLoggedIn: false
    };
  },
  methods:{
    ...mapActions(['logOutUser','getCurrentUser',"clearAllCartItem"]),

    onClickLogOut(){
      this.logOutUser();
      this.clearAllCartItem();
      // gå tillbaka till produkter
          this.returnUrl = this.$route.query.returnUrl || '/'
          this.$router.push(this.returnUrl)
    }

  },
  computed: {
    ...mapGetters(["isUserLoggedIn","user"])
  },
  created(){
    this.getCurrentUser()
  }

};
</script>

<style>
</style>