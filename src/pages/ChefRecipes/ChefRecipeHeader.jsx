import React from "react";
import { BiLike } from "react-icons/bi";
import {
   FaFacebookF,
   FaLinkedinIn,
   FaTwitter,
   FaYoutube,
} from "react-icons/fa";

const ChefRecipeHeader = ({ chef }) => {
   const { description, experience, likes, name, picture, recipes, _id } = chef;
   return (
      <div className="pt-24 grid md:grid-cols-2 gap-10 md:gap-20">
         <div className="">
            <img
               className="w-full h-full"
               src={picture}
               alt=""
            />
         </div>
         <div className="">
            <h3 className="text-3xl font-bold font-kaushan">{name}</h3>
            <div className="cs-chef-social-icon flex gap-4 items-center my-8">
               <p>
                  <FaFacebookF />
               </p>
               <p>
                  <FaTwitter />
               </p>
               <p>
                  <FaLinkedinIn />
               </p>
               <p>
                  <FaYoutube />
               </p>
            </div>
            <p className="text-lg font-Lato my-5">{description}</p>
            <div className="cs-chef-details">
               <h3 className="text-2xl font-Montserrat mt-10 mb-3">
                  {name} Info
               </h3>
               <p>
                  <span>Years of experience:</span>
                  {experience}
               </p>
               <p>
                  <span>Numbers of recipes:</span>
                  {recipes}
               </p>
               <p className="flex items-center">
                  <span>Likes:</span>
                  {likes}
                  <span className="text-2xl ml-1">
                     <BiLike />
                  </span>
               </p>
            </div>
         </div>
      </div>
   );
};

export default ChefRecipeHeader;
