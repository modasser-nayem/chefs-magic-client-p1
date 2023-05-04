import React, { useContext } from "react";
import { authContext } from "../provider/authProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useContext(authContext);
   if (!loading) {
      if (user) {
         return children;
      } else {
         return (
            <Navigate
               to="/login"
               state={{ from: location }}
               replace
            />
         );
      }
   }
};

export default PrivateRoute;
