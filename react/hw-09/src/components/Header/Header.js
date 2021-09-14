import UserMenu from "components/UserMenu/UserMenu";
import { selectUserIsLogged } from "redux/user/userSelector";

const { Logo } = require("components/Logo");
const { default: Container } = require("components/styled/Container");
const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");
const { NavLink } = require("react-router-dom");

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const isLogged = useSelector(selectUserIsLogged);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container className="headline">
      <Logo isLoaded={isLoaded} />

      <nav className="navbar">
        <ul className="navbar__list">
          {!isLogged ? (
            <>
              <li className="navbar__item">
                <NavLink
                  className="navbar__link"
                  activeClassName="active"
                  to={"/login"}
                >
                  Login
                </NavLink>
              </li>
              <li className="navbar__item">
                <NavLink className="navbar__link" to={"/register"}>
                  Register
                </NavLink>
              </li>
            </>
          ) : (
            <UserMenu />
          )}
        </ul>
      </nav>
    </Container>
  );
};

export default Header;
