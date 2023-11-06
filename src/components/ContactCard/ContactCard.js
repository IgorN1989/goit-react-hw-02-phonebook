import { ContactContainer } from './ContactCard.styled';

export const ContactCard = ({
  contact: { id, name, phonenumber },
  onDeleteContact,
}) => (
  <ContactContainer>
    <p>{name}</p>
    <p>{phonenumber}</p>
    <button onClick={() => onDeleteContact(id)}>Delete</button>
  </ContactContainer>
);
