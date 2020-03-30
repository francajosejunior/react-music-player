import { combineReducers } from 'redux'
import storage from 'redux-persist/es/storage/session'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { persistReducer } from 'redux-persist'
import loginReducer from '../../features/login/loginSlice'
import menuReducer from '../../features/menu/menuSlice'
import preloaderReducer from '../../features/preloader/slice'
import comboBoxStatusReducer from '../../features/ticketMat/comboBoxStatus/comboBoxStatusSlice'
import passwordResetReducer from '../../features/passwordReset/passwordResetSlice'
import { createNamedWrapperReducer } from '../reduxHelper'
import listReducer from '../../components/comboBox/listReducer'
import formalizationMatReducer from '../../features/formalizationMat/formalizationMatSlice'
import formalizationMatGridReducer from '../../features/formalizationMatGrid/formalizationMatGridSlice'
import ticketMatReducer from '../../features/ticketMat/ticketMatSlice'
import documentsReducer from '../../features/ticketMat/documents/documentsSlice'
import whatsappReducer from '../../features/whatsapp/slice'
import waModal from '../../features/whatsapp/waModal/reducer'
import googleMapsReducer from '../../features/googleMapsModal/slice'

const authPersistConfig = {
  key: 'auth',
  storage: storage
}

const waModalPersistConfig = {
  key: 'waModal_config',
  storage: storage
}

const rootReducer = combineReducers({
  toastr: toastrReducer,
  auth: persistReducer(authPersistConfig, loginReducer),
  menu: menuReducer,
  formalizationMat: formalizationMatReducer,
  formalizationMatGrid: formalizationMatGridReducer,
  ticketMat: ticketMatReducer,
  documents: documentsReducer,
  preloader: preloaderReducer,
  operation: createNamedWrapperReducer(listReducer, 'operation'),
  corban: createNamedWrapperReducer(listReducer, 'corban'),
  comboBoxStatus: comboBoxStatusReducer,
  whatsapp: whatsappReducer,
  googleMaps: googleMapsReducer,
  waModal, // : persistReducer(waModalPersistConfig, waModal)
  passwordReset: passwordResetReducer
})

export default rootReducer // persistReducer(rootPersistConfig, rootReducer);
