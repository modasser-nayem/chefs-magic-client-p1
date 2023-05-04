import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import ChefRecipes from "../pages/ChefRecipes/ChefRecipes";
import Register from "../pages/Registration/Register";
import Login from "../pages/Registration/Login";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoute";
import { server } from "../main";
import Profile from "../pages/Profile/Profile";
import UpdateProfile from "../pages/Profile/UpdateProfile";

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
            element: (
               <PrivateRoute>
                  <ChefRecipes />
               </PrivateRoute>
            ),
            loader: ({ params }) => fetch(`${server}/chefs/${params.id}`),
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
            element: <Blogs />,
         },
         {
            path: "profile",
            element: (
               <PrivateRoute>
                  <Profile />
               </PrivateRoute>
            ),
         },
         {
            path: "update-profile",
            element: (
               <PrivateRoute>
                  <UpdateProfile />
               </PrivateRoute>
            ),
         },
      ],
   },
]);

export default router;
