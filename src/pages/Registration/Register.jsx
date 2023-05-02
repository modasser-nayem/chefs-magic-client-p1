import React, { useState } from "react";
import InputGroup from "../../components/InputGroup";
import { Link } from "react-router-dom";

const Register = () => {
   const [isAgree, setIsAgree] = useState(false);
   const [user, setUser] = useState({
      name: "",
      email: "",
      password: "",
      photo_url: "",
      nameError: "",
      emailError: "",
      passwordError: "",
      photo_urlError: "",
   });

   const changeHandler = (e) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (user.name === "") {
         setUser({
            ...user,
            nameError: "Please provide your name",
         });
      } else if (user.email === "") {
         setUser({
            ...user,
            nameError: "",
            emailError: "Please provide your email",
         });
      } else if (user.password === "") {
         setUser({
            ...user,
            emailError: "",
            passwordError: "Please provide a password",
         });
      } else if (user.password.length < 6) {
         setUser({
            ...user,
            passwordError: "",
            passwordError: "Password must be a 6 character",
         });
      } else if (user.photo_url === "") {
         setUser({
            ...user,
            passwordError: "",
            photo_urlError: "Please provide photo URL",
         });
      } else {
         console.log(user);
      }
   };
   return (
      <div className="p-8">
         <h3 className="cs-title cs-title-border mt-8">Sign Up</h3>
         <form
            onSubmit={handleSubmit}
            className="border md:w-[650px] mx-auto mt-10 p-10"
         >
            <InputGroup
               label="Username"
               type="text"
               name="name"
               value={user.name}
               changeHandler={changeHandler}
               error={user.nameError}
            />
            <InputGroup
               label="Email"
               type="text"
               name="email"
               value={user.email}
               changeHandler={changeHandler}
               error={user.emailError}
            />
            <InputGroup
               label="Password"
               type="text"
               name="password"
               value={user.password}
               changeHandler={changeHandler}
               error={user.passwordError}
            />
            <InputGroup
               label="Photo URL"
               type="text"
               name="photo_url"
               value={user.photo_url}
               changeHandler={changeHandler}
               error={user.photo_urlError}
            />
            <div className="text-xl relative font-medium mb-5">
               <input
                  onClick={() => setIsAgree(!isAgree)}
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
               />
               <label htmlFor="vehicle1"> Remember Me</label>
               <span className="text-lg absolute right-10 font-normal">
                  Already Register,
                  <Link
                     to="/login"
                     className="text-yellow-cs text-lg"
                  >
                     Login here
                  </Link>
               </span>
            </div>
            <button
               disabled={isAgree}
               className={`cs-btn w-full ${isAgree && ""}`}
            >
               Submit
            </button>
         </form>
      </div>
   );
};

export default Register;
