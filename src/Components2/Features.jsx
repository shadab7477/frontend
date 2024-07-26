import React from 'react'

const Features = () => {
  return (
    <>
    <div className="container">    <h1 className="text-center my-5 mt-3 " >Our features.</h1>
    <div className="row  justify-content-center text-center  ">
        <div className="col-md-4  featuresimg ">
            <img src="https://cdn-icons-png.flaticon.com/128/9183/9183489.png" />
            <h4> Quick Delivery</h4>
        </div>
        <div className="col-md-4  featuresimg ">
            <img src="https://cdn-icons-png.flaticon.com/128/10057/10057925.png" alt="" />
            <h4> Quality Droduct</h4>

        </div>
        <div className="col-md-4  featuresimg">
            <img src="https://cdn-icons-png.flaticon.com/128/6796/6796873.png" alt="" />
            <h4> Affordable Prices</h4>

        </div>
    </div>
    </div>
    </>
    
    )
}

export default Features
