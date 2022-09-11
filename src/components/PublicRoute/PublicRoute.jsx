/** @format */

import { useNavigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/* 
& PublicRoute - component - Route wrap, which is closed or open in conditions:
^ if user is logged in is no sense to show log in or sign up forms (pages)
^ if user is logged the home page can be shown
*/

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
}) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  useEffect(() => {
    shouldRedirect && navigate(`../${redirectTo}`);
  }, [navigate, redirectTo, shouldRedirect]);

  return children;
}
