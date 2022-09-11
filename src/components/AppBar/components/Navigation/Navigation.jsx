/** @format */
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";
import { NavLink, Container } from "./Navigation.styled";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <Container>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </Container>
  );
}
