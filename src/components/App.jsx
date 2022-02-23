import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  const defaultContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const existingContacts = window.localStorage.getItem('contacts');

  const [contacts, setContacts] = useState(
    () => JSON.parse(existingContacts) ?? defaultContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  let filterInputId = nanoid();

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = contacts.find(contact => contact.name === name);

    if (findContact) {
      alert(`${findContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [...prevState, contact]);
  };

  const handleChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <Layout title="phonebook">
      <ContactForm onAddContact={addContact}></ContactForm>

      {contacts.length > 0 && (
        <Section title="Contacts">
          {contacts.length > 2 && (
            <Filter
              id={filterInputId}
              value={filter}
              onChangeFilter={handleChangeFilter}
            />
          )}

          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          ></ContactList>
        </Section>
      )}
    </Layout>
  );
}
