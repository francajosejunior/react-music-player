import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'
import storage from 'redux-persist/es/storage/session'
import { persistReducer } from 'redux-persist'
import playerReducer from './player/player-slice'

const playerReducerPersistConfig = {
  key: 'playerReducer',
  storage: storage
}

const rootReducer = combineReducers({
  toastr: toastrReducer,
  player: persistReducer(playerReducerPersistConfig, playerReducer)
})

export default rootReducer // persistReducer(rootPersistConfig, rootReducer);
