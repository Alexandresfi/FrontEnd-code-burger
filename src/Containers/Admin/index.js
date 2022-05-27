import React from 'react'

import PropTypes from 'prop-types'

import { SideMenuAdmin } from '../../components/SideMenuAdmin'
import paths from '../../constantes/paths'
import { ListProducts } from './ListProducts'
import { Orders } from './Orders'
import { Container } from './styles'

export function Admin({ match: { path } }) {
  return (
    <Container>
      <SideMenuAdmin />
      {path === paths.order && <Orders />}
      {path === paths.Listproducts && <ListProducts />}
    </Container>
  )
}

Admin.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string
  })
}
