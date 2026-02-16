import React from 'react'
import ProductCard from './ProductCard'
import '../styles/ProductList.css'
import '../styles/ALL.css'

const ProductList = ({ products = [], filters }) => {
  const filteredProducts = products.filter(p => {
    if (!filters) return true;

    if (filters.category !== "all" && p.category !== filters.category)
      return false;

    if (filters.color !== "all" && p.color !== filters.color)
      return false;

    if (filters.curr_price === "under1000" && p.curr_price >= 1000)
      return false;

    if (filters.curr_price === "1000-2000" && (p.curr_price < 1000 || p.curr_price > 2000))
      return false;

    if (filters.curr_price === "2000-3000" && (p.curr_price < 2000 || p.curr_price > 3000))
      return false;

    if (filters.curr_price === "above3000" && p.curr_price >= 3000)
      return false;

    if (filters.rating !== "all" && p.rating < Number(filters.rating))
      return false;

    return true;
  });

  return (
    <div className='product-list'>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
