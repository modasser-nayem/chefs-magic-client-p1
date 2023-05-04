import React from "react";
import ReactDOM from "react-dom/client";
import "./tailwind.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./provider/authProvider";

export const server = "https://chefs-magic.onrender.com";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>
);
