import ProductList from '../components/ProductList'
import products from '../data/products'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import '../styles/ALL.css'
import HomePagePart from '../PagesParts/HomePagePart'
import { useState } from 'react'

const Home = ({handlecart}) => {
 
  const [category,setcategory] = useState("All");
  return (
    <>
    <div className='Navbar'>
     <Navbar />
     </div>

     {/* Hero section */}
      <div className="hero-section">
      <div className="first">
    <h1>Shop the Latest Trends</h1>
    <br /><br />
    <h1>Discover electronics,clothing,and accessories at the best price</h1>
    <div className="btns">
    <button type="button">SHOP NOW</button>
    </div>
      </div>
      <div className="second">
      </div>
      </div>

    {/* Categories  */}

    <div className="Categories">
      <ul>
        <li onClick={() => setcategory("All")}>All</li>
        <li onClick={() => setcategory("Electronics")}>Electronics</li>
        <li onClick={() => setcategory("Bag")}>Bags</li>
        <li onClick={() => setcategory("Clothing")}>Clothing</li>
        <li onClick={() => setcategory("Footwear")}>Footwear</li>
        <li onClick={() => setcategory("Accessories")}>Accessories</li>
      </ul>
    </div>



     <div className="HomePagePart">
     <HomePagePart products={products} category={category}  handlecart={handlecart}/>
     </div>

     <div className="footer">
      <Footer />
     </div>
    </>
  );
}

export default Home
