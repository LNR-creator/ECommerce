import ProductList from '../components/ProductList'
import products from '../data/products'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/Home.css'
import '../styles/ALL.css'
import HomePagePart from '../PagesParts/HomePagePart'

const Home = () => {

  return (
    <>
    <div className='Navbar'>
     <Navbar />
     </div>

     <div className="HomePagePart">
     <HomePagePart products={products}  />
     </div>

     <div className="footer">
      <Footer />
     </div>
    </>
  );
}

export default Home
