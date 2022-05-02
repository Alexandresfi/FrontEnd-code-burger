import React, { useEffect, useState } from 'react'

import ProductsLogo from '../../assets/product-logo.svg'
import { CartProduct } from '../../components/CartProduct'
import { apiCodeBurgue } from '../../services/api'
import {
  Container,
  ImgProduct,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './styled'

export function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await apiCodeBurgue.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]
      setCategories(newCategories)
    }

    async function loadProducts() {
      const { data } = await apiCodeBurgue.get('products')
      setProducts(data)
    }

    loadCategories()
    loadProducts()
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setFilteredProducts(products)
    } else {
      const newFilteredProducts = products.filter(
        product => product.category_id === activeCategory
      )
      setFilteredProducts(newFilteredProducts)
    }
  }, [activeCategory, products])
  return (
    <Container>
      <ImgProduct src={ProductsLogo} alt="logo products" />
      <CategoriesMenu>
        {categories?.map(category => (
          <CategoryButton
            type="button"
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            isActiveCategory={activeCategory === category.id}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoriesMenu>
      <ProductsContainer>
        {filteredProducts?.map(product => (
          <CartProduct key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  )
}
