import React from 'react'

import BannerHome from '../../assets/home/banner-home.png'
import { CategoryCarrousel } from '../../components/CategoryCarrousel'
import { OffersCarrousel } from '../../components/OffersCarrousel'
import { Container, ImgBanner } from './styled'

export function Home() {
  return (
    <Container>
      <ImgBanner src={BannerHome} alt="banner" />
      <CategoryCarrousel />
      <OffersCarrousel />
    </Container>
  )
}
