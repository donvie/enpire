import { feathersClient } from 'src/feathers-client.js'

export function fetchTapbidsrewards (context) {
  context.commit('SET_LOADING_STATUS')
  feathersClient.service('tapbidsrewards_tbl').find({
    query: {
      active: true,
      $sort: {
        tap_points: 1
      },
      $limit: 50
    }
  }).then(tapbidsrewards => {
    context.commit('SET_LOADING_STATUS')
    context.commit('SET_TAPBIDSREWARDS', tapbidsrewards.data.map(obj => ({ ...obj, timeRemaining: 'Reward Ended!' })))
    tapbidsrewards.data.forEach(rewards => {
      feathersClient.io.on(rewards.pk, tapbidsrewardsData => {
        context.commit('SET_TIMEREMAINING', tapbidsrewardsData)
      })
    })
  }).catch((error) => {
    context.commit('SET_LOADING_STATUS')
    console.log(error)
  })
}

export function fetchTapbidsreward (context, pk) {
  feathersClient.service('tapbidsrewards_tbl').find({
    query: {
      pk: pk,
      active: true,
      $sort: {
        tap_points: 1
      },
      $limit: 1
    }
  }).then(tapbidsreward => {
    // tapbidsreward.data[0].timeRemaining = 'Reward Ended!'
    context.commit('SET_TAPBIDSREWARD', tapbidsreward.data[0])

    feathersClient.io.on(tapbidsreward.data[0].pk, tapbidsrewardsData => {
      context.commit('SET_TAPBIDSREWARD', { ...tapbidsrewardsData, ...tapbidsreward.data[0] })
    })
    // context.commit('SET_TAPBIDSREWARD', tapbidsreward.data.map(obj => ({ ...obj, timeRemaining: 'Reward Ended!' })))
  }).catch((error) => {
    console.log(error)
  })
}
