/** @format */

import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Container, NameContainer } from "./UserMenu.styled";
import authSelectors from "redux/auth/authSelectors";
import { useDispatch, useSelector } from "react-redux";
import authOperations from "redux/auth/authOperations";

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(authOperations.logOut());
  }

  return (
    <Container>
      <NameContainer>
        <PersonIcon />
        <p>Welcome {name}</p>
      </NameContainer>
      <Button variant="contained" onClick={handleClick} size="small">
        Log Out
      </Button>
    </Container>
  );
}
