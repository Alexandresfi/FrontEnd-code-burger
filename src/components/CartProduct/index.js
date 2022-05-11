import React from 'react'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import { UseCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import Button from '../Button'
import { Container, Content, Image, ProductName, ProductPrice } from './styles'

export function CartProduct({ product }) {
  const { putProductInCart } = UseCart()
  const { push } = useHistory()
  return (
    <Container>
      <Image src={product.url} alt=" imagem do produto" />
      <Content>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </Content>
    </Container>
  )
}

CartProduct.propTypes = {
  product: PropTypes.object
}
