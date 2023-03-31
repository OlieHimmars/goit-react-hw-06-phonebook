import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getFilter, getContacts } from 'redux/contactSlice';
import ContactItem from '../ContactItem';
import { List, Item } from './ContactListStyled';

const ContactList = () => {
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const deleteSelectedContact = contactID => dispatch(deleteContact(contactID));

  const contactsFilter = () => {
    const filterNormalize = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalize)
    );
  };

  const filtredContacts = contactsFilter();
  
  return (
      <List>
        {filtredContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <ContactItem
                name={name}
                number={number}
                onDeleteContact={() => deleteSelectedContact(id)}
                contactID={id}
              />
            </Item>
          );
        })}
      </List>
    );
};

export default ContactList;