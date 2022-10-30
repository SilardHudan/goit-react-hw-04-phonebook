import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components';
import { Empty, Title, Wrapper } from './ContactsList.styled';

const ContactsList = ({ contacts }) => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ul>
      ) : (
        <Empty>Contact list is empty</Empty>
      )}
    </Wrapper>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  deleteHandler: PropTypes.func,
};
