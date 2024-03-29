import React from "react";
import { authContext } from "../../provider/authProvider";
import { useContext } from "react";
import InputGroup from "../../components/InputGroup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useState } from "react";

const UpdateProfile = () => {
   const { user, updateUserProfile } = useContext(authContext);
   const { photoURL, displayName, email } = user;
   const navigate = useNavigate();
   const [isAgree, setIsAgree] = useState(true);
   const [updateUser, setUpdateUser] = useState({
      displayName: displayName,
      photoURL: photoURL,
      nameError: "",
      photoError: "",
      success: "User Updated Successfully",
   });

   const changeHandler = (e) => {
      setUpdateUser({
         ...updateUser,
         [e.target.name]: e.target.value,
      });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      if (user.displayName === "") {
         setUpdateUser({
            ...updateUser,
            nameError: "Please provide your name",
         });
      } else if (user.photoURL === "") {
         setUpdateUser({
            ...updateUser,
            nameError: "",
            photoError: "Please provide your photo url",
         });
      } else {
         updateUserProfile(user, updateUser.displayName, updateUser.photoURL);
         toast.success(updateUser.success);
         // .then(() => {
         //    navigate("/profile");
         setUpdateUser({
            ...updateUser,
            displayName: "",
            photoURL: "",
            nameError: "",
            photoError: "",
         });
         // })
         // .catch((error) => {
         //    toast.error(error.code.slice(5));
         // });
      }
   };
   return (
      <div
         id="services"
         className="py-24"
      >
         <form
            onSubmit={handleSubmit}
            className="border md:w-[650px] mx-auto mt-10 p-10"
         >
            <InputGroup
               label="Name"
               type="text"
               name="displayName"
               value={updateUser.displayName}
               changeHandler={changeHandler}
               error={updateUser.nameError}
            />
            <InputGroup
               label="Photo URL"
               type="text"
               name="photoURL"
               value={updateUser.photoURL}
               changeHandler={changeHandler}
               error={updateUser.photoError}
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
            </div>
            <button
               type="submit"
               disabled={isAgree}
               className={`cs-btn w-full ${isAgree && "btn-disabled"}`}
            >
               Update Profile
            </button>
         </form>
      </div>
   );
};

export default UpdateProfile;
