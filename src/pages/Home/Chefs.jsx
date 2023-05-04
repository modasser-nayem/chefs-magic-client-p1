import React, { useEffect, useState } from "react";
import ChefCart from "../../components/ChefCart";
import { server } from "../../main";
import Loading from "../../components/Loading";

const Chefs = () => {
   const [chefs, setChefs] = useState(null);
   useEffect(() => {
      fetch(`${server}/chefs`)
         .then((res) => res.json())
         .then((data) => setChefs(data));
   }, []);
   return (
      <>
         {!chefs ? (
            <Loading />
         ) : (
            <div
               id="chefs"
               className="bg-white py-28"
            >
               <h2 className="cs-title cs-title-border">Our Chefs</h2>
               <p className="text-xl text-center italic p-5 mx-auto md:w-[600px]">
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                  illo inventore veritatis et quasi architecto beatae
               </p>
               <div className="cs-container mt-8 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
                  {chefs &&
                     chefs.map((chef) => (
                        <ChefCart
                           key={chef._id}
                           chef={chef}
                        />
                     ))}
               </div>
            </div>
         )}
      </>
   );
};

export default Chefs;
