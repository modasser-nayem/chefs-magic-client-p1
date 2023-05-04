import React from "react";
import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";
import { BsSearch } from "react-icons/bs";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Banner = () => {
   const divStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundSize: "cover",
      height: "600px",
   };
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
                     <div className="w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 text-white text-center md:p-0 p-5">
                        <h3 className="text-3xl font-Montserrat">
                           Hello everyone, Welcome our website
                        </h3>
                        <p className="text-yellow-cs text-5xl font-extrabold font-kaushan mt-3">
                           American Chefs Magic Recipes
                        </p>
                        <div className="form-control my-8 md:w-[400px]">
                           <div className="input-group">
                              <input
                                 type="text"
                                 placeholder="Search recipes"
                                 className="input w-full input-bordered"
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
