import Container from "components/styled/Container";
import AddContact from "components/AddContacts/AddContact";
import ContactsList from "components/ContactList/ContactList";

const Contacts = () => (
  <Container>
    <AddContact />
    <ContactsList />
  </Container>
);

export default Contacts;
