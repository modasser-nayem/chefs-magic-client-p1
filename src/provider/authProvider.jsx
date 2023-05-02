import React, { createContext, useEffect, useState } from "react";
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   onAuthStateChanged,
   signInWithPopup,
   signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const loginWithGoogle = () => {
      return signInWithPopup(auth, googleProvider);
   };

   const loginWithGithub = () => {
      return signInWithPopup(auth, githubProvider);
   };

   const logoutUser = () => {
      signOut(auth)
         .then(() => {
            console.log("sign out user");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const authInfo = {
      user,
      loginWithGoogle,
      loginWithGithub,
      logoutUser,
      loading,
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (ObserverUser) => {
         setUser(ObserverUser);
         setLoading(false);
      });
      return () => unsubscribe();
   }, []);
   return (
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
   );
};

export default AuthProvider;
