import { feathersClient } from 'src/feathers-client.js'
import { reduce } from 'lodash'

export function fetchRewardPoints (context, user) {
  feathersClient.service('rewardpts_tbl').find({
    query: {
      $limit: 0,
      $sort: {
        pk: 1
      },
      reward_to: user.username
    }
  }).then(rewardsPointsdata => {
    const rewardPoints = reduce(rewardsPointsdata.data, (sum, points) => {
      return sum + points.amount
    }, 0)

    context.commit('SET_REWARDPOINTS', rewardPoints)
  }).catch((error) => {
    console.log(error)
  })
}

export function AddRewardspts (context, rewardptsData) {
  feathersClient.service('rewardpts_tbl').create(rewardptsData).then(reward => {
    context.commit('DECREASE_REWARDPOINTS', -reward.amount)
    console.log('Sucess! Rewards')
  }).catch((error) => {
    console.log(error)
  })
}
