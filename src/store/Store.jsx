import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './Products';
import categoryReducer from './Categories';
import cartReducer from './Cart';
// import logger from './middleware/logger';
import thunk from './middleware/thunk';

let reducers = combineReducers({
  products: productsReducer,
  category: categoryReducer,
  cart: cartReducer
});

export default function store() {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
}

export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
}
