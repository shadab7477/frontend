import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Components/offer.css"
import axios from "axios"
import {useState,useEffect} from "react"
const Popularit = () => {

  
  const [best, setbest] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:9000/best');
        setbest(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    console.log(best);
    fetchCategories();
  }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
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
  return (
    <>
    <div className="container my-5 ">
    <h1 className='text-center offerh ' >
    Products offered
    <p className=' offerp ' >
    Produce and supply various Handicraft
    <br/>
     items all over the world. 
    </p>
    </h1>
    
    <div className="slider-container gap-2 mt-5 p-2  ">
      <Slider {...settings}>


      {best.map((best) => (

        <div class="product__item bg-white me-4 ">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                        <div class="label new">BEST</div>
    <img 
                  src={`http://localhost:9000/uploads/${best.image}`}
    
     alt="" />
                
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup">
                            <i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Buttons tweed blazer</a></h6>
                        
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>

      ))}
      
                <div class="product__item bg-white">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                        <div class="label new">BEST</div>
    <img src="https://artsupplyindore.com/public/images/product/image-1719064420.png" alt="" />
                
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup">
                            <i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Buttons tweed blazer</a></h6>
                        
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            



                <div class="product__item bg-white">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                        <div class="label new">BEST</div>
    <img src="https://artsupplyindore.com/public/images/product/image-1719064420.png" alt="" />
                
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup">
                            <i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Buttons tweed blazer</a></h6>
                        
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            


                <div class="product__item bg-white">
                    <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                        <div class="label new">BEST</div>
    <img src="https://artsupplyindore.com/public/images/product/image-1719064420.png" alt="" />
                
                        <ul class="product__hover">
                            <li><a href="img/product/product-1.jpg" class="image-popup">
                            <i class="fa-solid fa-cart-shopping"></i></a></li>
                            <li><a href="#"><i class="fa-solid fa-heart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">Buttons tweed blazer</a></h6>
                        
                        <div class="product__price">$ 59.0</div>
                    </div>
                </div>
            


      </Slider>

    </div>
    </div>
    </>
  )
}

export default Popularit