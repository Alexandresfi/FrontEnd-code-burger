import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Login } from '../Containers/Login'
import { Register } from '../Containers/Register'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Register} exact path="/cadastro" />
      </Switch>
    </Router>
  )
}
