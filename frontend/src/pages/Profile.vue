<template>
  <q-page padding>
    <q-list class="bg-white" bordered padding>
      <q-item-label header>Personal Information</q-item-label>

      <q-item>
        <q-item-section>
          <q-item-label overline>Name</q-item-label>
          <q-item-label v-if="user">{{user.fname}} {{user.mname}} {{user.lname}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label overline>Email Address</q-item-label>
          <q-item-label v-if="user">{{user.email === '' ? 'None' : user.email}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label overline>Contact Number</q-item-label>
          <q-item-label v-if="user">{{user.contact === '' ? 'None' : user.contact}}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item>
        <q-item-section>
          <q-item-label overline>Address</q-item-label>
          <q-item-label v-if="user">{{user.address === '' ? 'None' : user.address}}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>Others</q-item-label>
        <q-item>
          <q-item-section>
            <q-btn color="negative" label="Deactivate Account" />
          </q-item-section>
        </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.state.user.userData
    }
  }
}
</script>

<style>

</style>
