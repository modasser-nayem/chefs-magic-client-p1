import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import Register from "../pages/Registration/Register";
import Login from "../pages/Registration/Login";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "recipes/:id",
            element: <ChefRecipes />,
            loader: ({ params }) =>
               fetch(
                  `https://chefsmagic-mdalimodassernayem-gmailcom.vercel.app/chefs/${params.id}`
               ),
         },
         {
            path: "register",
            element: <Register />,
         },
         {
            path: "login",
            element: <Login />,
         },
         {
            path: "blog",
            element: (
               <PrivateRoute>
                  <Blogs />
               </PrivateRoute>
            ),
         },
      ],
   },
]);

export default router;
