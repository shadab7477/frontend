import React from 'react'
import "./show.css"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import axios from "axios"
import { useState,useEffect } from 'react';
import Uploadproduct from './Uploadproduct.jsx';
const Showproduct = () => { const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState('');
    const [sortField, setSortField] = useState('price');
    const [sortBy, setSortBy] = useState('asc');
  
    useEffect(() => {
      fetchProducts();
    }, [currentPage, category, sortField, sortBy]);
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:9000/products', {
          params: {
            page: currentPage,
            limit: 6,
            category,
            sortField,
            sortBy
          }
        });
        setProducts(response.data.items);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    const handleSortChange = (field) => {
      const newSortBy = sortField === field && sortBy === 'asc' ? 'desc' : 'asc';
      setSortField(field);
      setSortBy(newSortBy);
    };


  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/products/${id}`);
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


    const handleEdit = (id) => {
        // Implement edit functionality here
        console.log('Edit product with ID:', id);
      };
      const handleTogglePopular = async (id) => {
        try {
          await axios.patch(`http://localhost:9000/products/${id}/populor`);
          fetchProducts();
        } catch (error) {
          console.error('Error toggling popular:', error);
        }
      };
      const handleToggleBest = async (id) => {
        try {
          await axios.patch(`http://localhost:9000/products/${id}/best`);

          fetchProducts();
        } catch (error) {
          console.error('Error toggling best:', error);
        }
      };


      const [modalShow, setModalShow] = React.useState(false);

    return (
      <div className=" mt-4">

        
    <div className=" bg-white p-1 mainwelcome px-3  ">
        <div className="row welcome items-center align-bottom ">
            <div className="col-6 pt-3  text-primary">
                Hii, welcome back!
            </div>
            <div className="col-6 pt-2 text-end  ">
                Dashboard &lt;  Products
            </div>
        </div>
    </div>

    <div className="maintable bg-white mt-4 pt-3 px-3 ">
        <div className="row">
        <span className="fs-1 col-6 pt-2" >Product list</span>
        <span className="fs-5  pt-2 col-6 text-end" >
            <button className="btn btn-primary" variant="primary" onClick={() => setModalShow(true)} >
            Add product <i class="bi bi-folder-plus px-1 "></i>
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
            <th scope="col" onClick={() => handleSortChange('name')}>Name</th>
            <th scope="col" onClick={() => handleSortChange('categoryName')}>Category</th>
            <th scope="col" onClick={() => handleSortChange('weight')}>Weight</th>
            <th scope="col">Image</th>
            <th scope="col" onClick={() => handleSortChange('price')}>Price</th>
            <th scope="col" onClick={() => handleSortChange('stock')}>Stock</th>
            <th scope="col" onClick={() => handleSortChange('popular')}>Popular</th>
            <th scope="col" onClick={() => handleSortChange('best')}>Best</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.cat_id}</td>
              <td>{product.weight}</td>
              <td><img src={`http://localhost:9000/product/${product.image}`} width="50" height="50" /></td>
              <td>{product.price}</td>
              <td>{product.unit}</td>
              <td>
                <button
                  className={`btn btn-sm  ${product.populor ? 'btn-success' : 'btn-secondary'}`}
                  onClick={() => handleTogglePopular(product._id)}
                >
                  {product.populor ? 'Yes' : 'No'}
                </button>
              </td>
              <td>
                <button
                  className={`btn btn-sm  ${product.best ? 'btn-success' : 'btn-secondary'}`}
                  onClick={() => handleToggleBest(product._id)}
                >
                  {product.best ? 'Yes' : 'No'}
                </button>
              </td>
              <td>
                <button className="btn btn-primary btn-sm me-1 " onClick={() => handleEdit(product._id)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
        <div className="pagination">
          
        <div className="row text-center w-100 justify-content-center">
      <nav className='col-12 text-center justify-content-center' aria-label="Page navigation example">
        <ul className="pagination text-center fs-5 mt-3  justify-content-center">
          {/* Previous button */}
          {currentPage > 1 && (
            <li className="page-item">
              <button
                className="page-link text-dark "
                onClick={() => handlePageChange(currentPage - 1)}
                aria-disabled={currentPage === 1}
              >
                <i className="fa-solid fa-backward pe-1"></i>
                <span className='fs-5' >Prev..</span>
              </button>
            </li>
          )}
          
          {/* Current page button */}
          <li className="page-item active">
            <button
              className="page-link bg-dark fs-5 border border-none "
              onClick={() => {handlePageChange(currentPage) ; window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              {currentPage}
            </button>
          </li>
          
          {/* Next button */}
          {currentPage < totalPages && (
            <li className="page-item">
              <button
                className="page-link text-dark "
                onClick={() =>{ handlePageChange(currentPage + 1) ;window.scrollTo({ top: 0, behavior: 'smooth' })  }  }
                aria-disabled={currentPage === totalPages}
              >
<span className="fs-5" >Next</span>
                 <i className="fa-solid ps-1 fa-forward"></i> 
                 
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>

          </div>
        </div>
      </div>
    );
  };



  
function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add product.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Uploadproduct/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }

export default Showproduct
