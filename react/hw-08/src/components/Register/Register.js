import { useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "redux/alert/alertActions";
import { postRegister } from "redux/user/userAction";

import Content from "components/styled/Content";
import Form from "components/styled/Form";
import InputGroup from "components/styled/InputGroup";
import Label from "components/styled/Label";
import Input from "components/input";
import Button from "components/styled/Buttons";

const Register = () => {
  const dispatch = useDispatch(),
    [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirm, setConfirm] = useState("");

  const validateForm = () => {
    if (password === confirm) {
      return password === confirm;
    } else {
      dispatch(setAlert("password !== confirm"));
    }
  };

  const submitRegister = e => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(postRegister({ name, email, password }));
    }
  };

  return (
    <Content>
      <Form onSubmit={submitRegister}>
        <h2 className="formTitle">Register</h2>
        <InputGroup>
          <Label htmlFor="input-name">Name</Label>
          <Input
            type="text"
            name="name"
            id="input-name"
            required
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="input-email">Email</Label>
          <Input
            type="email"
            name="email"
            id="input-email"
            required
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="input-password">Password</Label>
          <Input
            type="password"
            name="password"
            id="input-password"
            required
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="input-confirm">Confirm</Label>
          <Input
            type="password"
            name="confirm"
            id="input-confirm"
            required
            onChange={e => setConfirm(e.target.value)}
            value={confirm}
          />
        </InputGroup>

        <Button>Register</Button>
      </Form>
    </Content>
  );
};

export default Register;
