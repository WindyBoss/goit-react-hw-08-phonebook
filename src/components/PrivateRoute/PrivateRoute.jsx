/** @format */

import { useNavigate } from "react-router-dom";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { useEffect } from "react";

/* 
& PrivateRoute - component - Route wrap, which is close for public users and will redirect to public if the use is logged out 
*/
export default function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    !isLoggedIn && navigate(`../login`);
  }, [isLoggedIn, navigate]);

  return children;
}
