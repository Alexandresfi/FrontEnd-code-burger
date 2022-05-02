import React from 'react'

import { UseCart } from '../../hooks/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Body, Container, EmptyCart, Header } from './styled'

export function CartItems() {
  const { cartProducts, increasseProducts, decreasseProducts } = UseCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 30 }}>Quantidade</p>
        <p>Total</p>
      </Header>
      {cartProducts && cartProducts.length > 0 ? (
        cartProducts.map(product => (
          <Body key={product.id}>
            <img src={product.url} alt={product.name} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>
            <div>
              <button onClick={() => decreasseProducts(product.id)}>-</button>
              <p>{product.quantity}</p>
              <button onClick={() => increasseProducts(product.id)}>+</button>
            </div>
            <p>{formatCurrency(product.quantity * product.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho Vazio</EmptyCart>
      )}
    </Container>
  )
}
