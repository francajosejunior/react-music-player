import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)

export default store
