import React from 'react'
import Offeredproduct from '../Components/Offeredproduct'
import first from "../img/3.jpg"

// import { baseUrl } from "./config";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import third from "../img/2.jpg"
import Popularit from "./Popularit.jsx"
import second from "../img/1.jpg"
import Category from './Category'
import "./home2.css"
import Popular from './Popularit';
import Features from './Features';
import Stickynav from './Stickynav';
const Home2 = () => {
    const settings = {
        
    speed: 1000,
    autoplaySpeed: 3000,
    autoplay: true,
    
    infinite: true,
        dots: false,
        fade: true,
       arrows:false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    cssEase: "linear",
        waitForAnimate: false
      };
  return (
    <>
    <div className="mainhome">
    <div class="container  sk">
        <div class="row">
            <div class="col-md-6 upperbox d-flex flex-column">
                <div class="box flex-fill">

                <div className="slider-container frame">
      <Slider {...settings}>
        <div>
        <h5 class="overlay-text pt-4 fs-1">Unleashed the creativity with our arts and crafts. <span className="borderup" >   </span> </h5>
            
        <img src={first} alt="" />


        </div>
        <div>
            

        <h5 class="overlay-text  fs-1 ">Crafting Masterpieces Together. <span className="borderup" >   </span> </h5>

<img className='' src={"https://artsupplyindore.com/public/images/product/multiimage/camel-paint-brush-series-66-round-synthetic-gold-set-of-7.jpg"} alt="" />
        </div>
        <div>
            

        <h5 class="overlay-text pt-4 fs-1 ">Creative Tools for Creative Minds.<span className="borderup" >   </span> </h5>

<img src={"https://artsupplyindore.com/public/images/product/multiimage/WhatsApp%20Image%202024-04-17%20at%2014.34.22_1a848748.jpg"} alt="" />
        </div>
      </Slider>
    </div>

                </div>
            </div>
            <div class="col-md-6 d-flex flex-column">
                <div class="row flex-fill">
                    <div class="col-12">
                        <div class="box  ">
                        <h5 class="overlay-text  ">Your Artistic Journey Starts Here.</h5>

                            <img src={second} />
                        </div>
                    </div>
                </div>
                <div class="row flex-fill">
                <div class="col-12">
    <div class="box  ">
        <h5 class="overlay-text">Tools for Your Inner Artist.</h5>
        <img src={third} alt="Third Image" class="image"/>
    </div>
{/* </div> */}
{/* </div> */}

                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    <Category/>
    <Offeredproduct/>
    {/* <Popular/> */}


    <div className="container">
    <div className="row  justify-content-center "   >
    <div className="col-md-3 col-6 justify-content-center text-center ">
        <img height={"150px"} src="https://www.bigbasket.com/media/uploads/p/xxl/40087817-3_1-pidilite-fevicryl-lilac-kit.jpg" />
    </div>
    <div className="col-md-3 col-6 justify-content-center text-center ">
        <img height={"130px"} src="data:image/jpeg;base64,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" />
    </div>
    <div className="col-md-3 col-6 justify-content-center text-center ">
<img height={"150px"} src="data:image/jpeg;base64,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BERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z" />

    </div>
    <div className="col-md-3 mt-4 col-6 justify-content-center text-center ">
        <img height={"80px"} className='lastbrand' src="data:image/png;base64,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" />
    </div>
</div></div>
<Stickynav/>
    </>
  )
}

export default Home2
