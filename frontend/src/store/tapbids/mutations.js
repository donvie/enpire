export function SET_TAPBIDS (state, tapbids) {
  state.tapbidsData = tapbids
}

export function ADD_TAPBIDS (state, tapbidsData) {
  state.tapbidsData.unshift(tapbidsData)
  if (state.tapbidsData.length >= 10) {
    state.tapbidsData.splice(10, 1)
  }
}

export function RESET_TAPBIDS (state) {
  state.tapbidsData = []
}
