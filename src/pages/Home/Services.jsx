import React from "react";
import { MdRestaurant, MdLocalCafe, MdOutlineNoDrinks } from "react-icons/md";
import ServiceCart from "../../components/ServiceCart";

const serviceData = [
   {
      id: "1",
      icon: <MdOutlineNoDrinks />,
      name: "Bar",
      description:
         "Nam and sheets Mauris pulvinar lorem. It only survived five centuries",
   },
   {
      id: "2",
      icon: <MdRestaurant />,
      name: "Restaurant",
      description:
         "Nam and sheets Mauris pulvinar lorem. It only survived five centuries",
   },
   {
      id: "3",
      icon: <MdLocalCafe />,
      name: "Cafe",
      description:
         "Nam and sheets Mauris pulvinar lorem. It only survived five centuries",
   },
];

const Services = () => {
   return (
      <div
         id="services"
         className="bg-gray-200 py-28"
      >
         <h2 className="cs-title cs-title-border">Our Services</h2>
         <p className="text-xl text-center italic p-5 mx-auto md:w-[600px]">
            Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae
         </p>
         <div className="cs-container mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {serviceData.map((service) => (
               <ServiceCart
                  key={service.id}
                  service={service}
               />
            ))}
         </div>
      </div>
   );
};

export default Services;
