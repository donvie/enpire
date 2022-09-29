import { feathersClient } from 'src/feathers-client.js'

export function fetchRBP (context, user) {
  feathersClient.service('rbp_tbl').find({
    query: {
      $limit: 0,
      $sort: {
        pk: 1
      },
      username: user.username
    }
  }).then(rbpData => {
    context.commit('SET_RBP', rbpData.data)
  }).catch((error) => {
    console.log(error)
  })
}
