import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, Label, Input, Button } from './ContactForm.styled';

export function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    setName('');
    setNumber('');
    onAddContact(name, number);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>name</Label>
      <Input
        type="text"
        name="name"
        id={nameInputId}
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
      <Label htmlFor={numberInputId}>number</Label>
      <Input
        type="tel"
        name="number"
        id={numberInputId}
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Button type="submit" disabled={!name || !number}>
        Add contact
      </Button>
    </Form>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
