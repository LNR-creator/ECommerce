import React,{ useState } from 'react'
import Home from './pages/Home'
import { Routes,Route } from "react-router-dom";
import { HashRouter } from "react-router-dom";
import CartPage from './pages/CartPage';

const App = () => {

  const [cartOpen,setCartOpen] = useState(false);

  return (
    <div>
      
<HashRouter>
      <Routes>
        <Route  path="/Cart" element={<CartPage />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>
      </HashRouter>
    </div>
  )
}

export default App
