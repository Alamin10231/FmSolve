import React, { useContext, useState } from "react";
import loginImage from "../../assets/images/loginpic.png";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Button } from "@/components/ui/button";

const Login = () => {
  // const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlebtn = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => {
        navigate("/");
      })

      .catch((error) => {
        console.log(error.message);
        alert(error.message);
        navigate("/login");
      });
    // navigate("/")
  };
  return (
    <>
      <div className="flex min-h-screen ">
        <div className="items-center justify-center hidden w-1/2 md:flex ">
          <img src={loginImage} alt="Login" className="object-contain w-3/4 " />
        </div>

        <div className="flex items-start justify-center w-full px-10 pb-20 md:w-3/5 pt-28">
          <div className="w-full max-w-lg space-y-5">
            {/* Logo */}
            <img src={logo} alt="Logo" className="mb-4 w-36" />

            {/* Heading */}
            <h1 className="text-5xl font-semibold leading-tight text-secondary">
              Welcome Back 👋
            </h1>

            {/* Sub text */}
            <p className="text-lg text-white">Please login to your account</p>

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
                  className="w-full px-5 py-3 text-base border dark:text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
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
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-5 py-3 text-black border dark:text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Forgot */}
              <div className="flex justify-end">
                <Link
                  to="/forget-password"
                  className="pt-2 text-sm text-white hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Button */}

              <Button
                type="submit"
                className="w-full py-3 text-lg font-medium text-white transition rounded-xl bg-secondary hover:opacity-90"
              >
                Login
              </Button>
            </form>

            {/* Register */}
            <Link to="/register">
              <p className="pt-6 text-base text-center">
                Don’t have an account?{" "}
                <a href="/register" className="font-semibold text-white">
                  Sign up
                </a>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
