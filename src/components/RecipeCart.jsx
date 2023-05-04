import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaStarHalf } from "react-icons/fa";
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import LazyLoad from "react-lazy-load";
import ReactStars from "react-rating-stars-component";

const RecipeCart = ({ recipe }) => {
   const [favorite, setFavorite] = useState(false);
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
      <div className="border-t shadow-2xl rounded-md p-4 md:p-8">
         <div className="overflow-hidden hover:bg-black bg-transparent">
            <LazyLoad threshold={0.95}>
               <img
                  className="dish-img w-full h-72 hover:scale-125 duration-200"
                  src={picture}
                  alt={title}
               />
            </LazyLoad>
         </div>
         <div className="my-5 font-Lato">
            <p className="text-3xl font-Montserrat mb-5">{title}</p>
            <p className="pb-5">{description.slice(0, 150)}</p>
            {ingredients.slice(0, 6).map((ingredient, i) => (
               <p
                  className="text-lg pb-2 flex"
                  key={i}
               >
                  <span className="text-2xl text-yellow-cs mr-1.5 pt-1">
                     <BiRightArrowAlt />
                  </span>
                  <span>{ingredient}</span>
                  {}
               </p>
            ))}
            <p className="mt-5">
               <span className="text-xl font-medium">Cooking Method</span>
               {cooking_method}
            </p>
            <div className="">
               <ReactStars
                  classNames="my-2"
                  count={5}
                  size={30}
                  activeColor="#ffd700"
                  value={parseFloat(rating)}
                  edit={false}
                  half={true}
                  halfIcon={<FaStarHalf />}
               />
               <div className="flex items-center gap-4">
                  <button
                     disabled={favorite}
                     onClick={() => {
                        setFavorite(true);
                        toast.success("Favorite");
                     }}
                     className="btn btn-sm btn-outline btn-ghost gap-2"
                  >
                     Favorite
                  </button>
                  <p className="text-2xl">
                     {favorite ? (
                        <MdOutlineFavorite className="text-yellow-cs" />
                     ) : (
                        <MdFavoriteBorder />
                     )}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default RecipeCart;
