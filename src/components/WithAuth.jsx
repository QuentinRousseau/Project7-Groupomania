import React from "react";
import { useNavigate } from "react-router-dom";

function withAuth(Component) {
  const navigateTo = useNavigate();
  const AuthRoute = () => {
    const isAuth = !!localStorage.getItem("token");
    if (isAuth) {
      return <Component />;
    } else {
      return navigateTo("/Login");
    }
  };

  return AuthRoute;
}

export default withAuth;
