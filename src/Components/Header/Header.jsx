import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import SimpleCart from '../SimpleCart';

function Header() {

  // let productsInCart = useSelector(state => state.cart.productsInCart )

  return (
    <Box 
        sx={{
          minwidth: 600,
        }}>
      <Paper elevation={2}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <h4>
                Our Store
              </h4>
          </Grid>
          <Grid item xs={6}>
            <>
              {/* <a href='#'>
                Cart({productsInCart.length})
              </a> */}
              <SimpleCart />
            </>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
export default Header;