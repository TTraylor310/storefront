import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productsReducer from './Products';
import categoryReducer from './Categories';


let reducers = combineReducers({
  products: productsReducer,
  category: categoryReducer
});

export default function store() {
  return createStore(reducers, composeWithDevTools());
}

export const selectCategory = (category) => {
  return {
    type: 'SELECT_CATEGORY',
    payload: category
  }
}
