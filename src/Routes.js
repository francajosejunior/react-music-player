import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'
import Home from './features/home'
import FormalizationMat from './features/formalizationMat'
import FormalizationMatGrid from './features/formalizationMatGrid'
import TicketMat from './features/ticketMat'
import Whatsapp from './features/whatsapp'

function Routes(params) {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
