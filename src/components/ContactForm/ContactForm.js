import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import { addContact, getContacts } from 'redux/contactSlice';
import { MainForm, AddButton, FormLabel, Input } from './ContactFormStyled';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');


  const onChangeName = e => setName(e.currentTarget.value);
  const onChangeNumber = e => setNumber(e.currentTarget.value);

   const contacts = useSelector(getContacts);
  const dispach = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.some(contact => contact.name === name)
      ? Report.warning(
          `${name}`,
          'User is already in your contact list.',
          'OK'
        )
      : dispach(addContact(newContact));

    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      
    >
      <MainForm autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <div>
            <Input
              onChange={onChangeName}
              value={name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </div>
        </div>
        <div>
          <FormLabel htmlFor="number">Number</FormLabel>
          <div>
            <Input
              onChange={onChangeNumber}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </div>
        </div>
        <AddButton type="submit">Add contact</AddButton>
      </MainForm>
    </Formik>
  );
}
