import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/Store';
import { getCategories } from '../../store/Categories';


const Categories = (props) => {

  let dispatch = useDispatch();

  useEffect(() => {
    console.log(getCategories());
    dispatch(getCategories());
  }, []);

  return (
    <>
      <h3>Browse our Categories</h3>
      <ButtonGroup variant="text" aria-label="outlined primary button group" size="large">
        {props.categories.map((category, index) => (
          <Button
            key={`category-${index}`}
            onClick={() => props.selectCategory(category.name)} 
          >
            {category.name}
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
