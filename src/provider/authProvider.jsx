import React, { createContext, useEffect, useState } from "react";
import {
   GithubAuthProvider,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signInWithPopup,
   signOut,
   updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const googleProvider = new GoogleAuthProvider();
   const githubProvider = new GithubAuthProvider();

   const createNewUser = (email, password, name, photo_url, navigate) => {
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredentials) => {
            updateUserProfile(userCredentials.user, name, photo_url);
            toast.success("User Created Successfully");
            navigate("/login");
         })
         .catch((error) => {
            toast.error(error.message.slice(22, 42));
         });
   };

   const updateUserProfile = (user, name, photo_url) => {
      updateProfile(user, { displayName: name, photoURL: photo_url });
   };

   const loginCreatedUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const loginWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
   };

   const loginWithGithub = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
   };

   const logoutUser = () => {
      signOut(auth)
         .then(() => {
            toast.success("sign out user");
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const authInfo = {
      user,
      createNewUser,
      loginCreatedUser,
      loginWithGoogle,
      loginWithGithub,
      logoutUser,
      loading,
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (ObserverUser) => {
         console.log(ObserverUser);
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
