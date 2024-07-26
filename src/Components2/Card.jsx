import React from 'react'
import { useDispatch } from 'react-redux';
import "./card.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { addToWishlist } from '../actions/wishlistActions';
import { Link } from 'react-router-dom'
import axios from "axios"
const Card = ({product}) => {
    
    const dispatch = useDispatch();
    const [wishlistAdded, setWishlistAdded] = useState(false);

    const handleAddToWishlist = () => {
      console.log(product._id);
      dispatch(addToWishlist(product._id));
      setWishlistAdded(!wishlistAdded); // toggle wishlistAdded state
    };

    
    const [modalProduct, setModalProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = (product) => {
      setModalProduct(product);
      setShowModal(true);
    };
    console.log(product.image)
  
    const handleCloseModal = () => {
      setShowModal(false);
      setModalProduct(null);
    };

    
  const getToken = () => {
    // Get the token from local storage or wherever you store it
    return localStorage.getItem('token');
  };
  const CartHandler = async (productId) => {
    console.log(productId)
    try {

        
const token = getToken();
console.log(token)
const headers = {
  'x-auth-token': token, // Match the token in the middleware
  'Content-Type': 'application/json'
};
      const response = await axios.post('http://localhost:9000/cart/add', { productId }, { headers });
      console.log('Item added to cart:', response.data);
      // Optionally, you can show a success message or update state to reflect the cart status
    } catch (error) {
      console.error('Error adding item to cart:', error);
      // Handle error, show error message, etc.
    }
  };
  return (
    <>
                            <Link to={`/shop/${product._id}`} className='col-md-3  p-0 text-dark m-0 text-decoration-none '  key={product._id}>
                            <div class="product__item bg-white p-0 ">
                                        <div height="100px" class="product__item__pic set-bg p-0 m-0" data-setbg="img/product/product-1.jpg">
                                            <div class="label new">BEST</div>
                        <img className="w-100" max-height="100px"
                                      src={`http://localhost:9000/product/${product.image}`}
                        
                         alt="" />
                                    
                                            <ul class="product__hover">
                                                <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleOpenModal(product); }}>
                  <i className="fa-solid fa-eye"></i>
                </a>
              </li>
                                             <li><a>   <i class="fa-solid fa-cart-shopping"></i></a></li>
                                                <li><a onClick={handleAddToWishlist}><i className={`fa-regular fa-heart text-danger fs-4 pt-1 ${wishlistAdded ? 'fas' : 'far'}`}></i>
                                                </a>
                                                
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text ">
                                            <h6><div className="text-dark text-center" >{product.name}</div></h6>
                                            
                                            <div class="product__price text-center "> {product.price} rs</div>

      {/* <ProductModal show={show} handleClose={handleClose} product={product} /> */}
      </div>

                                        </div>
                                    </Link>
                


                                
      {showModal && modalProduct && (
        <div className="modal" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* <h5 className="modal-title">{modalProduct.name}</h5> */}
                <div  className="close" onClick={handleCloseModal}>
                  <span className="fs-2" >&times;</span>
                </div>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    {/* {console.log(http://localhost:9000/uploads/${modalProduct.image}`)} */}
                    <img className=' img-fluid '
                  src={`http://localhost:9000/product/${modalProduct.image}`}
                  />
                  </div>
                  <div className="col-md-6">
                 
                 <h3> {modalProduct.name} </h3>
                 <div class="product__details__price fs-1">₹ {modalProduct.price} 
                        {/* <span>$ 83.0</span> */}
                        </div>
                        
                        <span className='fs-4 descripti' >
                            {modalProduct.description}
                        </span>
<p className="fs-5" > <span className="fw-bold text-dark " >Weight</span> : {modalProduct.weight}</p>
<div class="container1 mt-4  d-flex">
    <div  class="btn1 shake "  >
        <span onClick={() => CartHandler(modalProduct._id)} >Add to cart 
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4 pb-1 ps-1" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg> </span>
</div>   

    </div>

                  </div>
                </div>

              </div>
              <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button> */}
              </div>
            </div>
          </div>
        </div>)}
                            </>
  )
}

export default Card
