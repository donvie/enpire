import { feathersClient } from 'src/feathers-client.js'

export function fetchUser (context) {
  feathersClient.reAuthenticate().then((user) => {
    context.commit('SET_USER', user['users_tbl'])
  }).catch((error) => {
    console.log(error)
  })
}

export function login (context, userAccount) {
  context.commit('SET_LOADING_STATUS')
  userAccount.strategy = 'local'
  feathersClient.authenticate(userAccount).then((user) => {
    context.commit('SET_USER', user['users_tbl'])
    this.$router.push('/').catch(() => {})
    context.commit('SET_LOADING_STATUS')
  }).catch(error => {
    console.error('Authentication error', error)
    context.commit('SET_LOADING_STATUS')
  })
}

export function signUp (context, userInfo) {
  feathersClient.service('users_tbl').create(userInfo).then(data => {
  })
}

export function logOut (context) {
  feathersClient.logout()
  context.commit('SET_USER_NULL')
  context.commit('rewardpts/SET_REWARDPOINT_0', 0, { root: true })
  this.$router.push('/signin').catch(() => {})
  console.log('logged out!')
}
