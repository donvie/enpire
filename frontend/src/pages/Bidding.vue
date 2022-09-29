<template>
  <q-page padding>
    <div class="row no-wrap items-center q-mb-md bg-white q-pa-md rounded-borders">
      <q-breadcrumbs separator-color="EnpireBlack" active-color="EnpireBlack" class="text-EnpireGold">
        <q-breadcrumbs-el to="/" icon="home" label="Home" />
        <q-breadcrumbs-el label="Bidding" />
      </q-breadcrumbs>
      <q-space />
      {{$store.state.rewardpts.rewardPoints | numeral('0,0.00')}} Points
    </div>
    <!-- <pre>{{reward.timeRemaining === undefined}}</pre> -->
    <div class="row justify-center">
      <div align="center" class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-pa-sm">
        <q-card v-if="reward" class="no-shadow my-card" bordered>
          <q-img spinner-color="BeautifindGray" :src="'http://23.91.115.133:8080/'+reward.tap_picture">
            <div style="padding: 2px;" class="absolute-bottom text-subtitle1 text-center">
              {{reward.tap_points}} Points
            </div>
          </q-img>

          <q-card-section align="left">
            <div class="customEllipsis">
              {{reward.tap_name}}
            </div>
            <div class="customEllipsis text-caption">
              {{reward.timeRemaining === 'Reward Ended!' || reward.timeRemaining === undefined ? 'Reward Ended!' : reward.timeRemaining }}
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions>
            <q-btn push :disable="reward.timeRemaining === 'Reward Ended!' || reward.timeRemaining === undefined || $store.state.rewardpts.rewardPoints < reward.tap_points" @click="Tap()" unelevated color="EnpireGold" size="md" icon="ti-hand-point-up" rounded no-caps class="full-width">Tap</q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div align="center" class="text-left col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 q-pa-sm">
        <q-list class="bg-white" bordered separator>
          <q-item-label header>Top 10</q-item-label>
          <q-item v-for="(tap, index) in tapbids" :key="index">
            <q-item-section side>
              {{index + 1}}.
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{tap.fname}} {{tap.mname}} {{tap.lname}}
              </q-item-label>
              <q-item-label caption>
                {{date.formatDate(tap.date_created, 'hh:mm:ss:SS')}}
              </q-item-label>
            </q-item-section>
            <q-item-section v-if="index === 0" side>
              <q-item-label caption>Last Tap</q-item-label>
              <q-icon name="star" color="EnpireGold" />
            </q-item-section>
          </q-item>

          <q-item class="text-center text-weight-medium" v-if="tapbids.length === 0">
            <q-item-section>No data yet!</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from 'quasar'
export default {
  data () {
    return {
      date
    }
  },
  beforeDestroy () {
    this.$store.commit('tapbids/RESET_TAPBIDS')
    this.DestroyRealtimeTapbids()
  },
  mounted () {
    this.RealtimeTapbids()
    this.fetchTapbidsreward()
    this.fetchTapbids()
    this.fetchRewardPoints()
  },
  computed: {
    user () {
      return this.$store.state.user.userData
    },
    reward () {
      return this.$store.state.tapbidsrewards.tapbidsrewardData
    },
    tapbids () {
      return this.$store.state.tapbids.tapbidsData
    }
  },
  methods: {
    DestroyRealtimeTapbids () {
      this.$store.dispatch('tapbids/DestroyRealtimeTapbids')
    },
    fetchTapbidsreward () {
      this.$store.dispatch('tapbidsrewards/fetchTapbidsreward', this.$route.params.id)
    },
    RealtimeTapbids () {
      this.$store.dispatch('tapbids/RealtimeTapbids')
    },
    fetchTapbids () {
      this.$store.dispatch('tapbids/fetchTapbids', this.$route.params.id)
    },
    fetchRewardPoints () {
      if (this.user) {
        this.$store.dispatch('rewardpts/fetchRewardPoints', this.user)
      }
    },
    Tap () {
      let tapbidsData = {
        taprewardid: this.reward.pk,
        username: this.user.username,
        fname: this.user.fname,
        mname: this.user.mname,
        lname: this.user.lname
      }

      let rewardptsData = {
        type: 1,
        reward_fr: this.user.username,
        reward_to: this.user.username,
        amount: -(this.reward.tap_points),
        reward_code: '',
        remarks: ''
      }

      this.$store.dispatch('tapbids/AddTapbids', { tapbidsData, rewardptsData })
    }
  }
}
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%;
    max-width: 240px;
</style>
