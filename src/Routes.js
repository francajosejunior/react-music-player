import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Player from './pages/player'

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Player} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
