import _ from 'lodash'
import { createSelector } from 'reselect'

export const isFetchingSelector = state => state.player.fetching

export const currentMediaSelector = state => {
  const { mediaList, media } = state.player

  if (media != null && mediaList) {
    return _.get(mediaList, media) || null
  }
  return null
}

export const isPlayingSelector = state => state.player.playing
export const isPausedSelector = state => state.player.pause
export const timeSelector = state => state.player.time
export const durationSelector = state => state.player.duration
export const jumpSelector = createSelector(
  durationSelector,
  state => state.player.jump,
  (duration, jump) => {
    const result = (duration * jump) / 100
    return isNaN(result) ? null : result
  }
)

export const progressSelector = createSelector(
  timeSelector,
  durationSelector,
  (time, duration) => {
    const result = (time * 100) / duration
    return isNaN(result) ? 0 : result
  }
)
