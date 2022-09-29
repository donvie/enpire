<template>
  <q-page padding>
    <!-- <pre>{{user}}</pre>
    <pre>{{accounts}}</pre> -->
    <!-- <pre>{{rbp}}</pre> -->
    <div class="row no-wrap items-center q-mb-md bg-white q-pa-md rounded-borders">
      <q-breadcrumbs separator-color="EnpireBlack" active-color="EnpireBlack" class="text-EnpireGold">
        <q-breadcrumbs-el to="/" icon="home" label="Home" />
        <q-breadcrumbs-el label="Dashboard" />
      </q-breadcrumbs>
      <q-space />
    </div>

    <div class="row">
      <div align="center" class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
        <q-card bordered class="my-card no-shadow bg-white text-center">
          <q-card-section>
            <q-icon color="blue" size="32px" name="ti-ticket" />
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle2">Available Bonus</div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1 text-weight-bold">Not yet available</div>
          </q-card-section>
        </q-card>
      </div>

      <div align="center" class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
        <q-card bordered class="my-card no-shadow bg-white text-center">
          <q-card-section>
            <q-icon color="green" size="32px" name="ti-world" />
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle2">Network Status</div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1 text-weight-bold">Not yet available</div>
          </q-card-section>
        </q-card>
      </div>

      <div align="center" class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
        <q-card bordered class="my-card no-shadow bg-white text-center">
          <q-card-section>
            <q-icon color="orange" size="32px" name="ti-stats-up" />
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle2">Account Status</div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1 text-weight-bold">Not yet available</div>
          </q-card-section>
        </q-card>
      </div>

      <div align="center" class="col-xs-6 col-sm-3 col-md-3 col-lg-3 col-xl-3 q-pa-sm">
        <q-card bordered class="my-card no-shadow bg-white text-center">
          <q-card-section>
            <q-icon color="red" size="32px" name="ti-user" />
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle2">Account Type</div>
          </q-card-section>

          <q-card-section>
           <div class="text-subtitle1 text-weight-bold">Not yet available</div>
            <!-- <div v-if="user.is_stockist === 2" class="text-subtitle1 text-weight-bold">
              Stockist
            </div>
            <div v-else-if="user.is_stockist === 3" class="text-subtitle1 text-weight-bold">
              Kiosk
            </div>
            <div v-else class="text-subtitle1 text-weight-bold">
              <div v-if="rbp.rank === 0" class="text-subtitle1 text-weight-bold">Customer</div>
            </div> -->

            <!-- <div v-if="accounts.rank === 0" class="text-subtitle1 text-weight-bold">Customer</div>
            <div v-if="accounts.rank === 1" class="text-subtitle1 text-weight-bold">Reseller</div>
            <div v-if="accounts.rank === 2" class="text-subtitle1 text-weight-bold">Stockist</div> -->
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.fetchAccounts()
    this.fetchRBP()
  },
  methods: {
    fetchAccounts () {
      this.$store.dispatch('accounts/fetchAccounts', this.user)
    },
    fetchRBP () {
      this.$store.dispatch('rbp/fetchRBP', this.user)
    }
  },
  computed: {
    user () {
      return this.$store.state.user.userData
    },
    accounts () {
      return this.$store.state.accounts.accountsData
    },
    rbp () {
      return this.$store.state.rbp.rbpData
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%;
    max-width: 190px;
</style>
