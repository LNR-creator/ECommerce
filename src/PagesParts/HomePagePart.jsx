import React, { useState,useEffect } from 'react'
import '../styles/HomePagePart.css'
import SideBar from '../components/SideBar'
import ProductList from '../components/ProductList'

const HomePagePart = ({ products, category, handlecart }) => {

  const [filters,setFilters] = useState({
  category : "all",
  curr_price : "all",
  color : "all",
  rating : "all"
});

  useEffect(() => {
    if (category === "All") {
      setFilters((prev) => ({ ...prev, category: "all" }));
    } else {
      setFilters((prev) => ({ ...prev, category: category }));
    }
  }, [category]);

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
