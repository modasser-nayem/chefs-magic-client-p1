import React, { useContext, useState } from "react";
import logo from "../assets/logo/chef.png";
import { MdOutlineShoppingCart, MdOutlineLogin } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { authContext } from "../provider/authProvider";

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
   const { user } = useContext(authContext);
   return (
      <div className="cs-container navbar bg-base-100 border-2 bg-opacity-0 h-[12vh]">
         <div className="flex-1">
            <Link
               className="flex items-center"
               to="/"
            >
               <img
                  className="h-16 pr-2"
                  src={logo}
                  alt="brand logo"
               />
               <p className="text-3xl font-bold font-kaushan">
                  <span className="text-yellow-cs">Chefs</span> Magic
               </p>
            </Link>
         </div>
         <div
            className={`bg-yellow-cs flex flex-col md:flex-row items-center absolute md:static md:z-auto z-10 w-full md:w-auto p-8 md:p-0 left-0 bg-opacity-0 right-0 transition-all md:transition-none duration-500 ${
               isOpen ? "bg-opacity-100 md:bg-opacity-0 top-[12vh]" : "-top-96"
            }`}
         >
            <div className="text-lg font-medium font-Lato flex flex-col md:flex-row items-center gap-8 md:mr-7 mb-7 md:mb-0">
               {navLink.map((nav, i) => (
                  <NavLink
                     className={({ isActive }) =>
                        isActive
                           ? "md:text-yellow-cs text-black"
                           : "cs-nav-link"
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
                  <MdOutlineShoppingCart className="cs-nav-link text-3xl" />
                  <span className="badge badge-sm indicator-item">8</span>
               </div>
               {user ? (
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
               ) : (
                  <Link
                     className="tooltip tooltip-left tooltip-warning cs-nav-link"
                     data-tip="Login"
                     to="/login"
                  >
                     <MdOutlineLogin className="text-3xl" />
                  </Link>
               )}
            </div>
         </div>
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
