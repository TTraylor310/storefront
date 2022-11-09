import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { connect } from 'react-redux';
import { selectCategory } from '../../store/Store';



const Categories = (props) => {
  return (
    <>
      <h3>Browse our Categories</h3>
      <ButtonGroup variant="text" aria-label="outlined primary button group" size="large">
        {props.categories.map((category, index) => (
          <Button
            key={`category-${index}`}
            onClick={() => props.selectCategory(category.name)} 
          >
            {category.displayName}
          </Button>
        ))}
      </ButtonGroup>

    </>
  )
};

const mapStateToProps = (store) => {
  return {
    categories: store.category.categories,
  }
}

const mapDispatchToProps = {
  selectCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
