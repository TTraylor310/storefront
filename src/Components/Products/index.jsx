import { connect } from 'react-redux';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { selectCategory } from '../../store/Store';

const Products = (props) => {
  return (
    <>
      <h3>Products</h3>
      <Box sx={{flexGrow: 1}}>
        <Grid container spacing={2}>
          {props.products.map( (prod, idx) => (
            <Grid item xs={4}>
              <Card >
                <p
                key={`products-${idx}`}>
                {prod.name}</p>
                <p>{prod.price}</p>
                <p>{prod.inStock}</p>
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
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
