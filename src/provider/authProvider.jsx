import React, { createContext } from "react";

export const authContext = createContext();

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const authInfo = {
      user,
   };
   return (
      <authContext.Provider value={authInfo}>{children}</authContext.Provider>
   );
};

export default AuthProvider;
