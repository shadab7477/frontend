import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ham from "../img/hamburg.png"

import logo from '../img/logo.webp';
import cart from '../icons/shopping-cart.png';
import { useAuth } from '../Authcontext';
import './Navbar.css';

const Navbar = () => {
  const { token } = useAuth();
  const [visible, setVisible] = useState(false); // State to track visibility of search input
  const [val, setVal] = useState('');

  const navigate = useNavigate();

  const get = (e) => {
    setVal(e.target.value);
  };

  const handleSearch = () => {
    if (val) {
      navigate(`/search/${val}`);
      setVal('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const toggleSearchInput = () => {
    setVisible(!visible);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} height="80px"  alt="" />
          </a>
{/* 
          <div className="search-container ms-auto">
            <input
              onChange={get}
              type="text"
              onKeyDown={handleKeyDown}
              className={`search-input ${visible ? 'visible' : ''}`}
              placeholder="Search movies..."
            />
            <svg
              style={{ cursor: 'pointer' }}
              onClick={handleSearch}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-search ms-auto text-dark me-md-4"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div> */}

  <ul id="mobieshow" className="mobishow d-md-none d-block d-flex gap-1 justify-content-end align-items-end">
    <li className="">
      <Link className="link" to={"/cart"}>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-bag navicon me-1" viewBox="0 0 16 16">
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
        </svg>
      </Link>
    </li>

    <li className="item">
      <div className="dropdown userdrop link">
        <a href="#" className="dropdown-toggle userdrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person navicon" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
        </a>
        <ul className="dropdown-menu p-2">
          {token ? (
            <>
              <li className="nav-item text-decoration-none"><Link className="text-decoration-none" to={"/signup"}>Signup</Link></li>
              <li className="nav-item"><Link className="text-decoration-none" to={"/login"}>Login</Link></li>
            </>
          ) : (
            <>
              <li><a href="#">My account</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Logout</a></li>
            </>
          )}
          <li role="separator" className="divider"></li>
          <li><a href="#">One more separated link</a></li>
        </ul>
      </div>
    </li>
  </ul>

<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon">

        <img id='ham' src={ham} alt="" />
      </span>
    </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-center">
              <ul className="navbar-nav justify-content-md-end gap-3 flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to={"/"} id="navlink" className="nav-link navlink " aria-current="page" href="#">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={"/shop"} id="navlink" className="nav-link  navlink" href="#">Shop</Link>
                </li>


                <li className="nav-item">
                  <Link id="navlink" to={"/aboutus"} className="nav-link  navlink" >About Us</Link>
                </li>

                <li className="nav-item">
                  <Link to={"/blog"} id="navlink" className="nav-link  navlink" href="#">Blog</Link>
                </li>


                <li className="nav-item">
                  <Link to={"/contactus"} id="navlink" className="nav-link  navlink" href="#">Contact</Link>
                </li>

{/* 

                <li className="nav-item">
                  <a id="navlink" className="nav-link  navlink" href="#">Contact</a>
                </li>
{/* 
                <li className="nav-item dropdown">
                  <a id="navlink" className="nav-link  navlink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                  {token ? (
                      <>
                        <li><a href="#">Signup</a></li>
                        <li><a href="#">Login</a></li>
                      </>
                    ) :
                     (
                      <>
                        <li><Link to={"/user"} href="#">My account</Link></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Logout</a></li>
                      </>
                    )}
                  </ul>
                </li> */}
              </ul>


              <ul className="navbar-nav gap-3 mt-2 mt-md-0 justify-content-md-end flex-grow-1">



              <li className="nav-item justify-content-center text-end">

              <div className="search-container d-flex justify-content-center text-center ">
            <input
              onChange={get}
              type="text"
              onKeyDown={handleKeyDown}
              className={`search-input ${visible ? 'visible' : ''}`}
              placeholder="Search movies..."
              style={{ display: visible ? 'block' : 'none' }}
            />
            <svg
              style={{ cursor: 'pointer' }}
              onClick={toggleSearchInput}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-search  navicon me-1 mt-1"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </div>




</li>


              <li className="nav-item">


              <Link className="nav-link" to={"/wishlist"} >

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart navicon mt-1" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>

</Link>
</li>


<li className="nav-item hide-mobile">

<Link className="nav-link" to={"/cart"} >

<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bag navicon me-1" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
</Link>
</li>


                <li className="nav-item">

                <ul class="nav navbar-nav">
        <li class="dropdown userdrop ">
          <a href="#" class="dropdown-toggle userdrop" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">

          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person navicon" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
          </a>
          <ul id="hide" class="dropdown-menu p-2 hide-mobile ">
          {token ? (
                                  <>
                                  <li><Link to="/user" className="text-decoration-none text-dark" >My account</Link></li>
                                  <li role ="separator" className="divider"></li>
                                  {/* <li><Link className="text-decoration-none b " >Logout</Link></li> */}
                                </>
          
                    ) :
                     (



<>
<li className="nav-item text-decoration-none "  ><Link className="text-decoration-none text-dark" to={"/signup"}>Signup</Link></li>
<li className="nav-item"><Link className="text-decoration-none text-dark " to={"/login"}>Login</Link></li>
</>
                    )}
              

          </ul>
        </li>
      </ul>

                  </li>
                  </ul>

              {/* <ul className="navbar-nav justify-content-end ">
                <li className="nav-item">
                  <a id="navlink" className="nav-link navlink " aria-current="page" href="#">
              <span className="logout   navsignupbtn  ">Signup</span>

                  </a>
                </li>
                </ul> */}

            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
