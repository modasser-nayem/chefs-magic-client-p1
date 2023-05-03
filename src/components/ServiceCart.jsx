import React from "react";

const ServiceCart = ({ service }) => {
   const { icon, name, description } = service;
   return (
      <div className="bg-white px-10 py-16  text-center flex flex-col gap-4 justify-center text-gray-600">
         <p className="text-5xl text-yellow-cs w-fit mx-auto">{icon}</p>
         <p className="text-3xl font-Montserrat">{name}</p>
         <p className="text-lg font-Lato">{description}</p>
      </div>
   );
};

export default ServiceCart;
