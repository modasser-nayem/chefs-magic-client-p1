import React, { useContext } from "react";
import { authContext } from "../../provider/authProvider";

const Home = () => {
   const data = useContext(authContext);
   console.log(data);
   return <div>Home</div>;
};

export default Home;
