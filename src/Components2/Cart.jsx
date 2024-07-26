// Cart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import "./cart.css"
const Cart = () => {
  const [cart, setCart] = useState(null);
  const[total,settotal]=useState()
const navigate=useNavigate()
console.log(cart)
  


    
const getToken = () => {
  return localStorage.getItem('token');
};
    const token = getToken();

  useEffect(() => {

    const fetchCart = async () => {
        
            
    console.log(token)
    const headers = {
      'x-auth-token': token, // Match the token in the middleware
      'Content-Type': 'application/json'
    };
      
      try {
        const response = await axios.get('http://localhost:9000/cart', { headers });
        setCart(response.data);
      } catch (error) {
        console.error('Error fetching cart:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchCart();
  }, [token]);

  
  const calculateTotal = (cart) => {
    return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };const shipping=20
  const coupan=10


  const handleCheckout = () => {
    console.log('Cart data before navigation:', cart); // Debugging line
    navigate('/checkout', { state: { cart } });
  };



  const handleDelete = async (itemId) => {
    try {
        await axios.delete(`http://localhost:9000/cart/item/${itemId}`, {
            headers: { 'x-auth-token': localStorage.getItem('token') }
        });
        // Remove item from local state
        setCart(prevCart => ({
            ...prevCart,
            items: prevCart.items.filter(item => item._id !== itemId)
        }));
    } catch (error) {
        // setError('Error deleting cart item');
        console.error('Error deleting cart item:', error);
    }
};

  if (!cart) {
    return <h4 className='text-center py-5 ' >Loading cart...</h4  >;
  }

  return (

    <>
  <ClipLoader
        color={"black"}
        loading={!cart}
        // cssOverride={override}
        size={450}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
<div class="px-4 px-lg-0">
  <div class="container  py-4 mt-2 text-center">
    <h1 class="display-4 text-uppercase">shopping cart</h1>
  </div>

  <div class="pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 p-2 bg-white rounded shadow-sm mb-5">

          <div class="table-responsive">
            <table class="table carttable ">
              <thead>
                <tr>
                  <th scope="col" class="border-0 bg-light">
                    <div class="p-2 px-3 text-uppercase">Product</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Price</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Quantity</div>
                  </th>
                  <th scope="col" class="border-0 bg-light">
                    <div class="py-2 text-uppercase">Remove</div>
                  </th>
                </tr>
              </thead>
              <tbody>



              {cart.items.map((items, index) => (



<tr>
<th scope="row" class="border-0">
  <div class="p-2">
    <td>
    <img 
    height="120px"
    width="120px"
                                      src={`http://localhost:9000/product/${items.product.image}`}
    
     alt=""  class="img-fluid rounded shadow-sm"/>
     </td>
     <td className='text-center justify-content-center ' >
    <div class="ml-3 d-inline-block text-center ps-md-4 mt-1 align-middle">
      <h5 class="mb-0"> <span href="#" class="text-dark d-inline-block align-middle">{items.product.name}</span></h5><span class="text-muted fw-thin font-weight-normal font-italic d-block">{}</span>
    </div>
    </td>
  </div>
</th>
<td class="border-0 align-middle">{items.product.price} rs</td>
<td class="border-0 align-middle">{items.quantity}</td>
<td style={{cursor:"pointer"}} class="border-0  align-middle"><a onClick={() => handleDelete(items._id)} class="text-dark"><i class="fa fa-trash"></i></a></td>
</tr>


        //   <li key={index}>
        //      x {item.quantity} = ${item.product.price * item.quantity}
        //   </li>
        ))}    
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="row text-center ">
        <div className="col-12">
      <a onClick={handleCheckout} class="btn btn-dark rounded-pill py-2 px-4 text-center ff-poppins   btn-block">Procceed to checkout <i class="bi bi-arrow-right-circle"></i></a>
      </div>
      </div>
    </div>
  </div>
</div>

    </>
    
  );
};

export default Cart;
