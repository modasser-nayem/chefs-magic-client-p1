import React from "react";
import { FaStarHalf } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";

const DishCart = ({ dish }) => {
   const { id, name, img, price, rating } = dish;
   return (
      <div className="border-t shadow-2xl rounded-md p-4">
         <div className="relative overflow-hidden hover:bg-black bg-transparent">
            <img
               className="dish-img w-full h-72 hover:scale-125 duration-200"
               src={img}
               alt={name}
            />
            <div className="img-child absolute hover:block hidden top-0 w-full h-full bg-black bg-opacity-40 text-white">
               <p className="text-3xl">Hello</p>
            </div>
         </div>
         <div className="my-5 text-center">
            <p className="text-3xl font-Montserrat">{name}</p>
            <ReactStars
               classNames="my-2 mx-auto"
               count={5}
               size={30}
               activeColor="#ffd700"
               value={rating}
               edit={false}
               half={true}
               halfIcon={<FaStarHalf />}
            />
            <p className="text-xl font-medium font-Lato">${price}</p>
         </div>
      </div>
   );
};

export default DishCart;
