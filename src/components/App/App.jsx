import { useSelector, useDispatch } from 'react-redux'; 
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import { Wrapper } from './App.styled';
import  ContactForm  from '../ContactForm/ContactForm';
import  ContactList  from '../ContactList/ContactList';
import  Filter  from '../Filter/Filter';
import Message from 'components/Message';
import Loader from 'components/Loader';
import {
  selectContactsItems,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';

import {
  Wrapper,
  Section,
  SectionsContainer,
  Title,
  SectionTitle,
} from './App.styled';

 function App() {
  const contactsItems = useSelector(selectContactsItems);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      toast.error('There are some problems! Try again later.');
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Title>Phonebook</Title>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm />
        </Section>
        <Section>
          <SectionTitle>Contacts</SectionTitle>
          {contactsItems.length !== 0 ? (
            <>
      <Filter />
      <ContactList />
      </>
      ) : (
            <Message message="There are no contacts in your Phonebook. Please add your first contact!" />
          )}
        </Section>
      </SectionsContainer>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </Wrapper>
  );
};


export default App;