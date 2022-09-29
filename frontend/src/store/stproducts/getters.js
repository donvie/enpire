
import { sortBy, uniqBy, filter } from 'lodash'
export function filterProducts (state) {
  return filter(uniqBy(sortBy(state.products, ['is_active']), 'is_active'), (product) => { return product.is_active !== null })
}
