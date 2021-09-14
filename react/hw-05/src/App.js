import { Component } from "react";
import Container from "components/styled/Container";
import { AddContact } from "components/AddContacts";
import { ContactsList } from "components/ContactList";
import { Logo } from "components/Logo";
import Alert from "components/Alert/Alert";

class App extends Component {
  state = {
    contacts: this.getContacts(),
    filter: "",
    name: "",
    number: "",
    isLoaded: false,
    alert: false,
  };

  getLastId = () => {
    const contacts = this.getContacts();

    return contacts.length
      ? `id-${
          Math.max.apply(
            null,
            contacts.map((i) => parseInt(i.id.replace(/[^0-9]/g, ""), 10))
          ) + 1
        }`
      : "id-1";
  };

  inputChangeHandle = ({ name, value }) => {
    this.setState({
      [name]: value,
    });
  };

  checkExistingContact = () => {
    return this.getContacts().find(
      (i) => i.name.toLowerCase() === this.state.name.toLowerCase()
    );
  };

  getContacts() {
    return JSON.parse(localStorage.getItem("contacts")) || [];
  }

  updateState = () => {
    this.setState({
      contacts: this.getContacts(),
      filter: "",
      name: "",
      number: "",
    });
  };

  addContactHandler = () => {
    if (this.checkExistingContact()) {
      this.setState({ alert: true });

      setTimeout(() => {
        this.setState({ alert: false });
      }, 5500);
    } else {
      const contacts = this.getContacts();

      contacts.unshift({
        id: this.getLastId(),
        name: this.state.name,
        number: this.state.number,
      });

      localStorage.setItem("contacts", JSON.stringify(contacts));

      this.updateState();
    }
  };

  deleteContactHandler = (who) => {
    const contacts = this.getContacts().filter((i) => i.id !== who);

    contacts.length
      ? localStorage.setItem("contacts", JSON.stringify(contacts))
      : localStorage.removeItem("contacts");

    this.updateState();
  };

  filterContactHandler = (who) => {
    this.setState({ filter: who });
  };

  componentDidMount = () => {
    setTimeout(() => this.setState({ isLoaded: true }), 500);
  };

  render() {
    return (
      <Container>
        {this.state.alert && <Alert />}
        <Logo isLoaded={this.state.isLoaded} />
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
