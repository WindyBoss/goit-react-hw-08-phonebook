/** @format */
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import Auth from "./components/Auth";
import { Header } from "./AppBar.styled";
import UserMenu from "./components/UserMenu";
import { useSelector } from "react-redux";
import authSelectors from "redux/auth/authSelectors";

export default function AppBar() {
  // & selector, which returns the status of the user logging
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <Auth />}
      </Header>
      <Outlet />
    </div>
  );
}
