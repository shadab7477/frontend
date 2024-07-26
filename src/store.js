import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import wishlistReducer from './reducers/wishlistReducer';
// ... other reducers

const rootReducer = combineReducers({
  wishlist: wishlistReducer,
  // ... other reducers
});

export default createStore(rootReducer, applyMiddleware(thunk));