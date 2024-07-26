import React from 'react'
import "./Category.css"
import Slider from "react-slick";
import axios from "axios"
import {Link} from "react-router-dom"
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Category = () => {

  const [categories, setCategories] = useState([]);
console.log(categories)
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:9000/category');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

    
    var settings = {
      arrows:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
              initialSlide: 2,
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
  return (<>
  <div className="container my-5 ">
    
  <p className='fs-5 text-center catep mt-3 ' >
  Shop by categories
  </p>
  <h4 className='fs-1 text-center cateh  ' >

  Designed by artists, made 
  <br/>
   by us, just for you.
    
  </h4>
  
  <img 
                                    src={`http://localhost:9000/uploads/${categories.image}`}
                                    alt="" />


  <Slider {...settings}>



  {categories.map((category) => (
          <Link to={"/shop"} onClick={()=> 
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } className='text-center catelink text-decoration-none text-dark ' key={category._id}>
            <div className='text-center uppercard'>
              <div className="text-center card2 p-3">
                <img 
                  src={`http://localhost:9000/category/${category.image}`}
                  alt={category.name} 
                />
                <div className="overlay">
                <i class="bi bi-arrow-up-right fw-bold fs-2 "></i>
                </div>
              </div>
            </div>
            <h5 className='text-center text-decoration-none namecate pt-2 fs-5'>{category.name}</h5>
          </Link>

  ))}

      </Slider>
   

      
  
  </div>


  </>
  )
}

export default Category