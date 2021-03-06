import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  fetching: false,
  mediaList: [],
  media: null,
  playing: false,
  pause: false,
  time: 0,
  duration: 0,
  jump: null,
  a: null,
  b: null
}

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    setFetching: (state, action) => {
      state.fetching = action.payload
    },
    addFiles: (state, action) => {
      state.mediaList = [...state.mediaList, ...action.payload]
    },
    setMediaToPlay: (state, action) => {
      state.media = action.payload
    },
    clearFiles: state => {
      state.mediaList = []
      state.media = null
    },
    onPlay: state => {
      if (!state.playing) {
        state.playing = true
        state.pause = false
      } else if (state.playing && !state.pause) {
        state.pause = true
      } else if (state.playing && state.pause) {
        state.pause = false
      }
    },
    togglePause: state => {
      state.pause = !state.pause
    },
    onStop: state => {
      state.pause = false
      state.playing = false
      state.time = 0
    },
    setTime: (state, action) => {
      state.time = action.payload
    },
    setDuration: (state, action) => {
      state.duration = action.payload
    },
    jump: (state, action) => {
      state.jump = action.payload
    },
    setAB: state => {
      if (_.isNull(state.a)) {
        state.a = state.time
      } else if (_.isNull(state.b)) {
        state.b = state.time
      } else {
        state.a = null
        state.b = null
      }
    }
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = playerSlice
// Extract and export each action creator by name
export const {
  setFetching,
  addFiles,
  setMediaToPlay,
  clearFiles,
  onPlay,
  togglePause,
  onStop,
  setTime,
  setDuration,
  jump,
  setAB
} = actions
// Export the reducer, either as a default or named export
export default reducer
