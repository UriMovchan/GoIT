import { useState, useEffect } from "react";

import { Logo } from "components/Logo";

import Container from "components/styled/Container";
import AddContact from "components/AddContacts/AddContact";
import ContactsList from "components/ContactList/ContactList";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <Logo isLoaded={isLoaded} />
      <AddContact />
      <ContactsList />
    </Container>
  );
};

export default App;
