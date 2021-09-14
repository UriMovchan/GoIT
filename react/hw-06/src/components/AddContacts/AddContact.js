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
import { addContact } from "redux/contacts/contactActions";

const AddContact = () => {
  const dispatch = useDispatch(),
    [name, setName] = useState(""),
    [number, setNumber] = useState("");

  //setAlert, addContact

  const { contacts, alert } = useSelector((state) => state);

  const checkExistingContact = (name) => {
    return contacts.find((i) => i.name.toLowerCase() === name.toLowerCase());
  };

  const addContactHandler = (e) => {
    e.preventDefault();

    if (checkExistingContact(name)) {
      dispatch(setAlert(true));

      setTimeout(() => {
        dispatch(setAlert(false));
      }, 5500);
    } else {
      dispatch(
        addContact({ id: new Date().getTime(), name: name, number: number })
      );
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
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </InputGroup>

        <Button>Add contact</Button>
      </Form>
    </Content>
  );
};

// const mapStateToProps = (state) => ({
//   ...state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   addContact: (v) => dispatch(addContact(v)),
//   setAlert: (v) => dispatch(setAlert(v)),
// });

export default AddContact;
