/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
import { addFiles, setMediaToPlay } from './player-slice'
import { currentMediaSelector } from './player-selectors'
import { fileToBase64Async } from '../../util'

export const addFileThunk = files => async (dispatch, getState) => {
  if (files && files.length && files.length > 0) {
    const files64 = []
    for (const file of files) {
      const f64 = await fileToBase64Async(file)
      files64.push(f64)
    }

    dispatch(addFiles(files64))

    if (!currentMediaSelector(getState())) {
      dispatch(setMediaToPlay(0))
    }
  }
}
