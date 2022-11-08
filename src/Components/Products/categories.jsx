import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import * as React from 'react';
import { connect } from 'react-redux';
import { chooseElec, chooseCloth, chooseFood, reset } from '../../store/Products';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Products = (props) => {
  console.log(props);
  const { activeCategory, chooseCloth, chooseElec, chooseFood, reset, products } = props;

  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <>
      {/* <Checkbox {...label} /> */}
      {/* <FormGroup> */}
        {/* <FormControlLabel control={<Checkbox />} label='Electronics' />
        <FormControlLabel control={<Checkbox />} label='Clothing' /> */}

        {/* <FormControlLabel 
          control={<Checkbox onChange = {chooseFood(products)}/>}
          label='Food' 
        /> */}
      {/* </FormGroup> */}
      <h1>Product Category: ${props.activeCategory}</h1>
      <h1> Check the flow </h1>
      {
        props.products.map((prod, idx) => (
          <div key={`products-${idx}`}>
            <h5>{prod.name}</h5>
            <h5>{prod.price}</h5>
            <h5>{prod.inStock}</h5>
          </div>
        ))
      }
      <button onClick={() => chooseElec(products)}>Electronics?</button>
      <button onClick={() => chooseCloth(products)}>Clothing?</button>
      <button onClick={() => chooseFood(products)}>Food?</button>
      <button onClick={reset}>RESET</button>
    </>
  )
}


const mapStateToProps = ({products}) => {
  return {
    products: products.products,
    activeCategory: products.activeCategory,
  }
}

const mapDispatchToProps ={
  chooseElec,
  chooseCloth,
  chooseFood,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
