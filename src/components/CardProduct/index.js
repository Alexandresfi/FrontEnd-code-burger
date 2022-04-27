import React from 'react'

import PropTypes from 'prop-types'

import Button from '../../components/Button'
import { formatCurrency } from '../../utils/formatCurrency'
import { Container, Content, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  return (
    <Container>
      <Image src={product.url} alt=" imagem do produto" />
      <Content>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button>Adicionar</Button>
      </Content>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
