import React from "react";
import { FaStarHalf } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const RecipeCart = ({ recipe }) => {
   console.log(recipe);
   const {
      title,
      author,
      cooking_method,
      description,
      ingredients,
      picture,
      rating,
   } = recipe;
   return (
      <div className="border-t shadow-2xl rounded-md p-4">
         <div className="overflow-hidden hover:bg-black bg-transparent">
            <img
               className="dish-img w-full h-72 hover:scale-125 duration-200"
               src={picture}
               alt={title}
            />
         </div>
         <div className="my-5 text-center">
            <p className="text-3xl font-Montserrat">{title}</p>
            <ReactStars
               classNames="my-2 mx-auto"
               count={5}
               size={30}
               activeColor="#ffd700"
               value={parseFloat(rating)}
               edit={false}
               half={true}
               halfIcon={<FaStarHalf />}
            />
            <p className="text-xl font-medium font-Lato">${"sf"}</p>
         </div>
      </div>
   );
};

export default RecipeCart;
