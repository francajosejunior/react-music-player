import _ from 'lodash'

export const isFetchingSelector = state => state.player.fetching

export const currentMediaSelector = state => {
  const { mediaList, media } = state.player

  if (media != null && mediaList) {
    return _.get(mediaList, media) || null
  }
  return null
}
