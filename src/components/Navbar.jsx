import React from 'react'
import logo from '../assets/images/logo1.png'
import '../styles/Navbar.css'

import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink ,Link} from "react-router-dom";

const Navbar = ({openCart}) => {
  return (
    <div>
      <header>
    <div className='navbar-logo-container'>
      <Link to='/'>
        <img  src={logo} className='navbar-logo' alt="" />
      </Link>
    </div>
   

    <nav className="nav-links">
        <div className="nav-inner">
              {/* <div className="profile">
                <a href=""><CgProfile /></a>
              </div>
               <sup id='cart-no'>10</sup>
              <div className="cart">
                <a href=""><FaCartShopping /></a>
              </div> */}

              <div className="start">
                <div className="Filter">
                  Filters
                </div>
              </div>

              <div className="end">
                <NavLink to="/Profile">
                <div className="Profile">
                  <CgProfile />
                </div>
                </NavLink>

                <Link to='/cart'>
                <div className="cart" onClick={openCart}>
                  <FaCartShopping />
                </div>
                </Link>
                

              </div>
        </div>
    </nav>
     </header>
    </div>
  )
}

export default Navbar
