import { feathersClient } from 'src/feathers-client.js'

export function fetchAccounts (context, user) {
  feathersClient.service('accounts_tbl').find({
    query: {
      $limit: 0,
      $sort: {
        pk: 1
      },
      username: user.username
    }
  }).then(accountsData => {
    context.commit('SET_ACCOUNTS', accountsData.data[0])
  }).catch((error) => {
    console.log(error)
  })
}
