import axios from 'axios';

// const initialState = {
//   categories: [
//     { name: 'electronics', displayName: 'Electronics' },
//     { name: 'food', displayName: 'Food' },
//     { name: 'clothing', displayName: 'Clothing' },
//   ],
//   activeCategory: ''
// };

const initialState = {
  categories: [],
  activeCategory: ''
};

function categoryReducer (state = initialState, action){
  switch(action.type){
    case 'SELECT_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload
      }

    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state;
  }
}

export default categoryReducer;

export const getCategories = () => async (dispatch, getState) => {
  let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`);
  dispatch(setCategories(response.data.results));
};

export const setCategories = data => {
  return {
    type: 'GET_CATEGORIES',
    payload: data,
  }
}
