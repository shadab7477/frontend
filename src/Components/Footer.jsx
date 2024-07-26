import React from 'react';
// import './Footer.css'; // Make sure you have the appropriate CSS file
import logo from "../img/logo.webp"
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className=" mb-5">
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: "#ECEFF1" }}>
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: "rgb(198,168,125)" }}>
          <div className="me-5 fs-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
<img src={logo} height="130px" alt="" />
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p className="fs-5" >
                Artistic Brilliance, Unleashed in Colors.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">LINKS</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                  <Link to={"/"} className="text-dark text-decoration-none ">Home</Link>
                </p>
                <p>
                  <Link to={"/shop"} className="text-dark  text-decoration-none ">Shop</Link>
                </p>
                <p>
                  <Link to={"/aboutus"} className="text-dark  text-decoration-none ">About-us</Link>
                </p>
                <p>
                <Link to={"/contactus"} className="text-dark  text-decoration-none ">Contact-us</Link>

                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p>
                  <Link to={"/"}  className="text-dark  text-decoration-none ">Resin art</Link>
                </p>
                <p>
                  <Link to={"/"}  className="text-dark  text-decoration-none ">Candle making</Link>
                </p>
                <p>
                  <Link to={"/"}  className="text-dark  text-decoration-none ">Painting colors</Link>
                </p>
                <p>
                  <Link to={"/"}  className="text-dark  text-decoration-none ">Pigments</Link>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }}
                />
                <p><i className="fas fa-home mr-3"></i> Shop Number 1, 107, Tilak Nagar Extension, Vandana Nagar, Indore, Madhya Pradesh 452018</p>
                <p><i className="fas fa-envelope mr-3"></i> info@artsupplyindore.com</p>
                <p><i className="fas fa-phone mr-3"></i> +91 7987574121</p>
                <p><i className="fas fa-phone mr-3"></i> +91 7024095100</p>

                {/* <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p> */}
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright:

      <a class="text-dark" href="https://mdbootstrap.com/"
         >Freelancer IT services</a
        >
    </div>
  </footer>
{/* </div> */}
      
    </div>
  )
}

export default Footer
