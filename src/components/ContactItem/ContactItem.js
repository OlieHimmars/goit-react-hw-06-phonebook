import React from 'react';
import { DelButton } from './ContactItemStyled';

const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
    <>
      <span>{name}:</span>
      <span>{number}</span>
      <DelButton type="button" onClick={onDeleteContact}>
        Delete
      </DelButton>
    </>
  );
};

export default ContactItem;