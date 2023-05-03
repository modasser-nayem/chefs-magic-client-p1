import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
   return (
      <div className="">
         <Toaster
            toastOptions={{
               style: {
                  border: "2px solid #F5A84C",
               },
            }}
         />
         <Navbar />
         <div className="min-h-[50vh]">
            <Outlet />
         </div>

         <Footer />
      </div>
   );
};

export default MainLayout;
