import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { UseCart } from '../../hooks/CartContext'
import { apiCodeBurgue } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'
import Button from '../Button'
import { Container, ContainerItems, ContainerItemsBottom } from './styled'

export function CartResume() {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(5)
  const { cartProducts } = UseCart()

  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cartProducts.map(product => {
      return { id: product.id, quantity: product.quantity }
    })

    await toast.promise(apiCodeBurgue.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido...',
      success: 'Pedido realizando com sucesso',
      error: '😥 Falha ao tentar realizar seu pedido, tente novamente '
    })
  }

  return (
    <div>
      <Container>
        <ContainerItems>
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tax">Taxa de entrega</p>
          <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
        </ContainerItems>
        <ContainerItemsBottom>
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </ContainerItemsBottom>
      </Container>
      <Button
        style={{ width: '100%', marginTop: 30, height: 48 }}
        onClick={submitOrder}
      >
        Finalizar pedido
      </Button>
    </div>
  )
}
