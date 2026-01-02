import React, { useState } from "react";
import loginImage from "../../assets/images/loginpic.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";

export const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handlebtn = (e) => {
    e.preventDefault();

   if(password !== confirmPassword){
    setError("Passwords do not match");
    return;
   }

    setError("");
    console.log({
      fullName,
      email,
      password,
    });

    // after success
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-purple-500">
      
      {/* Left Side – Image */}
      <div className="items-center justify-center hidden w-1/2 bg-primary md:flex">
        <img
          src={loginImage}
          alt="Register"
          className="object-contain w-3/4"
        />
      </div>

      {/* Right Side – Form */}
      <div className="flex items-start justify-center w-full px-10 pt-24 pb-20 bg-white md:w-1/2">
        <div className="w-full max-w-lg space-y-4">

          {/* Logo */}
          <img src={logo} alt="Logo" className="w-36" />

          {/* Heading */}
          <h1 className="text-5xl font-semibold text-secondary">
            Create Your Account
          </h1>

          {/* Sub Text */}
          <p className="text-lg text-gray-600">
            Get instant access to AI-powered FM insights and executive-ready
            reports.
          </p>

          {/* Form */}
          <form className="space-y-6" onSubmit={handlebtn}>
            
            {/* Full Name */}
            <div>
              <label className="block mb-2 text-base font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-base font-medium">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-base font-medium">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block mb-2 text-base font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-500">{error}</p>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-medium text-white transition rounded-xl bg-primary hover:opacity-90"
            >
              Register
            </button>
          </form>

          {/* Login */}
          <p className="pt-6 text-base text-center text-gray-700">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-primary">
              Login
            </a>
          </p>

        </div>
      </div>
    </div>
  );
};
