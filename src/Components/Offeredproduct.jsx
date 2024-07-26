import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./offer.css"
import Features from "../Components2/Features.jsx"

import Card from "../Components2/Card.jsx"
import { Link } from 'react-router-dom';
import axios from "axios"
import {useState,useEffect} from "react"
const Offeredproduct = () => {

  
  const [best, setbest] = useState([]);
  const [popular, setpopular] = useState([]);
  const [products, setProducts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log(products);
  useEffect(() => {


    fetchProducts();
  
    const fetchpopular = async () => {
      try {
        const response = await axios.get('http://localhost:9000/popular');
        console.log(response)
        setbest(response.data.popularProducts);

        setpopular(response.data.popularProducts);
        console.log(response.data.popularProducts)
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchpopular();


  }, []);

console.log(products)

const fetchProducts = async () => {
  setLoading(true);
  const response = await axios.get('http://localhost:9000/home-all', {
    params: {
      offset,
    },
  });
  setProducts([...products, ...response.data.products]);

  setHasNext(response.data.hasNext);
  setLoading(false);
};

const handleLoadMore = () => {
  setOffset(offset + 12);

  fetchProducts();
};



  console.log(popular)
    var settings = {
        dots: false,
      arrows:false,
        

        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        autoplay: true,

        speed: 200,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const [modalProduct, setModalProduct] = useState(null);
      const [showModal, setShowModal] = useState(false);
    
      const handleOpenModal = (product) => {
        setModalProduct(product);
        setShowModal(true);
      };
    
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
    .
    <div className="container my-5 mt-3 mainbest pt-5">
    <h1 className='text-center offerh ' >
    Best Products 
    <p className=' offerp ' >
    Produce and supply various Handicraft
    <br/>
     items all over the world. 
    </p>
    </h1>
    
    <div className="slider-container gap-5 mt-5 p-2  "    >
      <Slider {...settings}>


      {popular.map((best) => (
                        <Card key={best._id}  product={best} />


      ))}
      </Slider>
    </div>



        <Features/>

    <h1 className='text-center offerh mt-5 ' >

      Popular products
</h1>



<div className="mt-5 justify-content-center  gap-3 row ">
      

      {products.map((best) => (
                        <Card key={best._id} product={best} />


))}
      



      {hasNext && (


<div className=" container text-center justify-content-center">
<div id="loadmores" className=" btn loadmore fs-5 " onClick={handleLoadMore}>Load More...</div>

</div>


      )}
      {loading && <p>Loading...</p>}
    </div>

    
    </div>
    </>
  )
}

export default Offeredproduct