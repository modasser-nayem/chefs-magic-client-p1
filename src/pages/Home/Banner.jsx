import React from "react";
import banner1 from "../../assets/banner/banner1.jfif";
import banner2 from "../../assets/banner/banner2.jfif";
import banner3 from "../../assets/banner/banner3.jfif";
import { BsSearch } from "react-icons/bs";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";

const Banner = () => {
   const [searchText, setSearchText] = useState("");
   const divStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      height: "600px",
   };
   //    .hero::before {
   //     content: "";
   //     position: absolute;
   //     top: 0px;
   //     right: 0px;
   //     bottom: 0px;
   //     left: 0px;
   //     background-color: rgba(0,0,0,0.25);
   // }
   const slideImages = [
      {
         url: `${banner1}`,
         caption: "Slide 1",
      },
      {
         url: `${banner2}`,
         caption: "Slide 2",
      },
      {
         url: `${banner3}`,
         caption: "Slide 3",
      },
   ];

   return (
      <div>
         <div className="slide-container">
            <Slide>
               {slideImages.map((slideImage, index) => (
                  <div
                     key={index}
                     style={{
                        ...divStyle,
                        backgroundImage: `url(${slideImage.url})`,
                     }}
                  >
                     <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white">
                        <h3 className="text-3xl font-Montserrat">
                           Hello everyone, Welcome our website
                        </h3>
                        <p className="text-yellow-cs text-5xl font-extrabold font-kaushan mt-3">
                           American Chefs Magic Recipes
                        </p>
                        <div className="form-control my-8 w-[400px]">
                           <div className="input-group">
                              <input
                                 type="text"
                                 placeholder="Search recipes"
                                 className="input w-full input-bordered"
                                 value={searchText}
                              />
                              <button className="cs-btn">
                                 <BsSearch />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Slide>
         </div>
      </div>
   );
};

export default Banner;

// .aws-btn {

//     --slider-height-percentage: 48%;
//     --slider-transition-duration: 441ms;
//     --organic-arrow-thickness: 5px;
//     --organic-arrow-border-radius: 10px;
//     --organic-arrow-height: 45px;
//     --organic-arrow-color: #26456f;
//     --control-button-width: 15%;
//     --control-button-height: 25%;
//     --control-button-background: transparent;
//     --control-bullet-color: #f0a400;
//     --control-bullet-active-color: #ffffff;
//     --loader-bar-color: #efa31f;
//     --loader-bar-height: 9px;
//     }
