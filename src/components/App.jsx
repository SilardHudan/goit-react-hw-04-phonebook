import {
  AddContactsForm,
  Container,
  NavBar,
  ContactsList,
  Filter,
} from 'components';
import { useState, useMemo, useCallback } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import deleteContactContext from './deleteContactContext';
import useLocalStorage from './hooks/useLocalStorage';

const LS_KEY = 'contacts';

const initialValues = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, initialValues);
  const [filter, setFilter] = useState('');
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const onSearch = evt => {
    const value = evt.target.value;
    setFilter(value);
  };

  const addContact = data => {
    setContacts(contacts => [...contacts, data]);
    toggle('form');

    Notify.success(`${data.name} was successfully added to contacts`);
  };

  const deleteContact = useCallback(
    id => {
      setContacts(contacts => contacts.filter(contact => contact.id !== id));

      Notify.success(`Contact successfully removed`);
    },
    [setContacts]
  );

  const toggle = type => {
    switch (type) {
      case 'form':
        setIsOpenForm(isOpenForm => !isOpenForm);
        break;

      case 'filter':
        setIsOpenFilter(isOpenFilter => !isOpenFilter);
        break;

      default:
        throw new Error('component not found');
    }
  };

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, contacts]);

  return (
    <Container>
      <NavBar
        isOpenForm={isOpenForm}
        isOpenFilter={isOpenFilter}
        toggle={toggle}
      />
      {isOpenForm && (
        <AddContactsForm
          toggle={toggle}
          contacts={contacts}
          addContact={addContact}
        />
      )}
      {isOpenFilter && <Filter value={filter} onSearch={onSearch} />}

      <deleteContactContext.Provider value={deleteContact}>
        <ContactsList contacts={filteredContacts} />
      </deleteContactContext.Provider>
    </Container>
  );
};


