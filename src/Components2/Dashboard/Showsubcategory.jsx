import React from 'react'
import "./show.css"
import Modal from 'react-bootstrap/Modal';
import moment from 'moment';
import axios from "axios"
import { useState,useEffect } from 'react';
import Uploadcategory from './Uploadcategory.jsx';
const Showsubcategory = () => { const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/subcategory');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
      const [modalShow, setModalShow] = React.useState(false);

    return (
      <div className="container mt-4">

        
    <div className=" bg-white p-1 mainwelcome px-3  ">
        <div className="row welcome items-center align-bottom ">
            <div className="col-6 pt-3 h5  text-primary">
                Hii, welcome back!
            </div>
            <div className="col-6 pt-2 text-end  ">
                Dashboard &lt;  Products
            </div>
        </div>
    </div>

    <div className="maintable bg-white mt-4 pt-3 px-3 rounded-3 ">
        <div className="row">
        <span className="fs-1 col-6 pt-2" >Sub-Category list</span>
        <span className="fs-5  pt-2 col-6 text-end" >
            <button className="btn btn-primary" variant="primary" onClick={() => setModalShow(true)} >
            Add category <i class="bi bi-folder-plus px-1 "></i>
            </button>
            </span>

        </div>

        <hr />
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <table className="table bg-white table-responsive">
        <thead>
          <tr>
            <th scope="col" >Name</th>
            <th scope="col" >Image</th>
            <th scope="col" >Created at</th>
            <th scope="col" className="text-center" >Updated at</th>
            <th scope="col" >Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td><img src={`http://localhost:9000/subcategory/${product.image}`} width="100" height="80" /></td>
              
              <td>{moment(product.createdAt).format('MMMM Do, YYYY h:mm a')}</td>

              <td className="text-center" >{moment(product.updatedAt).format('MMMM Do, YYYY h:mm a')}</td>
              <td className="" >
                <button className="btn btn-primary btn-sm me-1 " >Edit</button>
                <button className="btn btn-danger btn-sm" >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
      </div>

    );
  };



  
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Uploadcategory/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

export default Showsubcategory
