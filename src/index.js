import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import App from './App'
import store, { persistor } from './store'
import ErrorHandler from './pages/errorHandler'

ReactDOM.render(
  <ErrorHandler>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </ErrorHandler>,
  document.getElementById('root')
)
