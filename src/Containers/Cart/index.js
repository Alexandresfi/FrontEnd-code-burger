import React from 'react'

import BannerCart from '../../assets/cart-image.svg'
import { CartItems } from '../../components/CartItems'
import { CartResume } from '../../components/CartResume'
import { Container, ImgCart, Wrapper } from './styled'

export function Cart() {
  return (
    <Container>
      <ImgCart src={BannerCart} alt="banner" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
