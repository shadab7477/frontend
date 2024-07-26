// src/reducers/wishlistReducer.js
import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, GET_WISHLIST } from '../actions/types';

const initialState = {
  wishlist: []
};

const wishlistReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_TO_WISHLIST:
    case REMOVE_FROM_WISHLIST:
    case GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload.items
      };
    default:
      return state;
  }
};

export default wishlistReducer;
