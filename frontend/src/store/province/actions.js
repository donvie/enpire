import { feathersClient } from 'src/feathers-client.js'

export function fetchProvince (context) {
  feathersClient.service('province_tbl').find({
    query: {
      $limit: 0,
      $sort: {
        id: 1
      }
    }
  }).then(provinceData => {
    let province = provinceData.data.map(province => ({
      label: province.province_name,
      value: {
        provinceName: province.province_name,
        regionId: province.region_id,
        id: province.id
      }
    }))

    context.commit('SET_PROVINCE', province)
  }).catch((error) => {
    console.log(error)
  })
}
