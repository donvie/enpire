export function SET_REWARDPOINTS (state, rewardPoints) {
  state.rewardPoints = rewardPoints
}

export function SET_REWARDPOINT_0 (state, rewardPoints) {
  state.rewardPoints = 0
}

export function DECREASE_REWARDPOINTS (state, amount) {
  state.rewardPoints -= amount
}
