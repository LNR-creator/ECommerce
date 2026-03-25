import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CartPagePart from '../PagesParts/CartPagePart'

const CartPage = ({cart,products}) => {
  const [cartItem,setCartItem] = useState(cart);
  return (
    <div>
      <Navbar />
      <CartPagePart cart={cartItem}  setCart={setCartItem} products={products}/>
    </div>
  )
}

export default CartPage
