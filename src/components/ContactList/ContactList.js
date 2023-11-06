import { ContactListContainer } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactListContainer>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
      </li>
    ))}
  </ContactListContainer>
);
