import { ButtonDelete, ListContactText } from './ContactListItem.styled';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  
  function removeContact(id) {
    dispatch(deleteContact(id));    
  }
  return (
    <>
      <ListContactText>
        {name}: {number}
      </ListContactText>
      <ButtonDelete type="button" onClick={() => removeContact(id)}>
        Delete
      </ButtonDelete>
    </>
  );
};

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default ContactListItem;