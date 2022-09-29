export function SET_LOADING_STATUS (state) {
  state.isLoading = !state.isLoading
}

export function SET_USER (state, userData) {
  state.userData = userData
}

export function SET_USER_NULL (state) {
  state.userData = null
  this.isLoading = false
}
