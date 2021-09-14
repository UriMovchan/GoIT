import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Content from "components/styled/Content";
import Alert from "components/Alert/Alert";
import Form from "components/styled/Form";
import InputGroup from "components/styled/InputGroup";
import Button from "components/styled/Buttons";
import Label from "components/styled/Label";
import Input from "components/input";

import { setAlert } from "redux/alert/alertActions";
import { postContact } from "redux/contacts/contactActions";
import { getToken } from "redux/contacts/contactsSelector";

const AddContact = () => {
  const dispatch = useDispatch(),
    [name, setName] = useState(""),
    [number, setNumber] = useState(""),
    { contactsData } = useSelector(state => state.contacts),
    token = useSelector(getToken);

  const addContactHandler = e => {
    e.preventDefault();

    if (contactsData.find(i => i.name.toLowerCase() === name.toLowerCase())) {
      dispatch(setAlert("Contact already exist"));
    } else {
      dispatch(postContact({ token, contact: { name, number } }));
    }
  };

  return (
    <Content>
      {alert && <Alert />}
      <Form onSubmit={addContactHandler}>
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
            onChange={e => setName(e.target.value)}
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
            onChange={e => setNumber(e.target.value)}
            value={number}
          />
        </InputGroup>

        <Button>Add contact</Button>
      </Form>
    </Content>
  );
};

export default AddContact;
