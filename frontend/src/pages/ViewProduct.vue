<template>
  <q-page padding>
    <div class="row no-wrap items-center q-mb-md bg-white q-pa-md rounded-borders">
      <q-breadcrumbs separator-color="EnpireBlack" active-color="EnpireBlack" class="text-EnpireGold">
        <q-breadcrumbs-el to="/" icon="home" label="Home" />
        <q-breadcrumbs-el label="View Products" />
      </q-breadcrumbs>
      <q-space />
    </div>
    <div class="row bg-white q-pa-md">
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <hooper :rtl="true" @afterSlide="selectProduct" align="center" group="group1">
          <slide v-for="(product, index) in products" :key="index">
            <q-img
              class="q-mt-md"
              :src="'http://23.91.115.133:8080/'+product.pic"
              spinner-color="BeautifindGray"
              style="height: 170px; max-width: 170px"
            />
          </slide>
        </hooper>

        <hooper style="height: 88px;" group="group1" :itemsToShow="4">
          <slide v-for="(product, index) in products" :key="index">
            <q-img
              class="q-mt-xs"
              :src="'http://23.91.115.133:8080/'+product.pic"
              spinner-color="BeautifindGray"
              spinner-size="24px"
              style="height: 80px; max-width: 80px"
            />
          </slide>

          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>

      </div>
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <q-card flat class="no-shadow">
          <q-card-section>
            <div v-if="productDetails" class="text-h6">
              {{productDetails.itemname}}
            </div>
            <div v-if="productDetails" class="text-subtitle2">
              {{productDetails.description}}
            </div>
          </q-card-section>

          <q-separator inset />

          <q-card-section>
            <span v-if="productDetails">Php {{productDetails.srp | numeral('0,0.00')}}</span>
            <q-input square class="q-mt-sm" filled dense v-model="quantity" color="EnpireBlack" label="Quantity">
              <template v-slot:before>
                <q-btn round dense v-if="quantity >= 1" color="EnpireGold" size="sm" @click="quantity--" unelevated icon="ti-minus" />
              </template>

              <template v-slot:after>
                <q-btn round color="EnpireGold" unelevated @click="quantity++" size="sm" dense icon="ti-plus" />
              </template>
            </q-input>
          </q-card-section>

          <q-card-actions vertical align="right">
            <q-btn color="EnpireGold" icon="ti-shopping-cart" unelevated label="Add to Cart" />
            <q-btn color="BeautifindGold" icon="ti-check-box" unelevated label="Proceed Checkout" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>
<script>
import { Hooper, Slide, Pagination as HooperPagination, Navigation as HooperNavigation, Progress as HooperProgress } from 'hooper'
import 'hooper/dist/hooper.css'
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperProgress
  },
  data () {
    return {
      productDetails: null,
      quantity: 0
    }
  },
  computed: {
    products () {
      return this.$store.state.stproducts.products.filter((product) => {
        return product.is_active === parseInt(this.$route.params.id)
      })
    }
  },
  methods: {
    selectProduct (product) {
      this.productDetails = this.products[product.currentSlide]
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
