import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BiRightArrowAlt, BiLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const ChefCart = ({ chef }) => {
   const { experience, likes, name, picture, recipes, _id } = chef;
   return (
      <div className="shadow-2xl p-5">
         <img
            className="w-44 h-44 rounded-full mx-auto"
            src={picture}
            alt={name}
         />
         <div className="mt-10 chef-cart-body">
            <h4 className="text-2xl text-gray-600 pb-3 font-semibold font-Montserrat">
               {name}
            </h4>
            <p>
               <span className="cart-icon">
                  <BiRightArrowAlt />
               </span>
               <span className="font-medium">Years of experience</span>{" "}
               {experience}
            </p>
            <p>
               <span className="cart-icon">
                  <BiRightArrowAlt />
               </span>
               <span className="font-medium">Numbers of recipes</span> {recipes}
            </p>
            <p>
               <span className="cart-icon">
                  <BiRightArrowAlt />
               </span>
               <span className="font-medium">Likes</span>
               <span className="text-red-600">{likes}</span>
               <span className="text-2xl">
                  <BiLike />
               </span>
            </p>
            <Link
               to={`/recipes/${_id}`}
               className="cs-btn py-2 text-lg text-center mt-5 block"
            >
               View Recipes
            </Link>
         </div>
      </div>
   );
};

export default ChefCart;
