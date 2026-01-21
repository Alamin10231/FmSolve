import React, { useState } from "react";
import registerImage from "../../assets/images/register.svg";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Button } from "@/components/ui/button";

// import { AuthContext } from "../../context/AuthProvider";
// const {theme} = useContext(AuthContext);

export const Register = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext); // 🔹 get signup from context

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlebtn = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    setLoading(true);

    signup(email, password).then((result) => result.user);
    navigate("/login");
    setLoading(false);

    alert("Registration Successful! Please Login.").catch((error) => {
      console.log(error.message);

      alert(error.message);
    });
  };

  return (
    <div className="flex min-h-screen ">
      {/* Left Side – Image */}
      <div className="items-center justify-center hidden w-1/2 md:flex">
        <img
          src={registerImage}
          alt="Register"
          className="object-contain w-3/4"
        />
      </div>

      {/* Right Side – Form */}
      <div className="flex items-start justify-center w-full px-10 pt-24 pb-20 bg-card text-card-foreground md:w-1/2">
        <div className="w-full max-w-lg space-y-4">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-36" />

          {/* Heading */}
          <h1 className="text-5xl font-semibold text-secondary">
            Create Your Account
          </h1>

          {/* Sub Text */}
          <p className="text-lg text-muted-foreground">
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
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-ring dark:text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-base font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-ring dark:text-black"
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
                className="w-full px-5 py-3 text-base border rounded-xl focus:ring-2 focus:ring-ring dark:text-black"
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
                className="w-full px-5 py-3 text-base border dark:text-black rounded-xl focus:ring-2 focus:ring-ring"
                required
              />
            </div>

            {/* Error */}
            {error && <p className="text-sm text-red-500">{error}</p>}

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-lg font-medium text-white transition rounded-xl bg-primary hover:opacity-90"
            >
              {loading ? "Registering..." : "Register"}
            </Button>
          </form>

          {/* Login */}
          <p className="pt-6 text-base text-center text-white/70">
            Already have an account?{" "}
            <a href="/login" className="font-semibold text-white">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
