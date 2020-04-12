<template>
  <div>
    <h4>Skapa och skicka order</h4>

    <div class="container mt-2">
      <ShoppingcartProduct
        v-for="cartItem in shoppingCart"
        :key="cartItem._id"
        v-bind:cartItem="cartItem"
      />
    </div>

    <div>
      <div class="total-price">
        Totalt:
        <!-- shoppingCartTotal visar det totala beloppet genom att multiplicera antal(item.quantity) av en produkt med priset (item.product.price) -->
        <span class="ml-1">{{ shoppingCartTotal }} sek</span>
      </div>
      <small class="text-muted">inkl.moms</small>
    </div>

    <div>
      <div class="container mt-5">
        <!--Section: Content-->
        <section class="dark-grey-text">
          <div class="card">
            <div class="card-body">
              <!--Grid row-->
              <div class="row">
                <!--Grid column-->
                <div class="col-lg-8">
                  <!-- Pills navs -->
                  <ul class="nav md-pills nav-justified pills-primary font-weight-bold">
                    <li class="nav-item">
                      <a
                        class="nav-link active"
                        data-toggle="tab"
                        href="#tabCheckoutBilling123"
                        role="tab"
                      >Leverans adress</a>
                    </li>
                  </ul>

                  <!-- Pills panels -->
                  <div class="tab-content pt-4">
                    <!--Panel 1-->
                    <div
                      class="tab-pane fade in show active"
                      id="tabCheckoutBilling123"
                      role="tabpanel"
                    >
                      <!--Card content-->
                      <form>
                        <!--Grid row-->
                        <div class="row">
                          <!--Grid column-->
                          <div class="col-md-6 mb-4">
                            <!--firstName     v-model="firstName"     -->
                            <label for="firstName" class>Förnamn</label>
                            <input
                              type="text"
                              id="firstName"
                              :value="user.firstName"
                              class="form-control"
                            />
                          </div>
                          <!--Grid column-->

                          <!--Grid column-->
                          <div class="col-md-6 mb-2">
                            <!--lastName      v-model="lastName" -->
                            <label for="lastName" class>Efternamn</label>
                            <input
                              type="text"
                              id="lastName"
                              :value="user.lastName"
                              class="form-control"
                            />
                          </div>
                          <!--Grid column-->
                        </div>
                        <!--Grid row-->

                        <!--email        v-model="email"   -->
                        <label for="email" class>Email</label>
                        <input
                          type="text"
                          id="email"
                          :value="user.email"
                          class="form-control mb-4"
                          placeholder="youremail@example.com"
                        />

                        <!--address-->
                        <label for="address" class>Gatu Adress</label>
                        <input
                          type="text"
                          id="address"
                          v-model="address"
                          class="form-control mb-4"
                          placeholder=" ex. Vägen 1"
                        />

                        <!--Grid row-->
                        <div class="row">
                          <!--Grid column-->
                          <div class="col-lg-4 col-md-6 mb-4">
                            <label for="zip">Postnummer</label>
                            <input
                              type="text"
                              class="form-control"
                              id="zip"
                              v-model="zip"
                              placeholder
                              required
                            />
                            <div class="invalid-feedback">Postnummer krävs</div>
                          </div>
                          <!--Grid column-->

                          <!--Grid column-->
                          <div class="col-lg-4 col-md-6 mb-4">
                            <label for="state">Stad</label>
                            <select
                              class="custom-select d-block w-100"
                              id="state"
                              v-model="city"
                              required
                            >
                              <option value>Stockholm</option>
                              <option>Stockholm</option>
                            </select>
                            <div class="invalid-feedback">Välj en stad</div>
                          </div>
                          <!--Grid column-->

                          <!--Grid column-->
                          <div class="col-lg-4 col-md-12 mb-4">
                            <label for="country">Land</label>
                            <select
                              class="custom-select d-block w-100"
                              id="country"
                              v-model="country"
                              required
                            >
                              <option value>Sverige</option>
                              <option>Sverige</option>
                            </select>
                            <div class="invalid-feedback">Välj ett land</div>
                          </div>
                          <!--Grid column-->
                        </div>
                        <!--Grid row-->

                        <hr />

                        <hr />

                        <!-- <button class="btn btn-primary btn-lg btn-block" type="submit" v-on:click.stop>Nästa steg</button> -->

                        <!--Panel 3 class="tab-pane fade" id="tabCheckoutPayment123"  role="tabpanel" -->
                        <div class>
                          <div class="d-block my-3">
                            <h4>Någon betalningsmetod här</h4>
                            <div class="mb-2">
                              <input
                                name="group2"
                                type="radio"
                                class="form-check-input with-gap"
                                id="radioWithGap4"
                                required
                              />
                              <label class="form-check-label" for="radioWithGap4">Kredit kort</label>
                            </div>

                            <div class="mb-2">
                              <input
                                name="group2"
                                type="radio"
                                class="form-check-input with-gap"
                                id="radioWithGap6"
                                required
                              />
                              <label class="form-check-label" for="radioWithGap6">Paypal</label>
                            </div>
                          </div>

                          <hr class="mb-4" />

                          <!-- <button class="btn btn-primary btn-lg btn-block" type="submit" v-on:click.stop>Godkänn och skicka</button> -->
                        </div>
                        <!--/.Panel 3-->

                        <!-- Godkänn och skicka -->
                        <button
                          class="btn btn-primary btn-lg btn-block"
                          type="submit"
                          v-on:click.prevent="submitOrder"
                        >Godkänn och skicka</button>
                      </form>
                    </div>
                    <!--/.Panel 1-->

                    <!--Panel 2-->

                    <!--/.Panel 2-->
                  </div>
                  <!-- Pills panels -->
                </div>
                <!--Grid column-->

                <!--Grid column-->

                <!--Grid column-->
              </div>
              <!--Grid row-->
            </div>
          </div>
        </section>
        <!--Section: Content-->
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingcartProduct from "../components/shoppingcart/ShoppingcartProduct";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "CheckOut",
  components: {
    ShoppingcartProduct
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      zip: "",
      city: "",
      country: "",

      submitted: false,
      message: ""
    };
  },
  methods: {
    ...mapActions(["createNewOrder", "clearAllCartItem"]),

    async submitOrder() {
      // kontrollera fält och skicka order till mongodb via store
      const shippingData = {
        address: this.address,
        zip: this.zip,
        city: this.city,
        country: this.country
      };

      const newOrder = {
        userId: this.user.id,
        userData: this.user,
        shippingData: shippingData,
        orderItems: this.shoppingCart,
        orderTotalAmount: this.shoppingCartTotal
      };

      const response = await this.createNewOrder(newOrder);

      if (response.status == 200) {
        console.log("Order submitted...    " + response);

        // rensar shoppingvagn
        this.clearAllCartItem();
        //  går till en sida som visar att order är skickad
        this.$router.push("/checkoutok");

      } else {
        console.log(response);
      }
    }
  },
  computed: {
    ...mapGetters([
      "shoppingCart",
      "shoppingCartTotal",
      "shoppingCartItemCount",
      "isUserLoggedIn",
      "user"
    ])
  }
};
</script>

<style>
</style>