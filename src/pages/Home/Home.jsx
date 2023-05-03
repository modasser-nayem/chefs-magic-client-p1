import React, { useContext } from "react";
import { authContext } from "../../provider/authProvider";
import Banner from "./Banner";
import Services from "./Services";
import SpecialDishes from "./SpecialDishes";

const Home = () => {
   // const data = useContext(authContext);
   // console.log(data);
   return (
      <div className="">
         <Banner />
         <Services />
         <SpecialDishes />
      </div>
   );
};

export default Home;
