import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Home } from '../Containers/Home'
import { Login } from '../Containers/Login'
import { Register } from '../Containers/Register'
import { PrivateRoute } from './private-route'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} exact path="/cadastro" />
        <PrivateRoute component={Home} exact path="/" />
      </Switch>
    </Router>
  )
}
