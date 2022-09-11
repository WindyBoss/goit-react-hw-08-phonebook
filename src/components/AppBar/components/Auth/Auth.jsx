/** @format */
import { NavLink, Container } from "./Auth.styled";

export default function Auth() {
  return (
    <Container>
      <NavLink to="register">Sign up</NavLink>
      <NavLink to="login">Log in</NavLink>
    </Container>
  );
}
