import { Component } from "react";
import Container from "components/styled/Container";
import { AddContact } from "components/AddContacts";
import { ContactsList } from "components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    name: "",
    number: "",
  };

  getLastId = () => {
    const { contacts } = this.state;

    let newId = `id-${
      Math.max.apply(
        null,
        contacts.map((i) => parseInt(i.id.replace(/[^0-9]/g, ""), 10))
      ) + 1
    }`;

    return newId;
  };

  checkExistingContact = () => {
    return this.state.contacts.find(
      (i) => i.name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  addContactHandler = () => {
    if (this.checkExistingContact()) {
      alert(`${this.state.name} already exist in contact list`);
    } else {
      this.setState((pS) => ({
        contacts: [
          ...pS.contacts,
          {
            id: this.getLastId(),
            name: this.state.name,
            number: this.state.number,
          },
        ],
        name: "",
        number: "",
      }));
    }
  };

  inputChangeHandle = ({ name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  filterContactHandler = (who) => {
    this.setState({ filter: who });
  };

  deleteContactHandler = (who) => {
    this.setState({
      contacts: this.state.contacts.filter((i) => i.id !== who),
    });
  };

  render() {
    return (
      <Container>
        <AddContact
          addContactHandler={this.addContactHandler}
          inputChangeHandle={this.inputChangeHandle}
          name={this.state.name}
          number={this.state.number}
        />

        <ContactsList
          state={this.state}
          filterContactHandler={this.filterContactHandler}
          deleteContactHandler={this.deleteContactHandler}
        />
      </Container>
    );
  }
}

export default App;
