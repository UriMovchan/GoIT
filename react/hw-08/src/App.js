import { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectUserIsLogged } from "redux/user/userSelector";

import Alert from "components/Alert/Alert";
import Header from "./components/Header/Header";
import Container from "components/styled/Container";
import Login from "components/Login/Login";
import Contacts from "components/Contacts/Contacts";
import Register from "components/Register/Register";

const App = () => {
  const history = useHistory(),
    isLogged = useSelector(selectUserIsLogged);

  useEffect(() => {
    if (isLogged) {
      history.push("/");
    } else {
      history.location.pathname === "/register"
        ? history.push("/register")
        : history.push("/login");
    }
  }, [isLogged, history]);

  return (
    <Container>
      <Alert />
      <Header />
      <Switch>
        {isLogged && <Route exact path="/" component={Contacts} />}

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Container>
  );
};

export default App;
