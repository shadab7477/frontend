import axios from 'axios';
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, GET_WISHLIST } from './types';

const getToken = () => {
  // Get the token from local storage or wherever you store it
  return localStorage.getItem('token');
};

export const addToWishlist = (productId) => async (dispatch) => {
  try {
    const token = getToken();
    console.log(token)
    const headers = {
      'x-auth-token': token, // Match the token in the middleware
      'Content-Type': 'application/json'
    };
    const res = await axios.post('http://localhost:9000/wishlist/add', { productId }, { headers });
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const removeFromWishlist = (productId) => async (dispatch) => {
  try {
    const token = getToken();
    const headers = {
      'x-auth-token': token, // Match the token in the middleware
      'Content-Type': 'application/json'
    };
    const res = await axios.post('http://localhost:9000/wishlist/remove', { productId }, { headers });
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};

export const getWishlist = () => async (dispatch) => {
  try {
    const token = getToken();
    const headers = {
      'x-auth-token': token, // Match the token in the middleware
      'Content-Type': 'application/json'
    };
    const res = await axios.get('http://localhost:9000/wishlist', { headers });
    // console.log(res)
    dispatch({
      type: GET_WISHLIST,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};