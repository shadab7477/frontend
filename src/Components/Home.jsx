import React from 'react'
import bg from "../img/bg-shape.png"
import Category from './Category'
import Features from './Features'
import "./Home.css"
import Offeredproduct from './Offeredproduct'
const Home = () => {
  return (
    <>
    <div className='main container-fluid ' >
        <div className="row">
            <div className="col-md-6 hometext ">
<h2>
    Unleash the creativity with our  
    <span className='crafttext' > art and crafts.</span>
</h2>
            </div>
            <div className="col-md-6">

                <div className="row gap-3 ">
                    <div className="col-md-5 imgbox ">
                        <img className='imgbox1' src="https://templates.hibootstrap.com/tezor/default/assets/images/home-one/home-one-img1.jpg" />
                    </div>
                    <div className="col-md-5 ms-2 pt-md-5 mt-md-5 imgbox ">

                        <img className='imgbox2' src="https://templates.hibootstrap.com/tezor/default/assets/images/home-one/home-one-img2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Category/>
{/* <Features/> */}
<Offeredproduct/>
    </>
  )
}

export default Home
