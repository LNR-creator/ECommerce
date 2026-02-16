import React,{ useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CartPage from './pages/CartPage';

const App = () => {

  const [cartOpen,setCartOpen] = useState(false);

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path="/Cart" element={<CartPage />}/>
        <Route  path="/" element={<Home />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
