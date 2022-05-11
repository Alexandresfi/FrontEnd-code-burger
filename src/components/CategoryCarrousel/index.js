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
        {categories?.map(category => (
          <ContainerItems key={category.id}>
            <Image src={category.url} alt={category.name} />
            <Button
              to={{
                pathname: '/produtos',
                state: { categoryId: category.id }
              }}
            >
              {category.name}
            </Button>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  )
}
