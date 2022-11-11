let initialState = {
  productsInCart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD':
      return {
        productsInCart: [...state.productsInCart, action.payload]
      }

    case 'REMOVE':
      return {
        productsInCart: state.productsInCart.filter(product => product.name !== action.payload.name)
      }

    default:
      return state;
  }
}

export default cartReducer;


export const addToCart = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
}

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE',
    payload: product,
  }
}
