import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebaseConfig";
// import ErrorPage from "../pages/ErrorPage";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState();
  // const AuthContesxt = {User}

  const register = async (email, password) => {
    console.log("email, password :>> ", email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const registeredUser = userCredential.user;
      console.log("registeredUser :>> ", registeredUser);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("register went wrong :>> ", error);
    }
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const loggedUser = userCredential.user;
        console.log("loggedUser :>> ", loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error :>> ", error);
        console.log("errorCode :>> ", errorCode);
      });
  };
  const checkIfUserIsActive = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // console.log("user is still logged in");
        // console.log("uid :>> ", uid);
        // console.log("user :>> ", user);
        setUser(user);
      } else {
        // console.log("user is logged out");
        setUser(null);
      }
    });
  };

  useEffect(() => {
    checkIfUserIsActive();
  }, []);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        // console.log("error siging out :>> ", error);
      });
  };
  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, register }}>
      {props.children}
    </AuthContext.Provider>
  );
};
