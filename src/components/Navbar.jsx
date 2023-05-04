import React, { useContext, useState } from "react";
import "./navActive.css";
import logo from "../assets/logo/chef.png";
import {
   MdOutlineShoppingCart,
   MdOutlineLogin,
   MdLogout,
} from "react-icons/md";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { authContext } from "../provider/authProvider";
import { NavHashLink } from "react-router-hash-link";
import { useRef } from "react";

const navLink = [
   {
      path: "/",
      name: "Home",
   },
   {
      path: "/#chefs",
      name: "Chefs",
   },
   {
      path: "/#dishes",
      name: "Dishes",
   },
   {
      path: "/#services",
      name: "services",
   },
   {
      path: "/blog",
      name: "Blog",
   },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { user, logoutUser, loading } = useContext(authContext);
   const [navActive, setNavActive] = useState(false);
   return (
      <div className="cs-container  top-0 navbar bg-white border-2 h-[12.5vh]">
         <div className="flex-1">
            <Link
               className="flex items-center"
               to="/"
            >
               <img
                  className="h-12 pr-2"
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
               isOpen
                  ? "bg-opacity-100 md:bg-opacity-0 top-[12vh]"
                  : "-top-[700px]"
            }`}
         >
            <div className="text-lg font-medium font-Lato flex flex-col md:flex-row items-center gap-8 md:mr-7 mb-7 md:mb-0">
               {navLink.map((nav, i) => (
                  <NavHashLink
                     onClick={() => setNavActive(true)}
                     smooth
                     activeClassName="nav-active"
                     className={`cs-nav-link ${
                        navActive ? "text-yellow-cs" : ""
                     }`}
                     key={i}
                     to={nav.path}
                  >
                     {nav.name}
                  </NavHashLink>
               ))}
            </div>
            <div className="flex flex-col md:flex-row gap-3 items-end md:items-center">
               <div className="indicator mr-4">
                  <MdOutlineShoppingCart className="cs-nav-link text-3xl" />
                  <span className="badge badge-sm indicator-item">8</span>
               </div>
               {!loading && (
                  <>
                     {user ? (
                        <div
                           className="dropdown dropdown-end tooltip tooltip-left"
                           data-tip={user.displayName}
                        >
                           <label
                              tabIndex={0}
                              className="btn btn-ghost btn-circle avatar"
                           >
                              <div className="w-12 rounded-full">
                                 <img
                                    className="bg-yellow-cs"
                                    src={user.photoURL}
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
                                    className="text-lg"
                                 >
                                    <FaUser />
                                    Profile
                                 </Link>
                              </li>
                              <li>
                                 <p className="text-lg">
                                    <FaUserEdit /> Update
                                 </p>
                              </li>
                              <li>
                                 <p
                                    className="text-lg"
                                    onClick={() => logoutUser()}
                                 >
                                    <MdLogout /> Logout
                                 </p>
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
                  </>
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
