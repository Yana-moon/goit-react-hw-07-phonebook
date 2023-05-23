
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilterContacts } from 'redux/filter/selectorsFilter';

import { TextFilter, InputFilter, WrapperFilter } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);

  return (
    <WrapperFilter>
      <TextFilter>Find Contacts by name</TextFilter>
      <label>
        <InputFilter
          type="text"
          name="filter"
          placeholder="Enter name"
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
          value={filter}
        />
      </label>
    </WrapperFilter>
  );
};

export default Filter;