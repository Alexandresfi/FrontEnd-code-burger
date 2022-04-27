import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/home/category.png'
import { apiCodeBurgue } from '../../services/api'
import { Container, CategoryImg, ContainerItems, Button, Image } from './styles'

export function CategoryCarrousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurgue.get('categories')
      setCategories(data)
      // console.log(data)
    }
    loadCategories()
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
      <CategoryImg src={Category} alt="banner" />
      <Carousel
        itemsToShow={5}
        style={{ width: '90vw' }}
        breakPoints={breakpoints}
      >
        {categories?.map((item, index) => (
          <ContainerItems key={index}>
            <Image src={item.url} alt={item.name} />
            <Button>{item.name}</Button>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}
