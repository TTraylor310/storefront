import React from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
// import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
// import Popper from '@mui/material/Popper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import { selectCategory } from '../../store/Store';
import { removeFromCart } from '../../store/Cart';
import IconButton from '@mui/material/IconButton';

const SimpleCart = (props) => {

  let productsInCart = useSelector(state => state.cart.productsInCart)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;


  return (
    <>

      <button aria-describedby={id} type="button" onClick={handleClick}>
        Cart({productsInCart.length})
      </button>
      {/* <Popper id={id} open={open} anchorEl={anchorEl}> */}
        {/* <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}> */}
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          {productsInCart.map((product, idx) => (
            // <>
              
              <ListItem 
                key = {`key-for-list-${product._id}`}
                secondaryAction={
                  <IconButton onClick={() => props.removeFromCart(product)}>
                    <DeleteIcon />
                  </IconButton>
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={`${idx}`} primary={`${product.name}`} />
                </ListItemButton>
              </ListItem>
            // </>
            ))}
      </List>
      {console.log('Products in the Cart:', productsInCart)}
      {/* </Box> */}
    {/* </Popper> */}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
    products: store.productsInCart
  }
}

const mapDispatchToProps = {
  selectCategory,
  removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
