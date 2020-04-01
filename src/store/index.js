import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)

export default store
