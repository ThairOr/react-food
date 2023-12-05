import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContesxt";
import { Navigate } from "react-router-dom";
import { userIsAuth } from "../hooks/userIsAuth";

function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  console.log("Props");
  const allowAccess = userIsAuth();
  return <>{allowAccess ? children : <Navigate to="/" />}</>;

}

export default ProtectedRoute;
