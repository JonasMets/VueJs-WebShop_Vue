<template>
  <div>
    <!--Navbar -->
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark default-color">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->

      <router-link to="/" class="navbar-brand">
        <i class="fab fa-reddit mr-1"></i>SHOPWARE
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent-333"
        aria-controls="navbarSupportedContent-333"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Nyheter</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/products" class="nav-link">Hemelektronik</router-link>
          </li>

          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link">Kläder</router-link>
          </li> -->

          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link">Skor</router-link>
          </li> -->

          <!-- <li class="nav-item">
            <router-link to="/" class="nav-link">Accessoarer</router-link>
          </li> -->
        </ul>

        <ul class="navbar-nav ml-auto nav-flex-icons">
          <!-- shopping cart -->
          <li class="nav-item dropdown">
            <!-- Basic dropdown -->
            <a
              class="nav-link mr-4"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ shoppingCartItemCount }}
              <i class="fas fa-shopping-cart"></i>
            </a>

            <!-- dropdown-menu drop-down-menu-right z-depth-2 shopping-cart -->
            <div class="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
              <ShoppingCart />
            </div>
            <!-- Basic dropdown -->
          </li>

          <!-- user settings -->
          <div>
            <!-- <div v-if="isUserLoggedIn"> {{isUserLoggedIn}} {{user.firstName}} -->
            <div v-if="user.id">
              <router-link to="/" class="nav-link">{{user.firstName}}</router-link>
               </div>
               <div v-else>
                 <router-link to="/login" class="nav-link">Logga in</router-link>
               </div>
          </div>
          

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mr-4"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              

              <i class="fas fa-user"></i>
            </a>

            <div class="dropdown-menu dropdown-menu-right z-depth-2">
              <UserSettings />
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!--/.Navbar -->
  </div>
</template>

<script>
import ShoppingCart from "../shoppingcart/ShoppingCart";
import UserSettings from "../user/Usersettings";

import { mapGetters } from "vuex";

export default {
  components: {
    //
    ShoppingCart,
    UserSettings
  },
  data() {
    return {
      // userInfo: "?"
    };
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

<style scoped>
.shopping-cart {
  min-width: 450px;
}
</style>