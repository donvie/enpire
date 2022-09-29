import { feathersClient } from 'src/feathers-client.js'

export function fetchTapbids (context, pk) {
  feathersClient.service('tapbids_tbl').find({
    query: {
      $sort: {
        date_created: -1
      },
      $limit: 10,
      taprewardid: pk
    }
  }).then(tapbids => {
    context.commit('SET_TAPBIDS', tapbids.data)
  }).catch((error) => {
    console.log(error)
  })
}

export function AddTapbids (context, datas) {
  feathersClient.service('tapbids_tbl').create(datas.tapbidsData).then(data => {
    context.dispatch('rewardpts/AddRewardspts', datas.rewardptsData, { root: true })
  }).catch((error) => {
    console.log(error)
  })
}

export function RealtimeTapbids (context) {
  feathersClient.service('tapbids_tbl').on('created', tapbidsData => {
    context.commit('ADD_TAPBIDS', tapbidsData)
  })
}

export function DestroyRealtimeTapbids (context) {
  feathersClient.services['tapbids_tbl'].removeListener('created')
}
