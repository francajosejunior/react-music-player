import { createSlice } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

const initialState = {}

const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {}
})

export const notify = (title, mensage, notificationTypeEnum) => dispatch =>
  toastr[notificationTypeEnum](title, mensage)

export const notifyCatch = error => dispatch => {
  toastr.error(error.name, error.message || error.stack)
}

// Extract the action creators object and the reducer
const { actions, reducer } = notificationSlice
// Extract and export each action creator by name
export const { notification } = actions
// Export the reducer, either as a default or named export
export default reducer
