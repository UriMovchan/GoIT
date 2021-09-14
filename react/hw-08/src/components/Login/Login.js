import { Link } from "react-router-dom";
import Input from "components/input";
import Button from "components/styled/Buttons";
import Content from "components/styled/Content";
import Form from "components/styled/Form";
import InputGroup from "components/styled/InputGroup";
import Label from "components/styled/Label";
import { postLogin } from "redux/user/userAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {
  const dispatch = useDispatch(),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const submitRegister = e => {
    e.preventDefault();

    dispatch(postLogin({ email, password }));
  };

  return (
    <Content>
      <Form onSubmit={submitRegister}>
        <h2 className="formTitle">Login</h2>
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

        <Button>Login</Button>

        <div className="orRegister">
          <p className="orRegister__text">Or</p>

          <Link className="navbar__link orRegister__link" to={"/register"}>
            Register
          </Link>
        </div>
      </Form>
    </Content>
  );
};

export default Login;
