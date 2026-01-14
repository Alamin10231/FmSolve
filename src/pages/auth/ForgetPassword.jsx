// import React from 'react'

// export const ForgetPassword = () => {
//   return (
//     <div>ForgetPassword</div>
//   )
// }
import React, { useContext, useState } from "react";
import forgetpasswordpic from "../../assets/images/forgetpassword.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/context/AuthProvider";

export const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { forgetpassword } = useContext(AuthContext);
  const handlebtn = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await forgetpassword(email);
      alert("Password reset email sent. Please check your inbox.");
      navigate("/verify-email");
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <div className="flex min-h-screen ">
        {/* Left Side – Image */}

        <div className="items-center justify-center hidden w-1/2 md:flex ">
          <img
            src={forgetpasswordpic}
            alt="Forget Password"
            className="object-contain w-3/4 "
          />
        </div>
        {/* Right Side – Login Form */}

        <div className="flex items-start justify-center w-full px-10 pb-20 md:w-3/5 pt-28 bg-card text-card-foreground">
          <div className="w-full max-w-lg space-y-5">
            {/* Logo */}
            <img src={logo} alt="Logo" className="mb-4 w-36" />

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-tight text-secondary">
              Verify Your Email
            </h1>

            {/* Sub text */}
            <p className="text-lg text-muted-foreground">
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
                  className="w-full px-5 py-3 border rounded-xl bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              {/* Button */}
              <Button
                onClick={handlebtn}
                type="submit"
                disabled={submitting}
                className="w-full py-3 my-4 text-lg font-medium text-white transition rounded-xl bg-secondary hover:opacity-90"
              >
                {submitting ? "Sending…" : "Send"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
