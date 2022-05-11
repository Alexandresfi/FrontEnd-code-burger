import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Admin } from '../Containers/Admin'
import { Cart } from '../Containers/Cart'
import { Home } from '../Containers/Home'
import { Login } from '../Containers/Login'
import { Products } from '../Containers/Products'
import { Register } from '../Containers/Register'
import { PrivateRoute } from './private-route'

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} exact path="/cadastro" />
        <PrivateRoute component={Home} exact path="/" />
        <PrivateRoute component={Products} exact path="/produtos" />
        <PrivateRoute component={Cart} exact path="/carrinho" />
        <PrivateRoute component={Admin} exact path="/pedidos" isAdmin />
      </Switch>
    </Router>
  )
}
