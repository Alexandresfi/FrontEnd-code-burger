import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import paths from '../constantes/paths'
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
        <Route component={Login} path={paths.login} />
        <Route component={Register} exact path={paths.register} />
        <PrivateRoute component={Home} exact path={paths.home} />
        <PrivateRoute component={Products} exact path={paths.products} />
        <PrivateRoute component={Cart} exact path={paths.cart} />

        <PrivateRoute component={Admin} exact path={paths.order} isAdmin />
        <PrivateRoute
          component={Admin}
          exact
          path={paths.Listproducts}
          isAdmin
        />
      </Switch>
    </Router>
  )
}
