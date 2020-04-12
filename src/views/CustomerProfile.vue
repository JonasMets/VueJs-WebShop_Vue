<template>
  <div>
    <h4>Din profilsida visas här</h4>

    <div class="container">
      <p>Förnamn: {{ user.firstName }} </p>
      <p>Efternamn: {{ user.lastName }} </p>
      <p>Email: {{ user.email }} </p>
    </div>
    <hr>
    
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name:'CustomerProfile',
  methods:{
    ...mapActions(['getCurrentUser'])
  },
  computed: {
    ...mapGetters(["user"])
  },
  created(){
    this.getCurrentUser()
  }
}
</script>

<style>

</style>