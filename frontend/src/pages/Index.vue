<template>
  <q-page padding>
    <q-img
      src="statics/background.jpg"
      spinner-color="BeautifindGray"
      style="max-width: 100%; height: auto;"
    />

    <div class="row no-wrap items-center font-TrajanPro-Regular q-mt-lg q-mb-lg q-pa-sm bg-white text-h4 rounded-borders">
      <q-space />
        Our Products
      <q-space />
    </div>

    <div class="row">
      <div align="center" v-if="this.$store.state.stproducts.isLoading" class="col-12 q-pa-sm">
        <q-spinner
          color="BeautifindGray"
          size="xl"
        />
      </div>
      <div align="center" v-for="(product, index) in products" :key="index" class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
        <q-card class="full-height no-shadow my-card" bordered>
          <q-img spinner-color="BeautifindGray" :src="'http://23.91.115.133:8080/'+product.pic">
            <div style="padding: 2px;" class="absolute-bottom text-subtitle1 text-center">
              In Stock: {{product.avail_qty}}
            </div>
          </q-img>

          <q-card-section align="left">
            <div class="customEllipsis">
              {{product.itemname}}
            </div>
            <div class="customEllipsis text-subtitle2">
              Php {{product.srp | numeral('0,0.00')}}
            </div>
          </q-card-section>

          <q-separator class="full-width" />
          <q-card-actions>
            <q-btn rounded @click="$router.push('/view_product/' + product.is_active).catch(() => {})" unelevated color="EnpireGold" size="sm" no-caps class="full-width">View</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <div class="row no-wrap items-center font-TrajanPro-Regular q-mt-lg q-mb-lg q-pa-sm text-center bg-white text-h4 rounded-borders">
      <q-space />
        Tap and win instant prizes!
      <q-space />
    </div>

    <div class="row">
      <div align="center" v-if="this.$store.state.tapbidsrewards.isLoading" class="col-12 q-pa-sm">
        <q-spinner
          color="BeautifindGray"
          size="xl"
        />
      </div>

      <div align="center" v-if="tapbidsrewards.length === 0" class="col-12 text-h5 q-pa-sm">
        <q-icon name="ti-gift" size="24px" /> Not Available!
      </div>
      <div align="center" v-for="(tapbidsreward, index) in tapbidsrewards" :key="index" class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
        <q-card class="full-height no-shadow my-card" bordered>
          <q-img spinner-color="BeautifindGray" :src="'http://23.91.115.133:8080/'+tapbidsreward.tap_picture">
            <div style="padding: 2px;" class="absolute-bottom text-subtitle1 text-center">
              {{tapbidsreward.tap_points | numeral('0,0.00')}} Points
            </div>
          </q-img>

          <q-card-section align="left">
            <div class="customEllipsis">
              {{tapbidsreward.tap_name}}
            </div>
            <div class="customEllipsis text-caption">
              {{tapbidsreward.timeRemaining}}
            </div>
          </q-card-section>

          <q-separator class="full-width" />

          <q-card-actions>
            <q-btn rounded unelevated @click="$router.push('/bidding/' + tapbidsreward.pk).catch(() => {})" color="EnpireGold" size="sm" no-caps class="full-width">Join</q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      date
    }
  },
  mounted () {
    // console.log(this.$store.getters['stproducts/sortProducts'])
  },
  computed: {
    tapbidsrewards () {
      return this.$store.state.tapbidsrewards.tapbidsrewardsData
    },
    products () {
      return this.$store.getters['stproducts/filterProducts']
      // return this.$lodash.sortBy(this.$lodash.uniqBy(this.$lodash.filter(this.$store.state.stproducts.products, function(o) { return o.is_active !== null }), 'is_active'), ['is_active'])
    }
  }
}
</script>

<style lang="sass" scoped>
  .customEllipsis
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  .my-card
    width: 100%;
    max-width: 190px;
</style>
