import React from "react";
import { MdRestaurant } from "react-icons/md";

const Loading = () => {
   return (
      <div className="flex flex-col items-center gap-5 justify-center h-[80vh] ">
         <p className="text-6xl bg-yellow-cs text-white p-2 rounded-sm animate-bounce">
            <MdRestaurant />
         </p>
         <h2 className="text-5xl text-yellow-cs font-bold font-kaushan">
            Loading...
         </h2>
      </div>
   );
};

export default Loading;
