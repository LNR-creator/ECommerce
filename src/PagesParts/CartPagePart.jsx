import React from 'react'
import '../styles/CartLayout.css'

const CartPagePart = ({ cart,setCart, products }) => {

  // const [count,setcount] = useState(0);
  const getQuantity = (id) => {
    return cart.filter(item => item === id).length;
  };

  const totalPrice = cart.reduce((total,id)=>{
    const product = products.find(p => p.id === id);
    if(!product) return total;
    return total + product.curr_price;
  },0);

  return (
    <div className="cart-layout">

      <div className="orders">
        <h1>MY CART</h1>
        {cart.length === 0 && <h3> Your cart is empty</h3>}
        {cart.map((id, index) => {
          const product = products.find(p => p.id === id);
          if (!product) return null;
          return (
            <div className="order-1" key={index}>
              <div className="img">
                <img id='cart-order-img' src={product.image} alt={product.name}/>
              </div>

              <div className="product-details">
                <div className="product-name">{product.name}</div>
                <div className="price">₹{product.curr_price}</div>

                <div className="add-remove-btns-">
                    <button
                      className='product-incre'
                      onClick={() => {
                        const itemIndex = cart.findIndex((item) => item === id);
                        if (itemIndex !== -1) {
                          const newCart = cart.filter((item, i) => i !== itemIndex);
                          setCart(newCart);
                        }
                      }}
                    >-</button>

                    <span>{getQuantity(id)}</span>

                    <button
                      className='product-decre'
                      onClick={() => {
                        setCart([...cart, id]);
                      }}
                    >+</button>

                    <button
                      className='remove-btn'
                      onClick={() => {
                        const newCart = cart.filter((item, i) => i !== index);
                        setCart(newCart);
                      }}
                    >Remove</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      
                <div className="summary">
            <div className="order-summary">
               
                <div className="total">
                   <h1>Total</h1>

                <p>₹ {totalPrice}</p>
                </div>

                <div className="order-btn">
                    <button type="button" id='order-btn'>Order</button>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default CartPagePart
