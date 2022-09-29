export function SET_TAPBIDSREWARDS (state, tapbidsrewardsData) {
  state.tapbidsrewardsData = tapbidsrewardsData
}

export function SET_TAPBIDSREWARD (state, tapbidsrewardData) {
  state.tapbidsrewardData = tapbidsrewardData
}

export function SET_TIMEREMAINING (state, tapbidsrewardsData) {
  state.tapbidsrewardsData[tapbidsrewardsData.index].timeRemaining = tapbidsrewardsData.timeRemaining
}

export function SET_LOADING_STATUS (state) {
  state.isLoading = !state.isLoading
}
