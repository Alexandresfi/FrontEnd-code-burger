import React, { createContext, useContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async products => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(products))
  }

  const putProductInCart = async product => {
    const cartIndex = cartProducts.findIndex(prd => prd.id === product.id) // estamos verificando se este produto já existe dentro de cartProduct
    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1
      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }
    await updateLocalStorage(newCartProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cartProducts.filter(product => product.id !== productId)
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const increasseProducts = async productId => {
    const newCart = cartProducts.map(product => {
      return product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })
    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreasseProducts = async productId => {
    const cartIndex = cartProducts.findIndex(pd => pd.id === productId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map(product => {
        return product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProducts(productId)
    }
  }

  useEffect(() => {
    const loadCartData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')
      if (clientCartData) {
        setCartProducts(JSON.parse(clientCartData))
      }
    }
    loadCartData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductInCart,
        cartProducts,
        increasseProducts,
        decreasseProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const UseCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be useed uCartUserContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
