import { connect } from 'react-redux';
// import { styled } from '@mui/material/styles';
// import { combineReducers } from 'redux';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { selectCategory } from '../../store/Store';
import { addToCart } from '../../store/Cart';
import { Button } from '@mui/material';

const Products = (props) => {
  return (
    <>
      <h3>Products</h3>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {props.products.map( (prod, idx) => (
            <Grid item xs={4} key={`products-${idx}`}>
              <Card >
                <p>{prod.name}</p>
                <p>Price: ${prod.price}</p>
                <p>Inventory: {prod.inStock}</p>
                <Button 
                  onClick = {() => props.addToCart(prod)}>
                    Add To Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

const mapStateToProps = (store) => {
  return{
    products: store.products
  }
}

const mapDispatchToProps = {
  selectCategory,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
