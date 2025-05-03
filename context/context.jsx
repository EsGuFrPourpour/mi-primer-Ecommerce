"use client"

import { createContext, useContext, useState } from "react"

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const ContextProvider = (props) => {
  const [cart, setCart] = useState([])

  function addToCart(products, cant = 1) {
    if (cart.some((prod) => prod.id === products.id)) {
      const newCart = cart.map((prod) => {
        if (prod.id === products.id) {
          return {
            ...prod,
            cant: prod.cant + cant,
          }
        }
        return prod
      })
      setCart(newCart)
    } else {
      const newProd = {
        ...products,
        cant,
      }
      setCart([...cart, newProd])
    }
  }

  function clearCart() {
    setCart([])
  }

  function removeFromCart(productId) {
    const newCart = cart.filter((product) => product.id !== productId)
    setCart(newCart)
  }

  return (
    <AppContext.Provider value={{ cart, addToCart, clearCart, removeFromCart }}>{props.children}</AppContext.Provider>
  )
}
