import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import SpecialDishes from "./SpecialDishes";
import Chefs from "./Chefs";

const Home = () => {
   return (
      <div id="home">
         <Banner />
         <Chefs />
         <Services />
         <SpecialDishes />
      </div>
   );
};

export default Home;
