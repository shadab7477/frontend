import React from 'react'
import {Link} from "react-router-dom"
const Blog = () => {
  return (
    <div>
      <div className="container py-4 ">
        <h1 className='text-center py-4 ' >BLOG
            <h5><Link className="text-decoration-none text-dark" to={"/"} >Home</Link> <i className="bi bi-arrow-right pe-1 " /> 
 blog</h5>
        </h1>

        <div className="row">
            <div className="col-md-4">
  <article>
    <div className="card border-0">
      <figure className="card-img-top m-0 overflow-hidden bg-dark">
          <img className="img-fluid bsb-scale bsb-hover-scale-up bg-dark " loading="lazy" src="https://5.imimg.com/data5/HX/BX/MY-9970142/decorative-home-fancy-lights.jpg" alt="Business" />
      
      </figure>
      <div className="card-body border bg-white p-3">
        <div className="entry-header mb-3">
          <ul className="entry-meta list-unstyled d-flex mb-">
          
          </ul>
          <h2 className="card-title entry-title h4 mb-0">
            <a className="link-dark text-decoration-none" href="#!">Overcoming Challenges to Make a Living Online</a>
          </h2>
        </div>
        <p className="card-text entry-summary text-secondary">
          Making money online is attainable. However, even if the processes are simple, you may still need help with issues.
        </p>
      </div>
      <div className="card-footer border border-top-0 bg-white p-4">
        <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
          <li>
            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
              <span className="ms-2 fs-7">7 Feb 2023</span>
            </a>
          </li>
          <li>
            <span className="px-3">•</span>
          </li>
          <li>
            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
              </svg>
              <span className="ms-2 fs-7">55</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </article>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
