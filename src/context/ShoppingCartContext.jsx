import { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {

  const [cart, setCart] = useState([])
  const [navActive, setActive] = useState("Home")

  const longitud = cart.length

  return (

    <CartContext.Provider value={{ cart, setCart, longitud, navActive, setActive }}>

      {children}


    </CartContext.Provider>

  )
}

export default ShoppingCartProvider
