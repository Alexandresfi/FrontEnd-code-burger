import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Offers from '../../assets/home/offers.png'
import { apiCodeBurgue } from '../../services/api'
import { formatCurrency } from '../../utils/formatCurrency'
import {
  Container,
  CategoryImg,
  ContainerItems,
  Button,
  Image,
  P
} from './styles'

export function OffersCarrousel() {
  const [offers, setOffers] = useState([])
  useEffect(() => {
    async function loadOffers() {
      const { data } = await apiCodeBurgue.get('/products')
      const onlyoffers = data.filter(product => product.offer)
      setOffers(onlyoffers)
    }
    loadOffers()
  }, [])

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={Offers} alt="banner" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90vw' }}
        breakPoints={breakpoints}
      >
        {offers?.map((product, index) => (
          <ContainerItems key={index}>
            <Image src={product.url} alt={product.name} />
            <P>{product.name}</P>
            <P price={true}>{formatCurrency(product.price)}</P>
            <Button>Peça agora</Button>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}
