import React,{ useState } from 'react'
import Home from './pages/Home'
import { Routes,Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import CartPage from './pages/CartPage';
import ProductCard from './components/ProductCard'
import Products from './data/products'

const App = () => {
 const [cart,setcart] = useState([]);

  const handlecart = (id) =>{
    console.log("clicked",id);
    setcart(prev => [...prev,id]);
  };

  return (
    <div>
      
<HashRouter>
      <Routes>
        <Route  path="/Cart" element={<CartPage cart={cart}  products={Products}/>}/>
        <Route  path="/" element={<Home handlecart={handlecart} />}/>
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App
