import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactSlice';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { Layout, TitlePhoneBook, TitleContacts } from './AppStyled';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Layout>
      <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm />

      <TitleContacts>Contacts</TitleContacts>
        <ContactFilter />
        {contacts.length > 0 ? <ContactList /> : null}
    </Layout>
  );
};