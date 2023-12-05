import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContesxt";

function userIsAuth() {
  const { user } = useContext(AuthContext);
  const isAuthenticated = user !== null ? true : false;
  return isAuthenticated;
}

export { userIsAuth };
