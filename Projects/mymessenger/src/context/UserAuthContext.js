import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});
  
  // ! loginsStatus loginsStatus loginsStatus
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // ! logIn logIn logIn logIn 
  function logIn(email, password, displayName) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // ! signUp signUp signUp signUp
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // ! logOut logOut logOut logOut
  function logOut() {
    return signOut(auth);
  }

  // ! updateProfileData updateProfileData
  function updateProfileData(displayName, image = null) {
    return (
      updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: image,
      }).then(() => {
        console.log('profile updated');
      }).catch((error) => {
        console.log(error);
      }))
  }


  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        updateProfileData,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
