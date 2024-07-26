// Sidebar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./sidebar.css"
import * as Icon from 'react-bootstrap-icons';
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = () => {
    const location = useLocation();

  return (<>
  
        <div class=" sidebar ">
            <div class="d-flex flex-column align-items-center align-items-sm-start  text-white min-vh-100">
               
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start py-4 w-100 " id="menu">
              <p className="text-secondary" >MAIN MENU</p>
                    <li class="nav-item">
                        <Link to={"/admin"}   class="nav-link align-middle px-0">
                            <i class="fs-5 bi-house"></i> <span className={location.pathname === "/admin" ? " pb-4 text-dark  " : " ms-1 d-none   d-sm-inline text-primary"} >DASHBOARD</span>
                        </Link>

                        
                    <li>
                        <Link to={"/users"} class="nav-link align-middle px-0" >
                            <i class="fs-5 text-primary bi-people"></i> <span  className={location.pathname === "/users" ? " text-dark fw-normal " : " ms-1 d-none text-primary fw-lighter d-sm-inline "}  >Users</span> </Link>
                        
                    </li>
                    <hr className='text-dark w-100 bg-black' />

                    </li>


                    <p className="text-secondary text-uppercase " >products</p>

                    <li>
                        <Link to={"/products"} href="#" class="nav-link px-0 align-middle">
                            <i class="fs-5 bi-table"></i> <Link to={"/products"}  className={location.pathname === "/products" ? " text-dark fw-normal " : " ms-1 d-none text-primary  d-sm-inline "} >Products</Link></Link>
                    </li>
                    {/* <Link to={"/uploadcate"}>
                        <a href="#submenu2" class="nav-link px-0 align-middle ">
                            <i class="fs-5 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Bootstrap</span>
                            </a>
                        
                    </Link> */}
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-5 bi-grid"></i> <span class="ms-1 d-none d-sm-inline">Category</span> </a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-100">
                                <Link to={"/showcategory"} class="nav-link px-0"> <span class="d-none d-sm-inline">Category</span></Link>
                            </li>
                            <li>
                                <Link to={"/showsubcategory"} class="nav-link px-0"> <span class="d-none d-sm-inline">Sub-category</span></Link>
                            </li>
                            
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-5 bi-people"></i> <Link to={"/Addcolor"} class="ms-1 d-none d-sm-inline">Add colors</Link> </a>
                    </li>

                    
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-5 bi-people"></i> <Link to={"/Addstock"} class="ms-1 d-none d-sm-inline">Add stock</Link> </a>
                    </li>
                </ul>
                <hr/>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle"/> */}
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>

    </>
  );
};

export default Sidebar;
