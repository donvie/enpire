import { feathersClient } from 'src/feathers-client.js'

export function fetchTerms (context) {
  feathersClient.service('terms_tbl').find().then(terms => {
    context.commit('SET_TERMS', terms.data[0].terms)
  }).catch((error) => {
    console.log(error)
  })
}
