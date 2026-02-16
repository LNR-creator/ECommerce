import React from 'react'
import '../styles/ProductCard.css'

const ProductCard = ({product}) => {
  return (
    <div className='product-card'>
      <div className='product-img'>
        <img className='pro-img' src={product.image}/>
        </div>
      <div className="product-name">
        {product.name}
      </div>

    <div className="rating-box">
      <div className="rating">{product.rating}★</div>
    </div>

      <div className="Prices">
        <div className="old-price">
        {product.price}
        </div>
        <span className='new-price'>{product.curr_price}</span>
      </div>

    <div className="buy-btn">
      <button type="button" id='cart-btn'>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard
