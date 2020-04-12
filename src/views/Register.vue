<template>
  <div class="container my-5">
    <!-- Section -->
    <section>
      <!-- <h6 class="font-weight-bold text-center grey-text text-uppercase small mb-4">meet MDB</h6> -->
      <!-- <h4 class="font-weight-normal text-center dark-grey-text pb-2 display-4"> -->
      <!-- <strong>30 Days Free Trial</strong> -->
      <p v-if="message">{{message}}</p>
      <!-- </h4> -->
      <hr class="w-header my-4" />

      <form>
        <!--First row-->
        <div class="row d-flex justify-content-center">
          <!--First column-->
          <div class="col-6">
            <!-- Material outline input   id="form1"-->
            <div class="md-form md-outline form-lg">
              <input type="text" class="form-control form-control-lg" v-model="firstName" />
              <label for="form1">Förnamn</label>
            </div>
            <!-- id="form1" -->
            <div class="md-form md-outline form-lg">
              <input type="text" class="form-control form-control-lg" v-model="lastName" />
              <label for="form1">Efternamn</label>
            </div>

            <!-- Material outline input id="form2" -->
            <div class="md-form md-outline form-lg">
              <input type="text" class="form-control form-control-lg" v-model="email" />
              <label for="form2">Email</label>
            </div>

            <!-- Material outline input id="form3" -->
            <div class="md-form md-outline form-lg">
              <input type="password" class="form-control form-control-lg" v-model="passWord" />
              <label for="form3">Lösenord</label>
            </div>

            <button
              class="btn btn-block btn-primary btn-lg"
              v-on:click.prevent="submitForm"
            >Registrera</button>
          </div>
          <!--First column-->
        </div>
      </form>
      <!--First row-->

      <div class="justify-content-center mt-3">
        <p class>Har du redan ett konto ?</p>
        <router-link to="/login">Logga in</router-link>
      </div>
    </section>
    <!-- Section -->

    <!-- test output -->
    <!-- <p>{{user.firstName}}</p>
    <p>{{user.lastName}}</p>
    <p>{{user.email}}</p>
    <p>{{user.passWord}}</p>-->

    {{ messages }}
  </div>
</template>

<script>
import axios from "axios";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      // user: {
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   passWord: ""
      // },
      firstName: "",
      lastName: "",
      email: "",
      passWord: "",
      submitted: false,
      message: ""
    };
  },
  methods: {
    ...mapActions(["registerUser"]),

    async submitForm() {
      // kontroll om något fält är tomt
      if (
        this.firstName != "" &&
        this.lastName != "" &&
        this.email != "" &&
        this.passWord != ""
      ) {
        const user = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          passWord: this.passWord
        };
        // skicka user till mongodb med axios
        const response = await this.registerUser(user);
        console.log(response.statusCode);

        // kontrollera om det gick att registrera en användare
        if (response.statusCode == 201) {

          this.firstName = "" 
        this.lastName = ""
        this.email = ""
        this.passWord = ""

          // gå till inloggning / kan kanske lägga till funktion för direkt inloggning
          this.$router.push("/login");
        } else {
          // det gick inte att registrera användare
          this.message = "Kunde inte registrera användare"
        }
      } else {
        this.message = "Fyll i alla fält";
      }
    }
  },
  computed: {
    ...mapGetters(["messages"])
  }
};
</script>

<style>
</style>