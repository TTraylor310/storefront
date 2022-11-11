import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { If, Then, Else } from 'react-if';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { selectCategory } from '../../store/Store';
import { getProducts } from '../../store/Products';
import { addToCart } from '../../store/Cart';

const Products = (props) => {

  let dispatch = useDispatch();

  useEffect(() => {
    // console.log(getProducts());
    dispatch(getProducts());
  }, []);


  return (
    <>
      <h3>Products</h3>
      {/* {console.log('CHECK PRODUCTS index page', props.products.products[0])} */}
      {/* {console.log('CHECK PRODUCTS index page', props.products)} */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <If condition={props.products.length > 0}>
            <Then>
              {props.products.map((prod, idx) => (
                <Grid item xs={4} key={`products-${idx}`}>
                  <Card >
                    <p>{prod.name}</p>
                    <p>Price: ${prod.price}</p>
                    <p>Inventory: {prod.inStock}</p>
                    <Button
                      onClick={() => props.addToCart(prod)}>
                      Add To Cart
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Then>
            <Else>
              <p>One moment please...</p>
            </Else>
          </If>
        </Grid>
      </Box>
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    products: store.products
  }
}

const mapDispatchToProps = {
  selectCategory,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
