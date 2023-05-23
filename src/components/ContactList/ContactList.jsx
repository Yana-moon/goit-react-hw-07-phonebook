import ContactListItem from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
//import { getContacts, getFilterContacts } from 'redux/contacts/selectors';

import { ListContacts } from './ContactList.styled';

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ListContacts>
      {filteredContacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </ListContacts>
  );
}

export default ContactList;