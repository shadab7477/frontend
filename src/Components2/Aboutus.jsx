import React from 'react'
import {Link} from "react-router-dom"
import "./home2.css"
const Aboutus = () => {
  return (
    <>
    <div className="container-fluid pb-5 ">

<h1 className='text-center  py-4' >About-us
<h6 className='text-center  ' ><Link className='text-decoration-none text-dark' >Home</Link> <i className="bi bi-arrow-right" />
 About </h6>

</h1>


        <div className="row">
            <div className="col-md-6  ">
                <img id='aboutimg' width="650px" className="rounded-5" src="https://previews.123rf.com/images/elenabsl/elenabsl1508/elenabsl150800017/44303260-hobby-and-crafts-banner-people-working-on-different-projects-ceramics-painting-sewing-quilting-and.jpg" alt="" />
            </div>
            <div className="col-md-6 fs-4">
                <h1>
                The Habitat Method

                </h1>


            "There is no must in art because art is free"

-Wassiny kandinsky

Launched on 08/06/2020

Art supply indore is the proprietor firm with the aim to provide the best art and craft supplies with the convenience of purchasing material for art lovers

All Art related material under one Roof With the range of high quality products related to art and craft Be it resin, pigments, moulds, MDF's, glitters, stones, stickers everything we have under 1 roof

We ship PAN INDIA
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutus
