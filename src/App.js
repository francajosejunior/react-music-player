import React from 'react'
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './styles/App.scss'
import Routes from './Routes'

import './mocks/test'

function App() {
  return (
    <div className={'app-container'}>
      <ReduxToastr
        timeOut={8000}
        newestOnTop={true}
        preventDuplicates
        position="top-right"
        getState={state => state.toastr} // This is the default
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
      <Routes />
    </div>
  )
}

export default App
