<template>
  <div class="container my-5">
    <!-- Section -->
    <section>
      <!-- -->
      <h3 class="font-weight-normal text-center dark-grey-text pb-2 display-4">
        <!--  -->
      </h3>

      <p v-if="message">{{message}}</p>

      <hr class="w-header my-4" />

      <form>
        <!--First row-->
        <div class="row d-flex justify-content-center">
          <!--First column-->
          <div class="col-6">
            <!-- Material outline input -->
            <div class="md-form md-outline form-lg">
              <input type="text" id="form2" class="form-control form-control-lg" v-model="email" />
              <label for="form2">Email</label>
            </div>
            <!-- Material outline input -->
            <div class="md-form md-outline form-lg">
              <input
                type="password"
                id="form3"
                class="form-control form-control-lg"
                v-model="passWord"
              />
              <label for="form3">Lösenord</label>
            </div>
            <button
              class="btn btn-block btn-primary btn-lg"
              v-on:click.prevent="submitForm"
            >Logga in</button>
          </div>
          <!--First column-->
        </div>
      </form>
      <!--First row-->
    </section>
    <!-- Section -->
  </div>
</template>

<script>
import axios from "axios";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      passWord: "",

      submitted: false,
      message: ""
    };
  },
  methods: {
    ...mapActions(["loginUser"]),

    async submitForm() {
      //
      if (this.email != "" && this.passWord != "") {
        // console.log(this.email);
        // console.log(this.passWord);

        const response = await this.loginUser({
          email: this.email,
          password: this.passWord
        });

        // console.log(response);

        // om allt ok
        if (response.statusCode == 200) {
          // rensa inmatningsfält
          this.email =""
          this.passWord =""
          // gå tillbaka till produkter ,    lås upp köpknappen ?
          this.returnUrl = this.$route.query.returnUrl || '/products'
          this.$router.push(this.returnUrl)

        }
      } else {
        this.message = "Fyll i alla fält";
      }
    }
  }
};
</script>

<style>
</style>