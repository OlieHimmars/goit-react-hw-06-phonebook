import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, getFilter } from 'redux/contactSlice';
import { FilterBox, FilterInput } from './ContactFilterStyled';
import { FormLabel } from '../ContactForm/ContactFormStyled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFieldFilter = e => dispatch(changeFilter(e.currentTarget.value));

  return (
    <FilterBox>
      <FormLabel>Find contacts by name</FormLabel>
        <FilterInput
          type="text"
          value={filter}
          onChange={changeFieldFilter}
        />
    </FilterBox>
  );
};

export default Filter;