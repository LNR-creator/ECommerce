import React, { useState } from 'react'
import '../styles/HomePagePart.css'
import SideBar from '../components/SideBar'
import ProductList from '../components/ProductList'

const HomePagePart = ({ products,handlecart }) => {

  const [filters,setFilters] = useState({
  category : "all",
  curr_price : "all",
  color : "all",
  rating : "all"
});

  return (
    <div>
       <div className="layout">
            <div className="categories">
              <SideBar filters={filters} setFilters={setFilters} />
            </div>

            <div className="products">
                <div className="list">
                   <ProductList products={products}  filters={filters} handlecart={handlecart} />
                </div>
            </div>
       </div>
    </div>
  )
}

export default HomePagePart
