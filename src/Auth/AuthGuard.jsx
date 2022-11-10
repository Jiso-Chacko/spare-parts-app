import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const AuthGuard = ({ children }) => {
  let { isAuthenticated } = useAuth();
  console.log("====================================");
  console.log(isAuthenticated);
  console.log("====================================");
  const { pathname } = useLocation();
  console.log(pathname);

  let authenticated = isAuthenticated;
  return (
    <>{authenticated ? children : <Navigate replace to="/user/login" />}</>
  );
};

export default AuthGuard;
