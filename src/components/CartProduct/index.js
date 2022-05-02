import React from 'react'

import PropTypes from 'prop-types'

import { UseCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import Button from '../Button'
import { Container, Content, Image, ProductName, ProductPrice } from './styles'

export function CartProduct({ product }) {
  const { putProductInCart } = UseCart()
  return (
    <Container>
      <Image src={product.url} alt=" imagem do produto" />
      <Content>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button onClick={() => putProductInCart(product)}>Adicionar</Button>
      </Content>
    </Container>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object
}
