<template>
<!-- Product.vue anropas från ProductCard.vue när man trycker på bilden eller knapp -->
<!-- vi får in en props: ["id"] från ProductCard.vue som används för att hämta rätt produkt -->
  <div>
    <div class="container my-5 py-5 z-depth-1">
  <!--Section: Content-->
  <section class="text-center">
    <!-- Section heading -->
    <h3 class="font-weight-bold mb-5">Produkt info</h3>

        <!-- {{ product[0].name }} -->

    <div class="row">
      <div class="col-lg-6">

        <!--Carousel Wrapper-->
        <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

          <!--Slides-->
          <div class="carousel-inner text-center text-md-left" role="listbox">
            <div class="carousel-item active">
              <img :src="product[0].image"
                alt="First slide" class="img-fluid">
            </div>
            
          </div>
          <!--/.Slides-->
        </div>
        <!--/.Carousel Wrapper-->
      </div>

      <div class="col-lg-5 text-center text-md-left">
        <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
          <strong> {{ product[0].name }} </strong>
        </h2>
        <!-- <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span> -->
        <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
          <span class=" font-weight-bold">
            <strong>{{ product[0].price }} SEK</strong>
          </span>
        </h3>

        <!--Accordion wrapper-->
        <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

          <!-- Accordion card -->
          <div class="card">
            <!-- Card header -->
            <div class="card-header" role="tab" id="headingOne1">
              <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                aria-controls="collapseOne1">
                <h5 class="mb-0">
                  Beskrivning
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <!-- Card body -->
            <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
              data-parent="#accordionEx">
              <div class="card-body">
                {{ product[0].description }}
              </div>
            </div>
          </div>
          <!-- Accordion card -->

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingTwo2">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                aria-expanded="false" aria-controls="collapseTwo2">
                <h5 class="mb-0">
                  Detaljer
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <!-- Card body -->
            <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
              data-parent="#accordionEx">
              <div class="card-body">
                <ul>
                  <li>tabpanel</li>
                  <li>accordionEx</li>
                  <li>rotate</li>
                </ul>
              </div>
            </div>
          </div>
          <!-- Accordion card -->

          <!-- Accordion card -->
          <div class="card">

            <!-- Card header -->
            <div class="card-header" role="tab" id="headingThree3">
              <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                aria-expanded="false" aria-controls="collapseThree3">
                <h5 class="mb-0">
                  Orderinfo
                  <i class="fas fa-angle-down rotate-icon"></i>
                </h5>
              </a>
            </div>

            <!-- Card body -->
            <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
              data-parent="#accordionEx">
              <div class="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon
                tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              </div>
            </div>
          </div>
          <!-- Accordion card -->

        </div>
        <!--/.Accordion wrapper-->

        <!-- Add to Cart -->
        <section class="color">
          <div class="mt-5">
            <!-- <p class="grey-text">Choose your color</p> -->
            <div class="row text-center text-md-left">

              <div class="col-md-4 col-12">
                <!--Radio group-->
                <!-- <div class="form-group">
                  <input class="form-check-input" name="group100" type="radio" id="radio100" checked="checked">
                  <label for="radio100" class="form-check-label dark-grey-text">Blue</label>
                </div> -->
              </div>
              <div class="col-md-4">
                <!--Radio group-->
                <!-- <div class="form-group">
                  <input class="form-check-input" name="group100" type="radio" id="radio101">
                  <label for="radio101" class="form-check-label dark-grey-text">Orange</label>
                </div> -->
              </div>
              <div class="col-md-4">
                <!--Radio group-->
                <!-- <div class="form-group">
                  <input class="form-check-input" name="group100" type="radio" id="radio102">
                  <label for="radio102" class="form-check-label dark-grey-text">Red</label>
                </div> -->
              </div>
            </div>

            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <!-- addProductToCart kallar på funktion i store -->
                <!-- vi skickar med ett objekt som innehåller vald product och quantity -->
                <button class="btn btn-primary btn-rounded" v-on:click="addProductToCart({product,quantity:1})">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till varukorg</button>
              </div>
            </div>
          </div>
        </section>
        <!-- /.Add to Cart -->

      </div>

    </div>

  </section>
  <!--Section: Content-->


</div>


  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Product",
  components: {
    //
  },
  props: ["id"],
  methods:{
    ...mapActions(['getProductById', 'addProductToCart'])
  },
  created(){
    // det här körs när componenten skapas
    // kallar på metod getProductById i mapActions

    console.log(this.id)

    this.getProductById(this.id)
  },
  computed:{
    ...mapGetters(['product'])
  }


};
</script>

<style>
</style>