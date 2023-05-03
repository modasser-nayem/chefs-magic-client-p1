import React from "react";
import {
   FaFacebookF,
   FaLinkedinIn,
   FaTwitter,
   FaYoutube,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { RxDoubleArrowRight } from "react-icons/rx";
import { BsSendFill } from "react-icons/bs";
import imgtest from "../assets/errorimg.png";

const Footer = () => {
   const imgArr = [1, 2, 3, 4, 5, 6, 7, 8];
   return (
      <div>
         <div className="cs-container bg-[#171616]  text-white">
            <div className="cs-footer grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-14">
               <div>
                  <h2 className="cs-footer-title">Contact</h2>
                  <p>
                     At vero eos et accusamus et iusto lits agnissmos ducimus.
                  </p>
                  <p className="icon-group">
                     <span className="footer-icon">
                        <MdLocationOn />
                     </span>
                     PO Box 16122 Collins Street West Victoria 8007 Australia
                  </p>
                  <p className="icon-group">
                     <span className="footer-icon">
                        <MdPhone />
                     </span>
                     +123 456 7890
                     <br />
                     +123 456 7890
                  </p>
                  <p className="icon-group w-min">
                     <span className="footer-icon">
                        <MdEmail />
                     </span>
                     alimodassernayem@gmail.com
                  </p>
               </div>
               <div>
                  <h2 className="cs-footer-title">Information</h2>
                  <p className="icon-group">
                     <RxDoubleArrowRight /> Products
                  </p>
                  <p className="icon-group">
                     <RxDoubleArrowRight /> Advanced Search
                  </p>
                  <p className="icon-group">
                     <RxDoubleArrowRight /> Site Map
                  </p>
                  <p className="icon-group">
                     <RxDoubleArrowRight /> Location
                  </p>
                  <p className="icon-group">
                     <RxDoubleArrowRight /> Terms & Condition
                  </p>
                  <p className="icon-group">
                     <RxDoubleArrowRight /> Privacy Policy
                  </p>
               </div>
               <div>
                  <h2 className="cs-footer-title">Our Newsletter</h2>
                  <p>
                     Sign up for our mailing list to get latest updates and
                     offers.
                  </p>
                  <div className="form-control my-4">
                     <div className="input-group">
                        <input
                           type="text"
                           placeholder="Search…"
                           className="input input-bordered"
                        />
                        <button className="cs-btn">
                           <BsSendFill />
                        </button>
                     </div>
                  </div>
                  <h2 className="cs-footer-title">Or In Touch</h2>
                  <div className="flex gap-4 items-center">
                     <p className="footer-icon w-fit">
                        <FaFacebookF />
                     </p>
                     <p className="footer-icon w-fit">
                        <FaTwitter />
                     </p>
                     <p className="footer-icon w-fit">
                        <FaLinkedinIn />
                     </p>
                     <p className="footer-icon w-fit">
                        <FaYoutube />
                     </p>
                  </div>
               </div>
               <div>
                  <h2 className="cs-footer-title">Instagram Feeds</h2>
                  <p>
                     At vero eos et accusamus et iusto lits agnissmos ducimus os
                     quidtiis praesetium ptatum mole deeniti.
                  </p>
                  <div className="flex gap-3 flex-wrap mt-5">
                     {imgArr.map((im, i) => (
                        <img
                           className="w-16 rounded-sm"
                           key={i}
                           src={imgtest}
                           alt="image"
                        />
                     ))}
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-black p-8">
            <p className="text-center text-white">
               Copyright © 2023 Chefs Magic, All Rights Reserved
            </p>
         </div>
      </div>
   );
};

export default Footer;
