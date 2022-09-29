import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import tapbidsrewards from './tapbidsrewards'
import stproducts from './stproducts'
import tapbids from './tapbids'
import rewardpts from './rewardpts'
import accounts from './accounts'
import rbp from './rbp'
import terms from './terms'
import province from './province'
import town from './town'

import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'
var ls = new SecureLS({ isCompression: false })

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      user,
      tapbidsrewards,
      stproducts,
      tapbids,
      rewardpts,
      accounts,
      rbp,
      terms,
      province,
      town
    },
    plugins: [
      createPersistedState({
        paths: [
          'user',
          'rewardpts'
        ],
        storage: {
          getItem: key => ls.get(key),
          setItem: (key, value) => ls.set(key, value),
          removeItem: key => ls.remove(key)
        }
      })
    ],
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
