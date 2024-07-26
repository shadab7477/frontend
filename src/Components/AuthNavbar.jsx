import React from 'react'
import "./authnav.css"
import logo from "../img/logo.webp"

const AuthNavbar = () => {
  return (<>
    <nav class="navbar navbar-expand-lg navbar-light bg-white min-h-20">
    <div class="container-fluid">
    <div class="panellogo d-flex align-items-center ps-3  text-decoration-none     ">
      <img src={logo} height="80px" />
                    {/* <span class="fs-3 d-none d-sm-inline fw-bold rounded-pill text-center  p-1 ">Admin pannel</span> */}
                </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              {/* <li><hr class="dropdown-divider"></li> */}
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  </>
    // <h1 className=' text-center' >ADMIN DASHBOARD </h1>
  )
}

export default AuthNavbar
