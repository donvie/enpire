<template>
  <q-page padding class="flex flex-center">
    <q-card class="login no-shadow" bordered>
      <q-card-section class="text-center">
        <!-- <img style="max-width: 100%; height: auto; width: 300px;" src="~assets/logoside.png"> -->
        <div class="text-h5 text-EnpireBlack">Sign In</div>
      </q-card-section>
      <q-card-section>
        <q-input class="q-mb-sm" color="EnpireBlack" label="Username" v-model="username" />
        <q-input class="q-mb-sm" color="EnpireBlack" type="password" label="Password" v-model="password" />
      </q-card-section>

      <q-card-actions vertical>
        <!-- :loading="$store.state.user.isLoading"  -->
        <q-btn unelevated no-caps class="full-width q-mb-xs" label="Log In" color="EnpireGold" @click="login()" />
        <q-btn unelevated no-caps @click="$router.push('/signup').catch(() => {})" class="full-width" flat label="Don't have an account? Sign Up" color="EnpireBlack" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    if (this.$store.state.user.userData) {
      this.$router.go(-1)
    }
  },
  methods: {
    login () {
      let userAccount = {
        username: this.username,
        new_password: this.password
      }

      this.$store.dispatch('user/login', userAccount)
    }
  }
}
</script>

<style lang="sass" scoped>
  .login
    width: 100%;
    max-width: 400px;
</style>
