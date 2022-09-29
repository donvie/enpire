import { feathersClient } from 'src/feathers-client.js'

export function fetchProducts (context) {
  context.commit('SET_LOADING_STATUS')
  feathersClient.service('stproducts_tbl').find({
    query: {
      $limit: 0
    }
  }).then(products => {
    context.commit('SET_PRODUCTS', products.data)
    context.commit('SET_LOADING_STATUS')
  }).catch((error) => {
    context.commit('SET_LOADING_STATUS')
    console.log(error)
  })
}
