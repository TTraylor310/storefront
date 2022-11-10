import { legacy_createStore as createStore, combineReducers } from 'redux';
import cartReducer from '../store/Cart';
import { addToCart, removeFromCart } from '../store/Cart';


describe('Cart Reducer', () => {
  const reducers = combineReducers({
    cart: cartReducer,
  });
  const store = createStore(reducers);

  test('provides initial state', () => {
    let state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
  })

  test('able to add to cart', () => {
    let state = store.getState();
    
    expect(state.cart.productsInCart.length).toEqual(0);
    expect(state.cart.productsInCart).toBeTruthy();
    state = store.getState();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 20}
    store.dispatch(addToCart(productOne));
    store.dispatch(addToCart(productTwo));
    state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(2);
    expect(state.cart.productsInCart[0].name).toEqual('product one');
    expect(state.cart.productsInCart[1].name).toEqual('product two');
  })

  test('removes products', () => {
    let state = store.getState();
    let productOne = {name: 'product one', price: 5}
    let productTwo = {name: 'product two', price: 20}

    store.dispatch(addToCart(productOne));
    store.dispatch(addToCart(productTwo));
    store.dispatch(removeFromCart(productOne));
    state = store.getState();
    expect(state.cart.productsInCart.length).toEqual(1);
    expect(state.cart.productsInCart[0].name).toEqual('product two');
  })

})
