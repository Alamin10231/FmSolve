// import React from 'react'

// export const ForgetPassword = () => {
//   return (
//     <div>ForgetPassword</div>
//   )
// }
import React, { useState } from "react";
import loginImage from "../../assets/images/loginpic.png";
import logo from "../../assets/logo.png";
import { Link,  useNavigate } from "react-router";

 export const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  
  const handlebtn = (e) => {
    e.preventDefault();

    console.log("button clicked", email, );
    alert("Login Successful");
    navigate("/");
  };
  return (
    <>
      <div className="flex min-h-screen ">
        {/* Left Side – Image */}

        <div className="items-center justify-center hidden w-1/2 md:flex ">
          <img src={loginImage} alt="Login" className="object-contain w-3/4 " />
        </div>
        {/* Right Side – Login Form */}
        
<div className="flex items-start justify-center w-full px-10 pb-20 md:w-3/5 pt-28">
  <div className="w-full max-w-lg space-y-5">
    
    {/* Logo */}
    <img src={logo} alt="Logo" className="mb-4 w-36" />

    {/* Heading */}
    <h1 className="text-5xl font-semibold leading-tight text-secondary">
      Verify Your Email
    </h1>

    {/* Sub text */}
    <p className="text-lg text-gray-600">
    This helps us keep your account secure.
    </p>

    {/* Form */}
    <form className="space-y-6" onSubmit={handlebtn}>
      
      {/* Email */}
      <div>
        <label className="block mb-2 text-base font-medium">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

    

      {/* Button */}
         <Link to="/verify-email">
    

      <button
        type="submit"
        className="w-full py-3 my-4 text-lg font-medium text-white transition rounded-xl bg-secondary hover:opacity-90"
      >
        Send
      </button>
     </Link>
     
    </form>

   

  </div>
</div>

      </div>
    </>
  );
};


