import React from 'react'
import '../styles/CartLayout.css'
import img from '../assets/images/headphones.webp'

const CartPagePart = () => {
  return (
    <div>
      <div className="cart-layout">
        <div className="orders">
          <h1>MY CART</h1>
          <br />
          <div className="order-1">
            <div className="img">
              <img className='abcd' src={img}/>
            </div>
            
            <div className="product-details">
              <div className="product-name">Wired Headphones</div>
            </div>
          </div>

            <div className="order-1">
            <div className="img">
              <img className='abcd' src={img}/>
            </div>
            
            <div className="product-details">
              <div className="product-name">Wired Headphones</div>
            </div>
          </div>

           <div className="order-1">
            <div className="img">
              <img className='abcd' src={img}/>
            </div>
            
            <div className="product-details">
              <div className="product-name">Wired Headphones</div>
            </div>
          </div>
        </div>
        <div className="summary">
            <div className="order-summary">
               
                <div className="total">
                   <h1>Total</h1>

                <p>₹1,000</p>
                </div>

                <div className="order-btn">
                    <button type="button" id='order-btn'>Order</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPagePart
