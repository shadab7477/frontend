import React from 'react'
import "./Stickynav.css"
const Stickynav = () => {
  return (
    <>   
    <footer className="sticky-footer p-0 m-0">
  <nav className="nav justify-content-center m-0 p-0 ">
    <a className="nav-item nav-link text-black "><i className="fas fa-home d-block fs-4 " />
     Home</a>
    <a className="nav-item nav-link text-black "><i className="fas fa-store d-block fs-4 " /> Shop</a>
    <a className="nav-item nav-link text-black "><i className="fas fa-envelope d-block fs-4 " /> Contact</a>
    <a className="nav-item nav-link text-black "><i className="fa-solid fa-cart-shopping d-block fs-4 " /> Cart</a>

  </nav>
</footer>

      </>
  )
}

export default Stickynav
