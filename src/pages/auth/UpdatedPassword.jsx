// import React, { useState } from "react";
// import loginImage from "../../assets/images/confirm.png";
// import logo from "../../assets/logo.png";
// import { Link, useNavigate } from "react-router";
// import { Button } from "@/components/ui/button";

// const UpdatedPassword = () => {
//   const navigate = useNavigate();
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const handlebtn = (e) => {
//     e.preventDefault();

//     console.log("button clicked", email, password);
//     alert("password updated Successfully");
//     navigate("/login");
//   };
//   return (
//     <>
//       <div className="flex min-h-screen ">
//         {/* Left Side – Image */}

//         <div className="items-center justify-center hidden w-1/2 md:flex ">
//           <img src={loginImage} alt="Login" className="object-contain w-3/4 " />
//         </div>
//         {/* Right Side – Login Form */}

//         <div className="flex items-start justify-center w-full px-10 pb-20 md:w-3/5 pt-28">
//           <div className="w-full max-w-lg space-y-5">
//             {/* Logo */}
//             <img src={logo} alt="Logo" className="mb-4 w-36" />

//             {/* Heading */}
//             <h1 className="text-5xl font-semibold leading-tight text-secondary">
//               Welcome Back 👋
//             </h1>

//             {/* Sub text */}
//             <p className="text-lg text-gray-600">
//               Please login to your account
//             </p>

//             {/* Form */}
//             <form className="space-y-6" onSubmit={handlebtn}>
//               {/* Email */}
//               <div>
//                 <label className="block mb-2 text-base font-medium">
//                   Password
//                 </label>
//                 <input
//                   type="text"
//                   value={password}
//                   onChange={(e) => setemail(e.target.value)}
//                   placeholder="New Password"
//                   className="w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>

//               {/* Password */}
//               <div>
//                 <label className="block mb-2 text-base font-medium">
//                   Password
//                 </label>
//                 <input
//                   type="text"
//                   value={password}
//                   onChange={(e) => setpassword(e.target.value)}
//                   placeholder="Confirm Password"
//                   className="w-full px-5 py-3 text-base border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
//                 />
//               </div>

//               {/* Button */}

//               <Button
//                 type="submit"
//                 className="w-full py-3 text-lg font-medium text-white transition rounded-xl bg-secondary hover:opacity-90"
//               >
//                 Save
//               </Button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default UpdatedPassword;
