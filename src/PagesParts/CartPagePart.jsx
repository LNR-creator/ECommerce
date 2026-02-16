import React from 'react'
import '../styles/CartLayout.css'

const CartPagePart = () => {
  return (
    <div>
      <div className="cart-layout">
        <div className="orders">
          <div className="order-1">
            <div className="img">
              <img alt="" />
            </div>
          </div>


        </div>
        <div className="summary">
            <div className="order-summary">
                <h1>Total</h1>

                <div className="total">
                <p>₹1,000</p>
                </div>

                <div className="order-btn">
                    <button type="button">Order</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CartPagePart
