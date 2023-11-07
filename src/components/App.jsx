import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import {
  Container,
  MainHeader,
  SectionHeader,
} from './Container/Container.styled';

import initialContacts from 'data/initialContacts.json';

// ===========================================================

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  changeFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  checkNewContact = newContact => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  addContact = newContact => {
    if (this.checkNewContact(newContact)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts().sort(
      (prevContact, nextContact) =>
        prevContact.name.localeCompare(nextContact.name)
    );

    return (
      <Container>
        <MainHeader>Phonebook</MainHeader>
        <ContactForm onAddContact={this.addContact} />

        <SectionHeader>Contacts</SectionHeader>
        <Filter filter={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
