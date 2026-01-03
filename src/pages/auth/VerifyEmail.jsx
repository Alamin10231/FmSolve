import React from "react";
import loginImage from "../../assets/images/newpassword.png";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export const VerifyEmail = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side – Image (Matches ForgetPassword) */}
      <div className="items-center justify-center hidden w-1/2 md:flex">
        <img src={loginImage} alt="Login" className="object-contain w-3/4" />
      </div>

      {/* Right Side – OTP Form */}
      <div className="flex items-center justify-center w-full px-10 pb-20 md:w-3/5 pt-28">
        <div className="w-full max-w-lg space-y-5">
          {/* Logo */}
          <img src={logo} alt="Logo" className="mb-4 w-36" />

          {/* Heading - Size matched to 5xl semibold */}
          <h1 className="text-5xl font-semibold leading-tight text-[#f06525]">
            Confirm It's You
          </h1>

          {/* Sub text - Size matched to text-lg */}
          <p className="text-lg text-gray-600">
            This helps us keep your account secure.
          </p>

          {/* OTP Form */}
          <form className="mt-5 space-y-6">
            <div className="flex justify-between gap-2 py-2">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  placeholder="0"
                  className="w-12 h-14 text-2xl font-bold text-center border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#f06525] border-gray-300"
                />
              ))}
            </div>

            <Link to={"/updatedpassword"}>
              {/* Button - Height and font matched */}
              <Button
                type="submit"
                className="w-full py-3 my-4 text-lg font-medium text-white transition rounded-xl bg-[#f06525] hover:opacity-90"
              >
                Send
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
