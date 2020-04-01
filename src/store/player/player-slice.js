import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fetching: false,
  mediaList: [],
  media: null
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
    }
  }
})

// Extract the action creators object and the reducer
const { actions, reducer } = playerSlice
// Extract and export each action creator by name
export const { setFetching, addFiles, setMediaToPlay, clearFiles } = actions
// Export the reducer, either as a default or named export
export default reducer
