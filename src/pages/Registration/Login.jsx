import React, { useContext, useState } from "react";
import InputGroup from "../../components/InputGroup";
import googleLogo from "../../assets/logo/google.png";
import githubLogo from "../../assets/logo/github.png";
import { Link } from "react-router-dom";
import { authContext } from "../../provider/authProvider";

const Login = () => {
   const [isAgree, setIsAgree] = useState(true);
   const { loginWithGoogle, loginWithGithub } = useContext(authContext);
   const [user, setUser] = useState({
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
   });

   const changeHandler = (e) => {
      setUser({
         ...user,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (user.email === "") {
         setUser({
            ...user,
            emailError: "Please provide your email",
         });
      } else if (user.password === "") {
         setUser({
            ...user,
            emailError: "",
            passwordError: "Please provide a password",
         });
      } else {
         console.log(user);
      }
   };

   const googleLogin = () => {
      loginWithGoogle()
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const githubLogin = () => {
      loginWithGithub()
         .then((result) => {
            console.log(result);
         })
         .catch((error) => {
            console.log(error);
         });
   };
   return (
      <div className="p-8">
         <h3 className="cs-title cs-title-border mt-8">Sign In</h3>
         <form
            onSubmit={handleSubmit}
            className="border md:w-[650px] mx-auto mt-10 p-10"
         >
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
                  Dont't have an Account,
                  <Link
                     to="/register"
                     className="text-yellow-cs text-lg"
                  >
                     Register here
                  </Link>
               </span>
            </div>
            <button
               type="submit"
               disabled={isAgree}
               className={`cs-btn w-full ${isAgree && "btn-disabled"}`}
            >
               Submit
            </button>

            <div className="mt-16">
               <div
                  onClick={googleLogin}
                  className="cs-login-btn"
               >
                  <img
                     className="w-7 rounded-full"
                     src={googleLogo}
                     alt="googleLogo"
                  />
                  Login With Google
               </div>
               <div
                  onClick={githubLogin}
                  className="cs-login-btn mt-5"
               >
                  <img
                     className="w-7 rounded-full"
                     src={githubLogo}
                     alt="githubLogo"
                  />
                  Login With Github
               </div>
            </div>
         </form>
      </div>
   );
};

export default Login;
