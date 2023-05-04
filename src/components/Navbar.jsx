import React, { useContext, useState } from "react";
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
import LazyLoad from "react-lazy-load";

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
   return (
      <div className="cs-container sticky z-40 top-0 navbar bg-white border-2 h-[12.5vh]">
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
                     smooth
                     activeStyle={{ color: "red" }}
                     key={i}
                     to={nav.path}
                     className="cs-nav-link"
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
                                 <LazyLoad threshold={0.95}>
                                    <img
                                       className="bg-yellow-cs"
                                       src={user.photoURL}
                                    />
                                 </LazyLoad>
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
                                 <Link
                                    to="/update-profile"
                                    className="text-lg"
                                 >
                                    <FaUserEdit /> Update
                                 </Link>
                              </li>
                              <li>
                                 <p
                                    className="text-lg"
                                    onClick={() => logoutUser("sign out user")}
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
