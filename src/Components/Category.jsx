import React from 'react'

const Category = () => {
  return (<>
  <div className="container mb-5 ">
  <h1 className='fs-1 fw-bold text-center mt-5 ' >
    Categories
    </h1>
    
  <p className='fs-5' >
  Explore a myriad of categories here
  </p>
  
  <div className="row">

    
  <div className="col-md-3">


  <div className="card p-3">
   <img src="https://artsupplyindore.com/public/images/category/image-1719407754.jpg" alt="" />
  <br />
   <h6 >Pigments for candles resign</h6>
    </div>
  </div>
        <div className="col-md-3">
            
  <div className="card p-3 ">
   <img src="https://artsupplyindore.com/public/images/category/image-1719407359.jpg" alt="" />
   <br />
   <h6>Resin art</h6>
    </div>
        </div>
        <div className="col-md-3">
<div className="card p-3">
   <img src="https://artsupplyindore.com/public/images/category/image-1719408141.jpg" alt="" />
   <br />

   <h6>candle making</h6>
    </div>
        </div>


        <div className="col-md-3">
<div className="card p-3 ">
   <img src="https://artsupplyindore.com/public/images/category/image-1719408334.jpg" alt="" />
   <br />

   <h6>painting colors</h6>
    </div>
        </div>

  </div>

  </div>
  </>
  )
}

export default Category