import { connect } from 'react-redux';
import { selectCategory } from '../../store/Store';

const Products = (props) => {
  return (
    <>
      <h3>Products</h3>
      <div>
        {props.products.map( (prod, idx) => (
          <>
            <p
            key={`products-${idx}`}>
            {prod.name}</p>
            <p>{prod.price}</p>
            <p>{prod.inStock}</p>
          </>
        ))}

      </div>
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
