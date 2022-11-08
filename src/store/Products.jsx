let initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
    { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
    { name: 'Apples', category: 'food', price: .99, inStock: 500 },
    { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
    { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  ],
  activeCategory: '',
};


function productsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'electronics':
      return {
        state,
        products: state.products.map(prod => {
          if (prod.category === payload.category) {
            return {
              name: prod.name,
              price: prod.price,
              inStock: prod.inStock,
            }
          }
        }),
        activeCategory: state.activeCategory('electronics'),
      }

    case 'clothing':
      return {
        state,
        products: state.products.map(prod => {
          if (prod.category === payload.category) {
            return {
              name: prod.name,
              price: prod.price,
              inStock: prod.inStock,
            }
          }
        }),
        activeCategory: state.activeCategory('clothing'),
      }

      case 'food':
        return {
          state,
          products: state.products.map(prod => {
            if (prod.category === payload.category) {
              return {
                name: prod.name,
                price: prod.price,
                inStock: prod.inStock,
              }
            }
          }),
          activeCategory: state.activeCategory('food'),
        }

    case 'RESET':
      return initialState;

    default:
      return state;

  }

}

export default productsReducer;

export const chooseElec = (prod) => {
  return {
    type: 'electronics',
    payload: prod,
  }
}
export const chooseCloth = (prod) => {
  return {
    type: 'clothing',
    payload: prod,
  }
}
export const chooseFood = (prod) => {
  return {
    type: 'food',
    payload: prod,
  }
}

export const reset = () => {
  return {
    type: 'RESET',
  }
}