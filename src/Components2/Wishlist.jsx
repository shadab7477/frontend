// src/components/Wishlist.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWishlist, removeFromWishlist } from '../actions/wishlistActions';
import "./wishlist.css"
const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  // infinity request send to backend
  // console.log(wishlist)
  useEffect(() => {
    dispatch(getWishlist());
    
  }, [dispatch]);
  
  const handleRemove = (productId) => {
    dispatch(removeFromWishlist(productId));
  };


  return (
    <div>
      <h1 className="text-uppercase text-center my-5 wishlisttext " >my Wishlist
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart pb-1 ps-2" viewBox="0 0 16 16">
  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
      </h1>

      <div className="table-responsive container  ">
      <table className="table table-striped p-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Product image</th>

            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlist.map((item, index) => (
            <tr key={index}>
                <td>
                    {index+1}
                </td>
              <td>
                                     
<img height="100px" width="100px" src={`http://localhost:9000/product/${item.product.image}`} />
              </td>
              <td>{item.product.name}</td>
              <td>{item.product.price} rs</td>
              <td>
            <i onClick={() => handleRemove(item.product._id)} class="fa-solid fa-trash text-danger fs-5 "></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Wishlist;
