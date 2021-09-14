import { Component } from "react";
import Content from "components/styled/Content";
import Form from "components/styled/Form";
import InputGroup from "components/styled/InputGroup";
import Button from "components/styled/Buttons";
import Label from "components/styled/Label";
import Input from "components/input";

export class AddContact extends Component {
  addContact = (e) => {
    e.preventDefault();

    this.props.addContactHandler();
  };

  inputChange = (e) => {
    const { name, value } = e.target;

    this.props.inputChangeHandle({ name, value });
  };

  render() {
    const { name, number } = this.props;
    return (
      <Content>
        <Form onSubmit={this.addContact}>
          <h2 className="formTitle">New contact</h2>
          <InputGroup>
            <Label htmlFor="input-name">Name</Label>
            <Input
              type="text"
              name="name"
              id="input-name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.inputChange}
              value={name}
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="input-number">Phone</Label>
            <Input
              type="tel"
              name="number"
              id="input-number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.inputChange}
              value={number}
            />
          </InputGroup>

          <Button>Add contact</Button>
        </Form>
      </Content>
    );
  }
}
