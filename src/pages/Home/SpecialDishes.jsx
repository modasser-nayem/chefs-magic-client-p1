import React, { useEffect, useState } from "react";
import DishCart from "../../components/DishCart";
import Loading from "../../components/Loading";
import { server } from "../../main";

const SpecialDishes = () => {
   const [dishes, setDishes] = useState(null);
   useEffect(() => {
      fetch(`${server}/dishes`)
         .then((res) => res.json())
         .then((data) => setDishes(data.slice(0, 8)));
   }, []);
   return (
      <>
         {!dishes ? (
            <Loading />
         ) : (
            <div
               id="dishes"
               className="bg-white py-28"
            >
               <h2 className="cs-title cs-title-border">Special Dishes</h2>
               <p className="text-xl text-center italic p-5 mx-auto md:w-[600px]">
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae
               </p>
               <div className="cs-container mt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {dishes &&
                     dishes.map((dish) => (
                        <DishCart
                           key={dish.id}
                           dish={dish}
                        />
                     ))}
               </div>
            </div>
         )}
      </>
   );
};

export default SpecialDishes;
