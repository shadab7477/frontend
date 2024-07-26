import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { addToWishlist } from '../actions/wishlistActions';
import ReactImageMagnify from 'react-image-magnify';
import "./Singleproduct.css"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from '../Authcontext'
import Card from './Card'
import {useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
const Singleproduct = () => {
    const {token}=useAuth()
console.log(token)
    const dispatch = useDispatch();
    const [wishlistAdded, setWishlistAdded] = useState(false);
const navigate=useNavigate()
    const handleAddToWishlist = () => {
      console.log(products._id);
      dispatch(addToWishlist(products._id));
      setWishlistAdded(!wishlistAdded); // toggle wishlistAdded state
    };
// const product="668fa42ee1ada706c7079f4f"
    const {product}=useParams()
    // console.log(product);
    const [products, setProduct] = useState(['']);
    const [loading, setLoading] = useState(true);
    const [relatedProducts, setRelatedProducts] = useState([]);
// console.log(relatedProducts)
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/product/${product}`);
        window.scrollTo({ top: 0, behavior: 'smooth' })
                
            //    console.log(response.data);
               setProduct(response.data)
                // setLoading(false);
            } catch (error) {
                console.log(error)
                // setError(error.response ? error.response.data.message : 'Error fetching product');
                // setLoading(false);
            }
        };

        



        const fetchRelatedProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:9000/products/${product}/related`);
                setRelatedProducts(response.data);
            } catch (err) {
                console.error('Error fetching related products:', err);
            }
        };

        fetchRelatedProducts();
        fetchProduct();
    }, [product]);
    const imgsrc=`http://localhost:9000/product/${products.image}`


    const getToken = () => {
        // Get the token from local storage or wherever you store it
        return localStorage.getItem('token');
      };

      console.log(token)
    const CartHandler = async (productId) => {
        console.log(productId)
        try {

            
    const token = getToken();
   if(token){
    const headers = {
      'x-auth-token': token, // Match the token in the middleware
      'Content-Type': 'application/json'
    };
          const responsee = await axios.post('http://localhost:9000/cart/add', { productId }, { headers });
          console.log('Item added to cart:', responsee.data);
          toast.success('Added successfully to the cart ')

}else{
}
        } catch (error) {
          console.error('Error adding item to cart:', error);
    navigate("/signup")

          // Handle error, show error message, etc.
        }
      };

    // console.log(products)
  return (
 <>
 {/* <div className='container' >
    <h1>{products.name} </h1>
        </div>  */}

        
    
    {/*  Breadcrumb End  */}

    <section class="product-detai ">
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
            {/*  Breadcrumb Begin  */}<div  aria-label="breadcrumb">
  <ol class="breadcrumb  container text-dark p-4 text-uppercase fs-5 mt-4 ">
    <li class="breadcrumb-item  "><Link to={'/'} className="text-decoration-none fs-5  text-dark">Home</Link></li>
    <li class="breadcrumb-item text-dark" aria-current="page">Library</li>
  </ol>
</div>

        <div class="container">
            <div class="row">
                <div class="col-lg-6 ">
                    <div class="product__details__pic">
                        <div class="product__details__pic__left product__thumb nice-scroll">
                           
                        </div>
                        <div class="product__details__slider__content w-100">
                            <div class="product__details__pic__slider owl-carousel w-100">
                                <img data-hash="product-1" class="product__big__img w-100 " src="img/product/details/product-1.jpg" alt=""/>
                               
                               <div>
                                <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: imgsrc,
        
        width: "100%",
        height: "100%"
    },
    largeImage: {
        src:imgsrc,
        width: 800,
        height: 800
    },
    enlargedImagePosition:"over"
}} />
                               </div>
                                {/* <img 
                                 class="product__big__img"



                                    src={`http://localhost:9000/uploads/${products.image}`}
                                    alt=""/> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="product__details__text">
                        <h2>{products.name} <span>{products.cat_id}</span></h2>
                       
                        <span class="product__details__price mb-1 fs-1">₹ {products.price} 
                        </span>
                        
                        <hr />
                        <p className='fs-4 description' >
                            {products.description}
                        </p>

<span className="fs-5" > <span className="fw-bold text-dark " >Weight</span> : {products.weight}</span>

                        <div class="product__details__button">
                            <div class="quantity fs-5">
                                <span className='fs-5' >Quantity:</span>
                                <div class="pro-qty">
                                    <input type="text" className='fs-4' value="1"/>
                                </div>
                            </div>


                            <ul><li>
  <div >
    <span onClick={handleAddToWishlist} className="icon_adjust-hori">
      <i className={`fa-regular fa-heart text-danger fs-3 mt-2 ${wishlistAdded ? 'fas' : 'far'}`} />
    </span>
  </div>
</li>
                            </ul>
    

                        </div>
                        
                        <div class="container1 ms-4 d-flex">
    <div  class="btn1 shake "  >
        <span onClick={() => CartHandler(products._id)} >Add to cart 
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart4 pb-1 ps-1" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg> </span>
</div>   

    </div>

                        <div class="product__details__widget">
                            <ul>
                                <li>
                                    <span className="fs-5" >Availability:</span>
                                    <div class="stock__checkbox">
                                        <label for="stockin" className="fs-5">
                                            In Stock
                                            {/* <input type="checkbox" id="stockin"/> */}
                                            {/* <span class="checkmark"></span> */}
                                        </label>
                                    </div>
                                
                                </li>
                                <li className='fs-5' >
                                    <span className='fs-5' >Promotions:</span>
                                    <p>Free shipping</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center justify-content-center ">
                    <div class="product__details__tab text-center justify-content-center  ">
                
                        <nav className="justify-content-center   " >
  <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
    <button class="nav-link active text-dark fs-5 " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Specification</button>
    <button class="nav-link text-dark fs-5" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Description</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">
  <div class="tab-pane fade show active bg-white p-5 " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus aperiam tenetur nam dignissimos voluptatum, enim doloremque exercitationem laboriosam earum porro?

  </div>
  <div class="tab-pane fade" id="nav-profile  bg-white " role="tabpanel" aria-labelledby="nav-profile-tab">

    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta doloribus aliquam magni cupiditate, architecto tempore ipsum reprehenderit deleniti id ad illo harum temporibus excepturi, vitae amet quam et similique expedita tenetur facilis pariatur nesciunt. Eius nam tenetur voluptatum animi amet rerum placeat in numquam laboriosam molestias. Quae esse, a vero quaerat harum atque officiis ipsum?
  </div>
  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
</div>

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center mb-5 ">
                    <div class="related__title">
                        <h2>RELATED PRODUCTS</h2>
                    </div>
                </div>


                <div className="row gap-4 justify-content-center">

                        {relatedProducts.map((product) => (
                        <Card key={product._id} product={product} />
                    
                    ))}
                    </div>

            </div>
        </div>
    </section>

 </>
 
    )
}

export default Singleproduct