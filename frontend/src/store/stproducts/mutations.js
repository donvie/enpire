export function SET_PRODUCTS (state, products) {
  state.products = products
}

export function SET_LOADING_STATUS (state) {
  state.isLoading = !state.isLoading
}
