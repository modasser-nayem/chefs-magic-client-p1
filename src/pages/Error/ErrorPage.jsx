import React from "react";
import errorImg from "../../assets/errorimg.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
   return (
      <div className="h-screen w-full flex justify-center">
         <div className="text-center mt-14">
            <img
               className="h-[200px] md:h-[400px]"
               src={errorImg}
               alt="error image"
            />
            <h2 className="text-2xl font-semibold">Page not found</h2>
            <Link
               to="/"
               className="text-black cs-btn mt-10 block w-fit mx-auto"
            >
               Back Home
            </Link>
         </div>
      </div>
   );
};

export default ErrorPage;
