import { feathersClient } from 'src/feathers-client.js'

export function fetchTown (context, province) {
  feathersClient.service('town_tbl').find({
    query: {
      prov_id: province.value.id,
      $limit: 0,
      $sort: {
        id: 1
      }
    }
  }).then(townData => {
    let town = townData.data.map(town => ({
      label: town.town_name,
      value: {
        id: town.id,
        prov_id: town.prov_id,
        town_name: town.town_name,
        latitude: town.latitude,
        longitude: town.longitude
      }
    }))
    context.commit('SET_TOWN', town)
  }).catch((error) => {
    console.log(error)
  })
}
