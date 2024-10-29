import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRouter = () => {
  const loginInfo = JSON.parse(localStorage.getItem("signIn"));
  const isAuthenticated = loginInfo !== null && loginInfo.isSignIn;

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRouter;
