<template>
  <q-page padding class="flex flex-center">
    <q-card class="signup no-shadow" bordered>
      <q-card-section class="text-center">
        <!-- <img style="max-width: 100%; height: auto; width: 300px;" src="~assets/logoside.png"> -->
        <div class="text-h5 text-EnpireBlack">Sign Up</div>
      </q-card-section>
      <q-card-section>
        <q-input class="q-mb-sm" color="EnpireBlack" label="Email Address" v-model="username" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Username" v-model="password" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Password" v-model="username" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Confirm Password" v-model="password" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="First Name" v-model="username" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Middle Name" v-model="password" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Last Name" v-model="username" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Contact Number" placeholder="+63" v-model="password" />
        <q-input class="q-mb-sm" color="EnpireBlack" label="Address" v-model="username" />
        <q-select options-selected-class="bg-EnpireGold text-white" @input="fetchTown" class="q-mb-sm" color="EnpireBlack" v-model="province" :options="$store.state.province.provinceData" label="Province" />
        <q-select options-selected-class="bg-EnpireGold text-white" class="q-mb-sm" color="EnpireBlack" v-model="town" :options="$store.state.town.townData" label="Town/City" />
        <q-checkbox class="q-mb-sm" v-model="is_terms" label="I accept Terms and Conditions" />
      </q-card-section>

      <q-card-actions vertical>
        <q-btn unelevated no-caps class="full-width" label="Register" color="EnpireGold" @click="signUp" />
        <q-btn unelevated no-caps @click="$router.push('/signin').catch(() => {})" class="full-width" flat label="Already have an account? Sign In" color="EnpireBlack" />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="termsDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6 font-TrajanPro-Regular">Terms of Agreement</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <pre style="word-wrap: break-word; white-space: pre-wrap;">
            {{$store.state.terms.termsData}}
          </pre>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn @click="is_terms = false" flat label="Decline" color="EnpireBlack" v-close-popup />
          <q-btn unelevated label="Accept" color="EnpireGold" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      province: null,
      town: null,
      termsDialog: false,
      username: '',
      password: '',
      is_terms: false
    }
  },
  watch: {
    is_terms (val) {
      if (val === true) {
        this.termsDialog = true
      }
    }
  },
  mounted () {
    if (this.$store.state.user.userData) {
      this.$router.go(-1)
    }
    this.fetchTerms()
    this.fetchProvince()
  },
  methods: {
    fetchTerms () {
      this.$store.dispatch('terms/fetchTerms')
    },
    fetchProvince () {
      this.$store.dispatch('province/fetchProvince')
    },
    fetchTown () {
      this.town = null
      this.$store.dispatch('town/fetchTown', this.province)
    },
    signUp () {
      // let userInfo = {
      //   pk: 9999999999,
      //   date_created: new Date(),
      //   username: 'username9',
      //   email: 'username9',
      //   password: 'username9',
      //   unhashed: 'username9',
      //   fname: 'Enpire',
      //   mname: '',
      //   lname: 'Marketing',
      //   contact_ccode: '+63',
      //   contact: '9072253573',
      //   country: 1,
      //   province: 1,
      //   city: 1,
      //   address: 'Taguig City',
      //   is_active: 0,
      //   is_stockist: 1,
      //   payoption_details: 'try',
      //   is_verified: 0,
      //   verified_by: 'username1',
      //   pic: '/images',
      //   verifycode: 'username1',
      //   verify_date: new Date(),
      //   active_date: new Date(),
      //   secret_q: 1,
      //   secret_a: 'try',
      //   date_upgraded: new Date(),
      //   tin: 'try',
      //   gcash: 'try',
      //   placement: 'try',
      //   pos: 1,
      //   is_terms: 0,
      //   is_terms_click: new Date()
      // }

      // this.$store.dispatch('user/signUp', userInfo)
    }
  }
}
</script>

<style lang="sass" scoped>
  .signup
    width: 100%;
    max-width: 600px;
</style>
