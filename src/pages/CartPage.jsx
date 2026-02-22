import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import CartPagePart from '../PagesParts/CartPagePart'

const CartPage = ({cart,products}) => {



  return (
    <div>
      <Navbar />
      <CartPagePart cart={cart} products={products}/>
    </div>
  )
}

export default CartPage
