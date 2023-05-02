import React, { useState } from "react";
import logo from "../assets/logo/chef.png";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const navLink = [
   {
      path: "/",
      name: "Home",
   },
   {
      path: "/about",
      name: "About Us",
   },
   {
      path: "/blog",
      name: "Blog",
   },
   {
      path: "/contact",
      name: "Contact",
   },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div className="cs-container navbar bg-base-100 border-2 bg-opacity-0 h-[12vh]">
         <div className="flex-1">
            <img
               className="h-16 pr-2"
               src={logo}
               alt="brand logo"
            />
            <p className="text-3xl font-bold font-kaushan">
               <span className="text-yellow-cs">Chefs</span> Magic
            </p>
         </div>
         <div
            className={`bg-yellow-cs flex flex-col md:flex-row items-center absolute md:static md:z-auto z-10 w-full md:w-auto p-8 md:p-0 left-0 bg-opacity-0 right-0 transition-all md:transition-none duration-500 ${
               isOpen ? "bg-opacity-100 md:bg-opacity-0 top-[12vh]" : "-top-96"
            }`}
         >
            {/*  */}
            <div className="text-lg font-medium font-Lato flex flex-col md:flex-row items-center gap-8 md:mr-7 mb-7 md:mb-0">
               {navLink.map((nav, i) => (
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "md:text-yellow-cs text-black"
                           : "md:hover:text-yellow-cs hover:text-black text-white"
                     }
                     key={i}
                     to={nav.path}
                  >
                     {nav.name}
                  </NavLink>
               ))}
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-end md:items-center">
               <div className="indicator mr-4">
                  <MdOutlineShoppingCart className="md:hover:text-yellow-cs hover:text-black text-white text-3xl" />
                  <span className="badge badge-sm indicator-item">8</span>
               </div>
               <div
                  className="dropdown dropdown-end tooltip tooltip-left"
                  data-tip="Ali Modasser Nayem"
               >
                  <label
                     tabIndex={0}
                     className="btn btn-ghost btn-circle avatar"
                  >
                     <div className="w-12 rounded-full">
                        <img
                           className="bg-gray-500"
                           src="https://avatars.githubusercontent.com/u/96650000?s=48&v=4"
                        />
                     </div>
                  </label>
                  <ul
                     tabIndex={0}
                     className="menu menu-compact dropdown-content mt-3 p-2 shadow-xl bg-base-100 rounded-box w-52"
                  >
                     <li>
                        <Link
                           to="/profile"
                           className="justify-between"
                        >
                           Profile
                        </Link>
                     </li>
                     <li>
                        <p>Logout</p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         {/*  */}
         <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
               <FontAwesomeIcon
                  className="text-3xl md:text-4xl"
                  icon={isOpen ? faClose : faBars}
               />
            </button>
         </div>
      </div>
   );
};

export default Navbar;
